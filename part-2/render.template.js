const basicTemplate = require("./dynamic.html.template");

console.log(
  basicTemplate({ title: "My first template", body: "Hello, World!" })
);
