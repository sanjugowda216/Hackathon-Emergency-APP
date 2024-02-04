function homePage() {
  window.location.href = "index.html";
}

function datePicker() {
  let t = new Date();
  let day = t.getDate();
  let month = t.getMonth();
  let year = t.getFullYear();
  document.getElementById("date").innerHTML =
    month + 1 + "/" + day + "/" + year;
}
function timePicker() {
  let t = new Date();
  let time = t.toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}

//API Password: 6507// SHELY SHELY ok i made the view messages U DID SO GOOD thanks the api is working okaybut i need to parse it to json rq
function viewMessages() {
  window.open("https://cs-api.pltw.org/hackathon");
}

//shely make sure you add the same api and message saving stuff in the admin page and viewing message in the api so the admin can see what the client inputed but in the admin page there should be a enter admin password to reset/delete all messages in the api you can also add the password feature in the client page but i can help you just let me know when you are ready - im going to write my english speech rn
//ok im going to eat lunch - i will do it later kk
