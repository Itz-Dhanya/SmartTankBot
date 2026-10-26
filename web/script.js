
const state = {
  connected: true,
  moving: false,
  movement: "Stopped",
  brush: false
};

const $ = (id) => document.getElementById(id);
const activityList = $("activityList");

// Add an entry to the activity log
function logActivity(title, detail) {
  const li = document.createElement("li");

  const dot = document.createElement("span");
  dot.className = "log-dot";

  const content = document.createElement("span");

  const heading = document.createElement("b");
  heading.textContent = title;

  const description = document.createElement("small");
  description.textContent = detail;

  content.append(heading, description);

  const time = document.createElement("time");
  time.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  li.append(dot, content, time);
  activityList.prepend(li);
}

// Update the dashboard message
function feedback(message) {
  $("feedback").textContent = message;
}

// Update the displayed dashboard state
function render() {
  $("connectionText").textContent = state.connected
    ? "Demo simulation"
    : "Disconnected (simulated)";

  $("connectionDot").style.background = state.connected
    ? "#d98b2b"
    : "#c75b4b";

  $("connectionDot").style.boxShadow = state.connected
    ? "0 0 0 4px #fff0d8"
    : "0 0 0 4px #fce7e3";

  $("connectionButton").textContent = state.connected
    ? "Simulate disconnect"
    : "Reconnect demo";

  $("movementValue").textContent = state.moving
    ? state.movement
    : "Stopped";

  $("brushValue").textContent = state.brush
    ? "On (demo)"
    : "Off";

  $("wifiValue").textContent = state.connected
    ? "Demo only"
    : "Disconnected";

  // No real battery sensor is connected
  $("batteryValue").textContent = "Not connected";

  $("robotStateTag").textContent = state.moving
    ? "MOVING (DEMO)"
    : "STANDBY";

  $("robotStateTag").classList.toggle(
    "running",
    state.moving
  );

  $("brushToggle").classList.toggle(
    "on",
    state.brush
  );

  $("brushToggle").setAttribute(
    "aria-pressed",
    String(state.brush)
  );

  $("brushToggleText").textContent = state.brush
    ? "ON"
    : "OFF";

  document
    .querySelector(".robot-body")
    .classList.toggle("moving", state.moving);

  $("brushVisual").classList.toggle(
    "active",
    state.brush
  );
}

// Stop movement and brush in the simulation
function stopAll() {
  state.moving = false;
  state.movement = "Stopped";
  state.brush = false;

  render();

  feedback(
    "Stop all selected. Simulated movement and brush are off."
  );

  logActivity(
    "Stop all",
    "Movement and brush switched off in demo"
  );
}

// Directional movement controls
document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!state.connected) {
      feedback(
        "Demo is disconnected. Reconnect before sending simulated commands."
      );
      return;
    }

    state.moving = true;
    state.movement = button.dataset.move;

    render();

    feedback(
      `Simulated movement command: ${state.movement}. No physical robot is connected.`
    );

    logActivity(
      "Movement command",
      `${state.movement} (simulation only)`
    );
  });
});

// Start button
$("startButton").addEventListener("click", () => {
  if (!state.connected) {
    feedback("Cannot start: reconnect the demo first.");
    return;
  }

  state.moving = true;
  state.movement = "Forward";

  render();

  feedback(
    "Robot started in simulation mode. This does not move physical hardware."
  );

  logActivity(
    "Start robot",
    "Simulated start command"
  );
});

// Stop movement button
$("stopButton").addEventListener("click", () => {
  state.moving = false;
  state.movement = "Stopped";

  render();

  feedback("Movement stop command simulated.");

  logActivity(
    "Stop movement",
    "Simulated stop command"
  );
});

// Stop all button
$("stopAllButton").addEventListener("click", stopAll);

// Rotating brush ON/OFF button
$("brushToggle").addEventListener("click", () => {
  if (!state.connected) {
    feedback(
      "Demo is disconnected. Reconnect before changing simulated brush state."
    );
    return;
  }

  state.brush = !state.brush;

  render();

  feedback(
    `Rotating brush switched ${state.brush ? "ON" : "OFF"} in simulation only.`
  );

  logActivity(
    "Brush command",
    `Brush ${state.brush ? "ON" : "OFF"} (simulation only)`
  );
});

// Simulate Wi-Fi disconnect and reconnect
$("connectionButton").addEventListener("click", () => {
  state.connected = !state.connected;

  if (!state.connected) {
    state.moving = false;
    state.movement = "Stopped";
    state.brush = false;
  }

  render();

  feedback(
    state.connected
      ? "Demo reconnected. Controls are available in simulation mode."
      : "Demo disconnected. Simulated movement and brush have been stopped."
  );

  logActivity(
    state.connected
      ? "Demo reconnected"
      : "Demo disconnected",
    "Connection state changed locally"
  );
});

// Clear the activity log
$("clearLogButton").addEventListener("click", () => {
  activityList.replaceChildren();

  logActivity(
    "Activity log cleared",
    "New demo events will appear here"
  );
});

// Initialize the dashboard
render();
