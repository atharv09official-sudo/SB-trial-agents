# 🎓 ELiVET Coach

**AI Employability Trainer** for engineering and diploma students in Maharashtra.

ELiVET Coach is a full-stack web application that acts as a personal coach for communication, etiquette, attire, and workplace readiness — helping students get placement-ready.

---

## 🚀 Features

| Module | Description |
|--------|-------------|
| 🗣️ Communication | Dialogue coaching, vocabulary building, tone correction |
| 👔 Attire | Dress code guidance for interviews and workplace |
| 🤝 Etiquette | Interactive workplace behavior scenarios with scoring |
| 📝 Practice Zone | MCQs, role-play prompts, and challenges |
| 📊 Growth Tracker | Visual score analysis, weak-area detection, next steps |
| 💬 Personal Coach | 1-on-1 chat, goal setting, daily tips |

### Game Engine
- Interactive A/B/C scenario choices with instant feedback
- Score tracking (0-10 per question)
- Stuck detection — hints after 3 wrong attempts
- Celebration animations for high scores

### AI-Powered
- Powered by Google Gemini API (with full fallback/demo mode)
- Context-aware responses using session memory
- Supports English and Hinglish

---

## 🛠️ Tech Stack

- **Backend:** Python 3.11+ · FastAPI · SQLAlchemy · SQLite
- **Frontend:** React 18 · Vite · Tailwind CSS · Chart.js
- **AI:** Google Gemini 1.5 Flash (optional — works without API key in demo mode)

---

## 📦 Setup & Run

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm

### 1. Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.  
API docs at `http://localhost:8000/docs`.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will open at `http://localhost:3000`.

### 3. (Optional) Enable AI

Set your Gemini API key:

```bash
# Windows
set GEMINI_API_KEY=your-key-here

# Linux/Mac
export GEMINI_API_KEY=your-key-here
```

Without the key, the app runs in **demo/fallback mode** with hardcoded scenarios, MCQs, and tips.

---

### 3. 3D Virtual Workplace Simulator (Three.js Engine)

```bash
cd elvet-game
npm install
npm run dev
```

The 3D simulator opens at `http://localhost:3001` featuring:
- **Interview Room**: Desk, whiteboard, interviewer NPC with emotional state machine (`IDLE`, `REACT_POSITIVE`, `REACT_NEGATIVE`).
- **Office Floor**: Cubicles, reception, colleague NPCs, depth fog.
- **Virtual Wardrobe**: Studio lighting rig, pedestal, customizable attire & skin tone.
- **Controls**: WASD / Arrow keys movement, 1st & 3rd-person toggle, mobile touch D-pad.
- **AI Checkpoint Loop**: Token-efficient evaluation matching Claude API format.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Welcome message |
| `POST` | `/api/student/register` | Register a new student |
| `GET` | `/api/student/{id}` | Get student info |
| `GET` | `/api/students` | List all students |
| `POST` | `/api/chat` | Chat with coach (Communication/Attire/Coach) |
| `POST` | `/api/scenario/generate` | Generate an etiquette scenario |
| `POST` | `/api/scenario/answer` | Submit scenario answer, get feedback |
| `POST` | `/api/practice/mcq` | Generate MCQ quiz |
| `POST` | `/api/practice/submit` | Submit MCQ answers |
| `GET` | `/api/growth/{id}` | Get growth report |
| `GET` | `/api/growth/{id}/history` | Get score history |
| `GET` | `/api/tip/daily/{id}` | Get daily tip |

---

## 📁 Project Structure

```
agent/
├── backend/
│   ├── main.py              # FastAPI app entry point
│   ├── config.py             # Settings & env config
│   ├── database.py           # SQLite models & setup
│   ├── requirements.txt
│   ├── prompts/
│   │   └── system_prompt.py  # AI system prompt
│   ├── services/
│   │   ├── ai_engine.py      # Gemini API + fallback
│   │   ├── scenario_engine.py
│   │   ├── growth_analyzer.py
│   │   └── session_manager.py
│   └── routers/
│       ├── student.py
│       ├── chat.py
│       ├── scenario.py
│       ├── practice.py
│       ├── growth.py
│       └── tip.py
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── api.js
│       ├── styles/index.css
│       └── components/
│           ├── Landing.jsx
│           ├── ModuleSelector.jsx
│           ├── ChatPanel.jsx
│           ├── ScenarioGame.jsx
│           ├── PracticeZone.jsx
│           ├── GrowthDashboard.jsx
│           ├── DailyTip.jsx
│           └── Navbar.jsx
└── README.md
```

---

## 👨‍💻 Built By

Arsha Gandhi — YCP CSE, Sem 26-27

---

## 📄 License

This project is for academic/educational purposes.

"# SB-trial-agents" 
