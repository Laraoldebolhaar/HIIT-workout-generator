function displayWorkout(response) {
  console.log("workout generated");
  new Typewriter("#workout", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "30560794ofe15t2924a35bbc6345451b";
  let context =
    "Act as if you are a personal trainer and expert on high intensity workouts. Do make sure the workouts can be done without equipment and take between 10-30 min. Present the workout in a simple list format. First, list the all the movements and after that give a short instruction of no more than 3 sentenses for the whole workout.";
  let userPrompt = `Generate a high intensity workout focusing on ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${userPrompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWorkout);
}

let workoutFormElement = document.querySelector("#HIIT-workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
