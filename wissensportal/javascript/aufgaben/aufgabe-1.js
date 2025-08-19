// Tag im Monat
let tag = (new Date()).getDate()

// Der Name aktuellen Monats
let monat = (new Date()).toLocaleString(["de", "en"], {month: "long"})

// Das aktuelle Jahr (Schreibweise 1)
let jahr1 = (new Date()).getFullYear()

// Das aktuelle Jahr (Schreibweise 2)
let jahr2 = (new Date()).toLocaleString(["de", "en"], {year: "numeric"})

////////////////////////////////////////////////////////////////////////////
// Aufgabe:
// 
// 1) Um was für einen Typ handelt es sich bei der Variable "dayOfMonth"
//    sowie "monthName"? Verwende dazu den "typeof"-Operator!
// 2) Warum klappt "year1 + 5", aber "year2 + 5" liefert eine andere Ausgabe?
//    Wie kann der typeof-Operator dir dabei helfen?
// 3) Erstelle eine Datumsausgabe. Beispielsweise sollte am 20. August 2020
//    folgender Text über ein console.log ausgegeben werden:
//      >> Heute ist der 20. August 2020
//    Verwende dazu den "+"-Operator. Bedenke, dass du mehrere Operatoren 
//    hintereinander hängen darfst: 
//      >> console.log("a" + "b" + "c") => Gibt "abc" aus
// 
////////////////////////////////////////////////////////////////////////////

// Aufgabe 1
console.log(typeof tag);
console.log(typeof monat);
console.log("--------");

// Aufgabe 2
console.log(typeof jahr1 + 5);
console.log(typeof jahr2 + 5);
console.log("--------");

// Jahr 1 ist eine Zahl, daher rechnet er korrekt
// Jahr 2 ist ein String, daher wird die Zahl 5 einfach an den String dran gehängt

// Aufgabe 3
console.log("Heute ist der " + tag + ". " + monat + " " + jahr1);
console.log("--------");