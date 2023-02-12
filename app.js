function handleTickInit(tick) {
  // start a timer that is updated each 16 milliseconds
  var timer = Tick.helper.interval(
    function (passed) {
      // calculate duration in minutes, seconds and milliseconds
      tick.value = Tick.helper.duration(passed, ["h", "m", "s", "ms"]);
    },
    16,
    {
      autostart: false,
    }
  );

  document.addEventListener("keypress", (e) => {
    if (e.key === "s") timer.start();
    if (e.key === "p") timer.pause();
    if (e.key === "e") timer.reset();
  });
}

let docs = document.querySelector(".docs");
docs.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("open");
});
