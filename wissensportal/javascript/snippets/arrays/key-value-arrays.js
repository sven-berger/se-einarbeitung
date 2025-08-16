let person1 = {
    "Name": "Sven Oliver Berger",
    "Alter": 32, 
    "Berufe": ["Fachmann für Systemgastronomie", "Fachinformatiker für Anwendungsentwicklung"]
};

let person2 = {
    "Name": "Loveday Isa Rohleder",
    "Alter": 29, 
    "Berufe": "Fachfrau im Einzelhandel"
};

console.log(person1);
for (person of person1) {
    console.log(person);
}