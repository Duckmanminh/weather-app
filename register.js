function register() {
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();
    const message = document.getElementById("register-message");
  
    if (!email || !password) {
      message.style.color = "red";
      message.textContent = "Please enter both email and password.";
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      message.style.color = "red";
      message.textContent = "User already exists.";
      return;
    }
  
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    message.style.color = "green";
    message.textContent = "Registration successful!";
  }
  