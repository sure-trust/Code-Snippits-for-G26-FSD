# FastAPI Todo App

A simple FastAPI-based Todo application using a JSON file as a database.

## Features
- CRUD operations for todos (Create, Read, Update, Delete)
- Data stored in `assets/todos.json`
- Pydantic schema validation
- Example HTML endpoint

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <your-repo-directory>
```

### 2. Create and activate a virtual environment

#### On **Linux/macOS**:
```bash
python3 -m venv venv
source venv/bin/activate
```

#### On **Windows**:
```cmd
python -m venv venv
venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Start the FastAPI server
```bash
fastapi dev main.py
```

- The API will be available at: http://127.0.0.1:8000
- Interactive docs: http://127.0.0.1:8000/docs

## Endpoints
- `GET /todos` — List all todos
- `POST /todos` — Create a new todo
- `GET /todos/{todo_id}` — Get a todo by ID
- `PUT /todos/{todo_id}` — Update a todo by ID
- `DELETE /todos/{todo_id}` — Delete a todo by ID
- `GET /health` — Health check
- `GET /html` — Example HTML response

## Notes
- The `assets/todos.json` file is ignored by git (see `.gitignore`).
- Example todos and schema are in `main.py` as comments. 