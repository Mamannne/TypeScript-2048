testbonjour();
document.addEventListener('keydown', haut);
document.addEventListener('keydown', bas);
document.addEventListener('keydown', droit);
document.addEventListener('keydown', gauche);
document.addEventListener('keydown', change_score);
window.addEventListener('DOMContentLoaded', newGame);
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
function setValue(id, i, j, value) {
    let cell = getCell(i, j);
    if (cell != undefined) {
        if (isEmpty(i, j) == true) {
            cell.textContent = "";
        }
        else {
            cell.textContent = value.toString();
        }
        return true;
    }
    return false;
}
function getValue(i, j) {
    let cell = getCell(i, j);
    if (cell != undefined) {
        return parseInt(cell.textContent);
    }
}
function isEmpty(i, j) {
    let cell = getCell(i, j);
    if (cell.textContent == "0") {
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
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function choose_case_1() {
    if (Math.random() > 0.85) {
        return 4;
    }
    return 2;
}
function choose_case_2() {
    if (Math.random() > 0.86) {
        return 4;
    }
    return 2;
}
function newGame() {
    const i_1 = getRandomInt(3);
    const j_1 = getRandomInt(3);
    const i_2 = getRandomInt(3);
    let j_2 = getRandomInt(3);
    while (i_1 === i_2 && j_1 === j_2) {
        let j_2 = getRandomInt(3);
    }
    setValue('none', i_1, j_1, choose_case_1());
    setValue('none', i_2, j_2, choose_case_2());
}
//# sourceMappingURL=app.js.map