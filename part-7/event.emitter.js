const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was emitted.");
});

customEvent.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was emitted.");
});

customEvent.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was emitted.");
});

customEvent.emit("TEST_EVENT");
