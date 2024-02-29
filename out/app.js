testbonjour();
document.addEventListener('keydown', haut);
document.addEventListener('keydown', bas);
document.addEventListener('keydown', droit);
document.addEventListener('keydown', gauche);
document.addEventListener('keydown', change_score);
setValue(0, 0, 25);
change_style_score();
function getCell(i, j) {
    const table = document.querySelector('.tableau');
    const rows = table.querySelectorAll('tr');
    // Vérifier si l'indice de ligne i est valide
    if (i >= 0 && i < rows.length) {
        const cells = rows[i].querySelectorAll('td');
        // Vérifier si l'indice de colonne j est valide
        if (j >= 0 && j < cells.length) {
            console.log("ok");
            return cells[j];
        }
    }
    console.log('Not in range');
    return undefined; // Renvoyer undefined si i ou j sont en dehors du tableau
}
function setValue(i, j, value) {
    let cell = getCell(i, j);
    if (cell != undefined) {
        cell.textContent = value.toString();
        return true;
    }
    return false;
}
function bonjour() {
    const message_01 = "Bonjour";
    console.log(message_01);
}
function testbonjour() {
    bonjour();
}
function haut(event) {
    if (event.key == 'ArrowUp') {
        console.log('La flèche du haut a été enfoncée');
    }
}
function bas(event) {
    if (event.key == 'ArrowDown') {
        console.log('La flèche du bas a été enfoncée');
    }
}
function droit(event) {
    if (event.key == 'ArrowRight') {
        console.log('La flèche de droite a été enfoncée');
    }
}
function gauche(event) {
    if (event.key == 'ArrowLeft') {
        console.log('La flèche de gauche a été enfoncée');
    }
}
function change_style_score() {
    const mon_score = document.getElementById('score');
    if (mon_score) {
        mon_score.style.textAlign = 'center';
        mon_score.style.color = 'purple';
        mon_score.style.backgroundColor = 'grey';
        mon_score.style.fontSize = '50px';
    }
    else {
        console.error('Pas de score');
    }
}
function change_score(event) {
    const mon_score = document.getElementById('score');
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight'
        || event.key == 'ArrowDown' || event.key == 'ArrowUp') {
        let score = parseInt(mon_score.textContent);
        score++;
        mon_score.textContent = score.toString();
    }
}
//# sourceMappingURL=app.js.map