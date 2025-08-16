let english1 = [
    "\x4C\x75\x7A\x69\x61",
    "\x4B\x69\x61\x6E\x61",
    "\x42\x65\x6E\x65\x64\x65\x74\x74\x6F",
    "\x47\xFC\x6E\x74\x68\x65\x72"
];
  
let english2 = [
    "\x57\x69\x62\x6B\x65",
    "\x4A\x65\x61\x6E\x6E\x65\x74\x74\x65",
    "\x50\x61\x75\x6C"
]; 

// Aufgabe A

console.log(english1.indexOf("Paul"));
console.log(english2.indexOf("Paul"));
english2.push("Monika");

// Aufgabe B
console.log(english1.indexOf("Günther"));
console.log(english2.indexOf("Günther"));

let gue = english1.indexOf("Günther");
english1.splice(gue, 1);
console.log(english1.indexOf("Günther"));

// Aufgabe C

english1.sort();
english2.sort()

// Aufgabe D
english1.splice(0, 0, "Anton");

// Aufgabe E
console.log("Aktuell sind in Kurs #1", english1.length + " Teilnehmer und im Kurs #2", english2.length + " Teilnehmer!");
console.log(english1);
console.log("\n");
console.log(english2);