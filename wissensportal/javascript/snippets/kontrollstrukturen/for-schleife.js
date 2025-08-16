// Variante #1 - Ich muss zugeben, ich verstehe den Sinn immernoch nicht
for (let zahl = 0; zahl <= 20; zahl++) {
    console.log(zahl);
}

let studenten = [
    "Maria",
    "Sven",
    "HansFranz",
    "Ingeborg", 
    "Herbert"
];

// Variante #2 - die wohl meistgenutzte - ist das Äquivalent zur foreach-Schleife in PHP, fokussiert auf die Werte
for (student of studenten) {
    console.log(student);
}

// Variante #3 - so ähnlich wie die foreach-Schleife in PHP, aber fokussiert auf die Indizes
for (student in studenten) {
    console.log(student);
}