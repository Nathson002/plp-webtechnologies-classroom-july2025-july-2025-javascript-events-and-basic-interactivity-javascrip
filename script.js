// =============================
// Part 1: Event Handling
// =============================

// Show a message when button is clicked
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("clickMessage").textContent = "Button was clicked!";
});

// Change text color when hovered
document.getElementById("hoverText").addEventListener("mouseover", function () {
  this.style.color = "red";
});
document.getElementById("hoverText").addEventListener("mouseout", function () {
  this.style.color = "black";
});

// =============================
// Part 2: Interactive Elements
// =============================

// Toggle dark/light mode
document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = count;
});

// =============================
// Part 3: Form Validation
// =============================
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  if (name === "") {
    message = "❌ Name is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    message = "❌ Enter a valid email address.";
  } else if (password.length < 6) {
    message = "❌ Password must be at least 6 characters long.";
  } else {
    message = "✅ Form submitted successfully!";
  }

  document.getElementById("formMessage").textContent = message;
});
