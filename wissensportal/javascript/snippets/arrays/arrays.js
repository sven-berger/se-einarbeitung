let studenten = [
    "Max Müller",
    "Erika Musterfrau",
    "Annika Müller",
    "Max Mustermann"
];
console.log(studenten);

// Was ist der Typ von einem Array?
console.log(typeof studenten)
console.log(studenten instanceof Array);

// Wieviele Elemente sind in einem Array?
console.log("Anzahl der Elemente:", studenten.length);

// Auf ein einzelenes Element zugreifen.
console.log("Eintrag #1:", studenten[0]);

// Ein Element hinzufügen
studenten.push("Sven Oliver Berger", "Loveday Isa Rohleder");
console.log(studenten);

// Das LETZTE Element löschen
let letztesElement = studenten.pop(1);
console.log("Das letzte Element war:", letztesElement + "\n");

// Ein Element überschreiben
studenten[0] = "Hans Franz";
console.log(studenten);

// Ist ein Element in einem Array vorhanden?
console.log(studenten.indexOf("Hans Franz"));
/* Falls es nicht existiert: "-1" */

// Arrays von A - Z sortieren
studenten.sort();
console.log(studenten);

// Arrays von Z - A sortieren
studenten.reverse()
console.log(studenten);

// Wichtig: Sparse Arrays
// studenten[30] = "Joker!";
// console.log(studenten);

// Die .splice-Funktion zum Entfernen von Elementen
studenten.splice(0, 2);
console.log(studenten);

// Die .splice-Funktion zum Hinzufügen von Elementen
studenten.splice(1, 0, "Hans Peter");
console.log(studenten);