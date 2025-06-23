function testCreateTaskElement_clickTogglesCompleted() {
  const taskItem = createTaskElement("Test Task");

  // simulate clicking the item
  taskItem.click();

  if (!taskItem.classList.contains("completed")) {
    console.error(" Test failed: Task isnt marked as completed after click");
  } else {
    console.log(" Test passed: Task is marked completed on click");
  }
}

// Run the test
testCreateTaskElement_clickTogglesCompleted();
