//Function to redirect to books.html page
function redirectToBooksPage() {
  window.location.href = "books.html";
}

// Check if the user is logged in (replace this with your actual login check logic)
const isLoggedIn = false; // Set to true if the user is logged in, false otherwise

// Check if the user is accessing the books.html or donation.html page
const isBooksPage = window.location.href.includes("books.html");
const isDonationPage = window.location.href.includes("donation.html");

// Blur the content and show login notification if the user is not logged in and is accessing the books.html or donation.html page
if (!isLoggedIn && (isBooksPage || isDonationPage)) {
  // Get content elements to apply blur effect
  const contentElements = document.querySelectorAll(".home, .bottom");

  // Apply blur effect to content elements
  contentElements.forEach((element) => {
    element.style.filter = "blur(5px)"; // Adjust the blur level as needed
  });

  // Show login notification
  const loginNotification = createLoginNotification();
  document.body.appendChild(loginNotification);

  // Function to redirect to login.html page
  function redirectToLoginPage() {
    window.location.href = "login.html";
  }

  // Function to create login notification
  function createLoginNotification() {
    const notification = document.createElement("div");
    notification.id = "login-notification";
    notification.classList.add("notification");
    notification.innerHTML = `
    <div class="notification-container">
      <p class="hide-text">Please login to access this page.</p>
      <button type="button" class="btn btn-outline-light" onclick="redirectToLoginPage()">Login</button>
    </div>
  `;
    notification.style.position = "fixed";
    notification.style.top = "50%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";
    notification.style.backgroundColor = "#000";
    notification.style.padding = "20px";
    notification.style.border = "1px solid #fff";
    notification.style.borderRadius = "20px";
    notification.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    notification.style.color = "#fff";

    return notification;
  }
}

//check
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".switch input");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      const confirmLogin = confirm("Apakah Anda ingin melakukan login?");

      if (confirmLogin) {
        // If the user clicks OK, redirect to the login page
        window.location.href = "login.html";
      } else {
        // If the user clicks Cancel, uncheck the checkbox
        checkbox.checked = false;
      }
    }
  });
  //pop up donation
});
