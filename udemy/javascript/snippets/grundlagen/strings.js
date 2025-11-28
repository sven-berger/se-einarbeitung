// Zeichen zählen
let hallo = "  <--- Hallo Welt! --->  ";
console.log(hallo.length);

// Ein/en einzelenes Zeichen / einzelenen Buchstaben auslesen
console.log(hallo.charAt(0));
console.log(hallo[1]);

// Wo findet sich ein Zeichen in einem String?
console.log(hallo.indexOf("H"));
console.log(hallo.indexOf("a"));
console.log(hallo.indexOf("--->"));

// Groß- bzw. Kleinbuchstaben
console.log(hallo.toUpperCase());
console.log(hallo.toLowerCase());

// Text ersetzen
console.log(hallo.replace("Welt", "Mars"));

// Zeichen rechts und links vom String entfernen
console.log(hallo.trim());

// Kombinieren
console.log(hallo.trim().length);

// Nicht die Kopie benutzen, sondern das Originale verändern
hallo = hallo.toUpperCase();
console.log(hallo);

// Zeilenumbruch
console.log("Hallo\nWelt");

// Einen String wiederholen
let wdh = "Wiederholung\n";
console.log(wdh.repeat(20));

// .slice(start, end)
console.log("Hallo Welt".slice(5, 7))

// .substr(start, length)
console.log(wdh.substr(6, 2))