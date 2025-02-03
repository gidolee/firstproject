// Select elements
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

// Add task event
addToDoButton.addEventListener("click", function () {
  // Prevent adding empty tasks
  if (inputField.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a task element
  let paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;

  // Add a remove button
  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "&#10006;"; // Cross symbol
  removeBtn.classList.add("remove-btn");

  // Append remove button to the task
  paragraph.appendChild(removeBtn);

  // Append task to container
  toDoContainer.appendChild(paragraph);

  // Clear the input field
  inputField.value = "";

  // Remove task on button click  
  removeBtn.addEventListener("click", function () {
    toDoContainer.removeChild(paragraph);
  });
});
