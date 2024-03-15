function generateWorkout(event) {
  event.preventDefault();

  new Typewriter("#workout", {
    strings: "Workout of The Day",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let workoutFormElement = document.querySelector("#HIIT-workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
