var password = "admin";

//const passwordInput = document.getElementById("login");
//const submitButton = document.querySelector(".submit");

function admin() {
  const password = document.getElementById("login").value;
  if (password === "admin") {
    window.location.href=("emergencypage.html");
  }
  else if (password != "admin") {
    let result = "Incorrect Password! Please try again to login...";
    document.getElementById("result").innerHTML = result;
  }
}

function homePage(){
  window.location.href = "index.html"; 
}
// YAYAYYAYYAYYAYAYAYAYAAYAYAYAYAAYAYAYAYAYAAYAYAYAAY 