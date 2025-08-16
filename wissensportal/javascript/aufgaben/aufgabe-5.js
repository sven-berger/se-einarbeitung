let studenten = "Max, Monika, Erika, Moritz, Anton";
let satz = "\x49\x63\x68\x20\x6D\xF6\x63\x68\x74\x65\x20\x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74\x20\x6C\x65\x72\x6E\x65\x6E\x21"

/* 
    Aufgabe 1 

    Erika musste ihren Sprachkurs absagen. Entferne sie aus dem String students!
    Zerlege dazu den String in ein Array mit den einzelnen Teilnehmern,
    finde dann heraus, an welcher Stelle der Teilnehmer "Erika"
    im Array vorkommt, entferne diesen Teilnehmer aus dem Array,
    und setze die Teilnehmer wieder zurück zu einem String zusammen!
*/

let studentenArray = studenten.split(", ");
let pos = studentenArray.indexOf("Erika");
studentenArray.splice(pos, 1);
studenten = studentenArray.join(", ");

/* 
    Aufgabe 2
    
    Die Liste soll jetzt ausgedruckt werden. Zerlege dazu wieder
    die Liste in ein Array, und setze sie wieder zu einem String zusammen,
    sodass folgende Ausgabe erzeugt wird:

    - Max
    - Monika
    - Moritz
    - Anton
*/

let array = studenten.split(", ");
let string = " - " + array.join("\n - ");
console.log(string);

/*
    Aufgabe 3
    
    Zähle die Wörter in der Variable "sentence"! Versuche dabei,
    dir den Inhalt der Variable erst nach der Aufgabe anzuschauen!
 
    Tipp: Du kannst hierfür die .split()-Methode verwenden! Wie?
*/

console.log("Der Satz beinnhaltet ingesamt", satz.split(" ").length, "Wörter.");
console.log(satz);