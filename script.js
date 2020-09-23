// Write your JavaScript code here!


window.addEventListener("load", function() {
   let form = document.querySelector("form");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
              // Access the JSON in the response
              response.json().then( function(json) {
                randomArrayNumber = Math.floor(Math.random() * json.length)
                const div = document.getElementById('missionTarget');
                div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${json[randomArrayNumber].name}</li>
                   <li>Diameter: ${json[randomArrayNumber].diameter}</li>
                   <li>Star: ${json[randomArrayNumber].star}</li>
                   <li>Distance from Earth: ${json[randomArrayNumber].distance}</li>
                   <li>Number of Moons: ${json[randomArrayNumber].moons}</li>
                </ol>
                <img src="${json[randomArrayNumber].image}">
                `;
              });
          });


   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      let launchStatus = document.getElementById("faultyItems");
      let launchReady = true;
      let inputs = true;
      
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         launchReady = false;
         inputs = false;
         
      }   
      
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Please be sure to enter valid information for each field!");
         event.preventDefault();
         launchReady = false;
         inputs = false;
      }

      if (isNaN(pilotName.value)) {
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value}, the pilot, is Ready.`;
         event.preventDefault();
         
      }   
      

      if (isNaN(copilotName.value)) {
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value}, the co-pilot, is Ready.`;  
         event.preventDefault();
         
      }

      if (isNaN(fuelLevel.value)) {
         alert("Fuel Level must be a number!");
         event.preventDefault();
         launchReady = false;
         inputs = false;
      }

      if (isNaN(cargoMass.value)) {
         alert("Cargo Mass must be a number!");
         event.preventDefault();
         launchReady = false;
         inputs = false;
      }
      
      if (fuelLevel.value < 10000) {
         event.preventDefault();
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerHTML = `Fuel level insufficient for launch.`;
         launchStatus.style.visibility = "visible";
         launchReady = false;
      }

      if (cargoMass.value > 10000) {
         event.preventDefault();
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("cargoStatus").innerHTML = `Cargo Mass too much for launch.`;
         launchStatus.style.visibility = "visible";
         launchReady = false;
         
      }

      if (inputs === false) {
         event.preventDefault();
         document.getElementById("launchStatus").innerHTML = `Awaiting Information Before Launch`;
         document.getElementById("launchStatus").style.color = "black";
         launchStatus.style.visibility = 'hidden';

      }

      if (launchReady === true) {
         event.preventDefault();
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch."
         document.getElementById("launchStatus").style.color = "green";
         launchStatus.style.visibility = "visible";
      }

  });
});
      




 