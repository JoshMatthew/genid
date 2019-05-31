const genID = require("./genid.js");

let data = [
  {
    id: genID(),
    name: "Marilie",
    level: "Lead Accounts Assistant"
  },
  {
    id: genID(),
    name: "Clementina",
    level: "Human Program Technician"
  },
  {
    id: genID(),
    name: "Karli",
    level: "Customer Identity Engineer"
  }
];

console.log(data);
