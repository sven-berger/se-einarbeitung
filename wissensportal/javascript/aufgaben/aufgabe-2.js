let shopping = "     Apfel, Pfirisch, +++Avocado, Mango    ";

// Aufgabe1: Entferne die Leerzeichen links und rechts - Schreibe das Ergebnis zurück in die Variable "shopping"
console.log(shopping = shopping.trim())

// Aufgabe 2: Finde die Position der drei Plus-Zeichen
let pos = shopping.indexOf("+++")
console.log(pos);

// Aufgabe 3: Ersetze die Plus-Zeichen mit einer .substr() und einer .slice-Funktion
/// .substr()
console.log(shopping.substr(0, pos) + shopping.substr(pos + 3))
/// .slice
console.log(shopping.slice(0, pos) + shopping.slice(pos + 3))

// Aufgabe 4: Ersetze die Plus-Zeichen mit der .replace-Funktion
console.log(shopping.replace("+++",""));

// Aufgabe 5: Gib die Liste aus
shopping = shopping.replace("+++","");
console.log("Einkaufsliste:");
console.log(" -  " + shopping.replace(",", "\n - ").replace(",", "\n - ").replace(",", "\n - "));
console.log("-".repeat(20));