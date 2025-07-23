document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Simulate submission
  document.getElementById("responseMsg").innerText = `Thank you, ${name}, for your feedback!`;

  // Clear the form
  this.reset();
});
