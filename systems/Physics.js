/**
 * ELiVET Game Engine — Physics & Kinematics Engine
 * Provides physical velocity integration, acceleration, friction damping,
 * mass inertia, and smooth surface collision sliding with normal vectors.
 */

import * as THREE from 'three';

export class PhysicsSystem {
  constructor() {
    // Static obstacle colliders in scene: array of { box: THREE.Box3, normal: THREE.Vector3, center: THREE.Vector3 }
    this.colliders = [];

    // World boundary limits [minX, maxX, minZ, maxZ]
    this.boundaries = {
      minX: -4.5,
      maxX: 4.5,
      minZ: -4.5,
      maxZ: 4.5
    };

    // Physical movement constants
    this.friction = 0.82; // Ground friction damping (0 = instant stop, 1 = ice)
    this.acceleration = 32.0; // Acceleration in m/s^2
    this.maxSpeed = 3.6; // Max walking velocity in m/s

    // Dynamic player kinematic state
    this.velocity = new THREE.Vector3();
    this.accelerationVector = new THREE.Vector3();

    // Reusable vectors for zero garbage-collection overhead
    this._tempBox = new THREE.Box3();
    this._playerBox = new THREE.Box3();
    this._normal = new THREE.Vector3();
    this._slideVec = new THREE.Vector3();
  }

  /**
   * Set room boundaries
   */
  setBoundaries(minX, maxX, minZ, maxZ) {
    this.boundaries = { minX, maxX, minZ, maxZ };
  }

  /**
   * Register static obstacles (desks, partitions, walls, chairs)
   */
  addStaticCollider(meshOrBox) {
    if (meshOrBox.isMesh) {
      meshOrBox.geometry.computeBoundingBox();
      const box = new THREE.Box3();
      box.copy(meshOrBox.geometry.boundingBox).applyMatrix4(meshOrBox.matrixWorld);
      this.colliders.push(box);
    } else if (meshOrBox.isBox3) {
      this.colliders.push(meshOrBox);
    }
  }

  /**
   * Clear colliders on scene swap
   */
  clear() {
    this.colliders = [];
    this.velocity.set(0, 0, 0);
  }

  /**
   * Physical Kinematics Integration:
   * Applies acceleration, friction damping, velocity limits, and normal collision sliding.
   * 
   * @param {THREE.Vector3} currentPos - Player avatar current world position
   * @param {THREE.Vector2} inputDir - Raw normalized directional input (x: strafe, y: forward/back)
   * @param {number} delta - Frame delta in seconds
   * @param {number} radius - Capsule collision radius (default 0.35m)
   * @returns {{ position: THREE.Vector3, isMoving: boolean, speed: number }}
   */
  updateKinematics(currentPos, inputDir, delta, radius = 0.35) {
    // 1. Calculate Acceleration Force from Input
    if (inputDir.lengthSq() > 0.01) {
      this.accelerationVector.set(inputDir.x, 0, inputDir.y).normalize().multiplyScalar(this.acceleration);
      this.velocity.addScaledVector(this.accelerationVector, delta);
    }

    // 2. Apply Physical Ground Friction (Exponential Damping)
    const dampFactor = Math.pow(this.friction, delta * 60);
    this.velocity.x *= dampFactor;
    this.velocity.z *= dampFactor;

    // Zero out tiny velocity jitter
    if (Math.abs(this.velocity.x) < 0.001) this.velocity.x = 0;
    if (Math.abs(this.velocity.z) < 0.001) this.velocity.z = 0;

    // 3. Clamp Velocity to Maximum Physical Speed
    const currentSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    if (currentSpeed > this.maxSpeed) {
      this.velocity.x = (this.velocity.x / currentSpeed) * this.maxSpeed;
      this.velocity.z = (this.velocity.z / currentSpeed) * this.maxSpeed;
    }

    // 4. Proposed Position
    const proposedPos = currentPos.clone().addScaledVector(this.velocity, delta);

    // 5. Room Boundary Physical Restitution
    if (proposedPos.x < this.boundaries.minX + radius) {
      proposedPos.x = this.boundaries.minX + radius;
      this.velocity.x = 0;
    } else if (proposedPos.x > this.boundaries.maxX - radius) {
      proposedPos.x = this.boundaries.maxX - radius;
      this.velocity.x = 0;
    }

    if (proposedPos.z < this.boundaries.minZ + radius) {
      proposedPos.z = this.boundaries.minZ + radius;
      this.velocity.z = 0;
    } else if (proposedPos.z > this.boundaries.maxZ - radius) {
      proposedPos.z = this.boundaries.maxZ - radius;
      this.velocity.z = 0;
    }

    // 6. Obstacle Collision Resolution with Physical Normal Surface Sliding
    this._playerBox.min.set(proposedPos.x - radius, proposedPos.y, proposedPos.z - radius);
    this._playerBox.max.set(proposedPos.x + radius, proposedPos.y + 1.8, proposedPos.z + radius);

    for (let i = 0; i < this.colliders.length; i++) {
      const obstacle = this.colliders[i];
      if (this._playerBox.intersectsBox(obstacle)) {
        // Calculate collision normal based on penetration depth
        const overlapX1 = obstacle.max.x - (proposedPos.x - radius);
        const overlapX2 = (proposedPos.x + radius) - obstacle.min.x;
        const overlapZ1 = obstacle.max.z - (proposedPos.z - radius);
        const overlapZ2 = (proposedPos.z + radius) - obstacle.min.z;

        const minOverlapX = Math.min(overlapX1, overlapX2);
        const minOverlapZ = Math.min(overlapZ1, overlapZ2);

        if (minOverlapX < minOverlapZ) {
          // Slide along Z axis, arrest X velocity
          proposedPos.x = currentPos.x;
          this.velocity.x = 0;
        } else {
          // Slide along X axis, arrest Z velocity
          proposedPos.z = currentPos.z;
          this.velocity.z = 0;
        }
        break;
      }
    }

    currentPos.copy(proposedPos);

    return {
      position: currentPos,
      isMoving: currentSpeed > 0.08,
      speed: currentSpeed
    };
  }

  /**
   * Direct collision check for teleportation or spawn placement
   */
  resolvePlayerMovement(currentPos, targetPos, radius = 0.35) {
    this.velocity.set(0, 0, 0);
    targetPos.x = Math.max(this.boundaries.minX + radius, Math.min(this.boundaries.maxX - radius, targetPos.x));
    targetPos.z = Math.max(this.boundaries.minZ + radius, Math.min(this.boundaries.maxZ - radius, targetPos.z));
    return targetPos;
  }
}
