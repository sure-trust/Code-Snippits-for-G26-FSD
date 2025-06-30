import os
import json
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from fastapi.responses import HTMLResponse

# Example todos (for reference, not used in code)
# example_todos = [
#     {"id": 1, "title": "Buy groceries", "description": "Milk, Bread, Eggs", "completed": False},
#     {"id": 2, "title": "Read a book", "description": "Finish reading 'Atomic Habits'", "completed": True}
# ]

# Pydantic schema for a Todo item
class Todo(BaseModel):
    id: Optional[int] = Field(None, description="Unique identifier for the todo")
    title: str = Field(..., example="Buy groceries", description="Title of the todo item")
    description: Optional[str] = Field("", example="Milk, Bread, Eggs", description="Detailed description")
    completed: bool = Field(False, example=False, description="Completion status")

# Initialize FastAPI app
app = FastAPI()

# Constants for assets directory and todo file path
ASSETS_DIR = "assets"
TODO_FILE = os.path.join(ASSETS_DIR, "todos.json")

# Ensure the assets directory and todos.json file exist
# If not, create them with an empty list as the initial data
def ensure_todo_file():
    if not os.path.exists(ASSETS_DIR):
        os.makedirs(ASSETS_DIR)
    if not os.path.exists(TODO_FILE):
        with open(TODO_FILE, "w") as f:
            json.dump([], f)

# Read all todos from the JSON file
def read_todos() -> List[dict]:
    ensure_todo_file()
    with open(TODO_FILE, "r") as f:
        return json.load(f)

# Write the list of todos to the JSON file
def write_todos(todos: List[dict]):
    with open(TODO_FILE, "w") as f:
        json.dump(todos, f, indent=2)

@app.get("/html", response_class=HTMLResponse)
async def read_html():
    return """
    <html>
        <head>
            <title>Some HTML in here</title>
        </head>
        <body>
            <h1>Look ma! HTML!</h1>
        </body>
    </html>
    """

# Health check endpoint to verify the server is running
@app.get("/health")
def read_root():
    return {"status": "ok"}

# Get all todos
@app.get("/todos", response_model=List[Todo])
def get_todos():
    """
    Returns a list of all todo items.
    """
    return read_todos()

# Create a new todo item
@app.post("/todos", response_model=Todo)
def create_todo(todo: Todo):
    """
    Adds a new todo item to the list.
    Automatically assigns a unique ID to the new todo.
    """
    todos = read_todos()
    todo_dict = todo.dict(exclude_unset=True)
    todo_dict["id"] = max([t["id"] for t in todos], default=0) + 1
    todos.append(todo_dict)
    write_todos(todos)
    return todo_dict

# Get a specific todo item by its ID
@app.get("/todos/{todo_id}", response_model=Todo)
def get_todo(todo_id: int):
    """
    Returns a single todo item by its ID.
    Raises 404 if not found.
    """
    todos = read_todos()
    for todo in todos:
        if todo["id"] == todo_id:
            return todo
    raise HTTPException(status_code=404, detail="Todo not found")

# Update a specific todo item by its ID
@app.put("/todos/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, updated_todo: Todo):
    """
    Updates the fields of a todo item by its ID.
    Raises 404 if not found.
    """
    todos = read_todos()
    for idx, todo in enumerate(todos):
        if todo["id"] == todo_id:
            updated = updated_todo.dict(exclude_unset=True)
            updated["id"] = todo_id  # Ensure ID is not changed
            todos[idx].update(updated)
            write_todos(todos)
            return todos[idx]
    raise HTTPException(status_code=404, detail="Todo not found")

# Delete a specific todo item by its ID
@app.delete("/todos/{todo_id}", response_model=Todo)
def delete_todo(todo_id: int):
    """
    Deletes a todo item by its ID.
    Raises 404 if not found.
    """
    todos = read_todos()
    for idx, todo in enumerate(todos):
        if todo["id"] == todo_id:
            deleted = todos.pop(idx)
            write_todos(todos)
            return deleted
    raise HTTPException(status_code=404, detail="Todo not found")