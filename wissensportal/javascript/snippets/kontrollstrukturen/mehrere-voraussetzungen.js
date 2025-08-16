zahl1 = 10;
zahl2 = 20;
zahl3 = 30;

liste1 = ["Hans, Franz"];
liste2 = ["Horst, Peter"];

if (zahl1 === 10 || zahl2 === 20 /* Alternativ */ && zahl3 === 30) {
    console.log("Hallo Welt");
}

// Etwas unsaubere Methode zum Feststellen, ob ein bestimmter Name in der Liste ist..
if (liste1.indexOf("Sven") === -1 && liste2.indexOf("Sven") === -1) {
    console.log("Ich will die ganze Zeit 'echo' schreiben!");
}

// Saubere Methode
if (liste1.indexOf("Sven") !== -1) {
    console.log("Sven gibt es bereits!");
} else {
    console.log("Es ist kein Teilnehmer mit dem Namen vorhanden");
}