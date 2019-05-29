const genID = require("./genid.js");

let data = [
  {
    id: genID(),
    name: "Josh",
    level: "G12"
  },
  {
    id: genID(),
    name: "Clementina",
    level: "G12"
  },
  {
    id: genID(),
    name: "Karli",
    level: "G12"
  }
];

console.log(data);
