// Fetch existing tasks and display them
function fetchTasks() {
    fetch("https://shrimo.com/fake-api/todos")
        .then(response => response.json()) // Parse JSON
        .then(jsonData => {
            console.log("Fetched Tasks:", jsonData);

            let cardContainer = document.querySelector(".card");

            if (cardContainer) {
                cardContainer.innerHTML = ""; // Clear previous tasks before appending new ones

                jsonData.forEach((task, index) => {
                    cardContainer.innerHTML += `
                        <h4> Task ${index + 1}: ${task.title} </h4> 
                        <p><strong>Description:</strong> ${task.description}</p>
                        <p><strong>Due Date:</strong> ${new Date(task.dueDate).toDateString()}</p>
                        <p><strong>Priority:</strong> ${task.priority}</p>
                        <p><strong>Status:</strong> ${task.status}</p>
                        <p><strong>Tags:</strong> ${task.tags.join(", ")}</p>
                        <hr>
                    `;
                });
            } else {
                console.error("No elements with class 'card' found.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
        });
}

// Function to add a new task
function addTodo(event) {
    event.preventDefault(); // Prevent form reload

    let taskTitle = document.getElementById("title").value.trim();
    let taskDescription = document.getElementById("description").value.trim();
    let taskDueDate = document.getElementById("dueDate").value;
    let taskPriority = document.getElementById("priority").value.trim();
    let taskStatus = document.getElementById("status").value.trim();
    let taskTags = [
        document.getElementById("tags1").value.trim(),
        document.getElementById("tags2").value.trim()
    ].filter(tag => tag !== ""); // Remove empty tags

    if (!taskTitle) {
        alert("Please enter a task title.");
        return;
    }

    fetch("https://shrimo.com/fake-api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: taskTitle,
            description: taskDescription || "New task",
            dueDate: taskDueDate || new Date().toISOString(),
            priority: taskPriority || "Medium",
            status: taskStatus || "Not Started",
            tags: taskTags,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("New Task Added:", data);
        alert("Task added successfully!");

        // Reset form fields
        document.getElementById("todoForm").reset();

        // Re-fetch tasks to update the UI dynamically
        fetchTasks();
    })
    .catch(error => console.error("Error adding task:", error));
}

// Attach event listener to the form
document.getElementById("todoForm").addEventListener("submit", addTodo);

// Load existing tasks when the page loads
fetchTasks();
