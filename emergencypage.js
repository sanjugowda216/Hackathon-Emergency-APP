
async function submitMessage() {
const message = document.getElementById("message").value;

  try {
    // Use a proxy server or update your server to allow CORS
    const response = await fetch(
      `https://corsproxy.io/?https://cs-api.pltw.org/hackathon?text=${encodeURIComponent(message)}`,
      {
        method: "POST",
        mode: "cors", // Change mode to "cors"
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.text();

    document.getElementById("submitResult").innerHTML = 'Your message has been saved! ' +data+ ' view messages, please click the "view messages" button.';
  } catch (error) {
    console.error("Error", error);
    alert("Error: " + error.message);
  }
}
function datePicker() {
  let t = new Date();
  let day = t.getDate();
  let month = t.getMonth();
  let year = t.getFullYear(); 
  document.getElementById("date").innerHTML = (month+1+"/"+day+"/"+year);
}
function timePicker() {
  let t = new Date();
  let time = t.toLocaleTimeString();
  document.getElementById("time").innerHTML = time;
}



//logout feature
function logout(){
window.location.href = "loginPage.html";    
}
function homePage(){
  window.location.href = "index.html"; 
}

function viewMessages() {
  window.open("https://cs-api.pltw.org/hackathon");
}


var password = "6020";

async function verify() {
	const password = document.getElementById("adminPass").value;
	if (password === "6020") {
		let result = "Data for endpoint has been cleared.";
		document.getElementById("resultLabel").innerHTML = result;
		document.getElementById("reset").style.visibility='visible';
		try {
			const response = await fetch(
				"https://corsproxy.io/?https://cs-api.pltw.org/hackathon/reset",
				{
					method: "POST",
					mode: "cors",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ password: "6020" }) // Send password in request body instead of URL
				}
			);

			console.log(response);

			if (!response.ok) {
				throw new Error(`Request failed with status: ${response.status}`);
			}

			const data = await response.text();
			console.log(data);

		} catch (error) {
			console.error("Error", error);
			alert("Error: " + error.message);
		}
	} else {
		let result = "Incorrect Password! Please contact admin or re-enter the password to reset all messages!";
		document.getElementById("resultLabel").innerHTML = result;
		document.getElementById("reset").style.visibility='hidden';
	}
}

