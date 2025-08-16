let studenten1 = ["Thorsten", "Laura"];
let studenten2 = ["Tobias", "Anna", "Michelle"];

// Aufgabe 1: Überprüfung ob Teilnehmer Thorsten in einer Liste ist
if (studenten1.indexOf("Thorsten") !== -1) {
    console.log("Tobias ist in der Liste #1");
} else if (studenten2.indexOf("Thorsten") !== -1) {
    console.log("Tobias ist in der Liste #2");
} else {
    console.log("Tobias ist in keiner Liste eingeschrieben.");
}

// Aufgabe 2: Überprüfung welcher Kurs weniger Teilnehmer hat - Tom kommt in diesen.
if (studenten1.length < studenten2.length) {
    let neuerStudent ="Tom";
    studenten1.push(neuerStudent);
} else if (studenten1.length > studenten2.length) {
    let neuerStudent ="Tom";
    studenten2.push(neuerStudent);
} else {
    console.log("Rücksprache erforderlich: Beide Kurse haben die gleiche Anzahl an Teilnehmern")
}

// Aufgabe 3: Tobias muss absagen, entferne diesen aus der Liste
let tobiAbsage = true;
if (studenten1.indexOf("Tobias") !== -1 || studenten2.indexOf("Tobias") !== -1) {
    if (tobiAbsage) {
        if (studenten1.indexOf("Tobias") !== -1) {
            studenten1.splice(studenten1.indexOf("Tobias"), 1);
        } else if (studenten2.indexOf("Tobias") !== -1) {
            studenten2.splice(studenten2.indexOf("Tobias"), 1);
        }
    }
}

// Aufgabe 4: Je mehr Teilnehmer eingeschrieben sind, desto günstiger wird der Kurs für die Teilnehmer.
/*   
    - Bei nur einem Teilnehmer: 40€ / Stunde / Teilnehmer
    - Bei 2-5 Teilnehmern: 25€ / Stunde / Teilnehmer
    - Bei 6 oder mehr Teilnehmern: 15€ / Stunde / Teilnehmer

    Beispielausgabe (bei numberOfStudents = 1) -> Der Sprachkurs kostet 40€ / Stunde / Teilnehmer.
    Beispielausgabe (bei numberOfStudents = 5) -> Der Sprachkurs kostet 25€ / Stunde / Teilnehmer.
    Beispielausgabe (bei numberOfStudents = 6) -> Der Sprachkurs kostet 15€ / Stunde / Teilnehmer.
*/

let teilnehmer = 2;
if (teilnehmer === 1) {
    console.log("Der Sprachkurs kostet 40€ / Stunde / Teilnehmer.");
} else if (teilnehmer >=2 && teilnehmer <= 5) {
    console.log("Der Sprachkurs kostet 25€ / Stunde / Teilnehmer.")
} else {
    console.log("Der Sprachkurs kostet 15€ / Stunde / Teilnehmer.");
}