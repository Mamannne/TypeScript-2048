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
            return cells[j];
        }
    }
    console.log('Not in range');
    return undefined; // Renvoyer undefined si i ou j sont en dehors du tableau
}
function setValue(id, i, j, value) {
    let cell = getCell(i, j);
    if (cell != undefined) {
        if (id === '') {
            cell.textContent = '';
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
        if (cell.textContent == '') {
            return 0;
        }
        else {
            return parseInt(cell.textContent);
        }
    }
}
function isEmpty(i, j) {
    if (getValue(i, j) == 0) {
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
        moveUp(0);
        moveUp(1);
        moveUp(2);
        moveUp(3);
    }
}
function bas(event) {
    if (event.key == 'ArrowDown') {
        console.log('La flèche du bas a été enfoncée');
        moveDown(0);
        moveDown(1);
        moveDown(2);
        moveDown(3);
    }
}
function droit(event) {
    if (event.key == 'ArrowRight') {
        console.log('La flèche de droite a été enfoncée');
        moveRight(0);
        moveRight(1);
        moveRight(2);
        moveRight(3);
    }
}
function gauche(event) {
    if (event.key == 'ArrowLeft') {
        console.log('La flèche de gauche a été enfoncée');
        moveLeft(0);
        moveLeft(1);
        moveLeft(2);
        moveLeft(3);
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
    console.log('New Game');
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
function moveRight(i) {
    console.log('moveRight');
    for (let j = 2; j > -1; j--) {
        const next = j + 1;
        if (isEmpty(i, next)) {
            if (getValue(i, j) != 0) {
                const value_to_move = getValue(i, j);
                setValue('', i, j, 0);
                setValue('none', i, next, value_to_move);
            }
        }
    }
    return true;
}
function moveLeft(i) {
    console.log('moveLeft');
    for (let j = 1; j < 4; j++) {
        const next = j - 1;
        if (isEmpty(i, next)) {
            if (getValue(i, j) != 0) {
                const value_to_move = getValue(i, j);
                setValue('', i, j, 0);
                setValue('none', i, next, value_to_move);
            }
        }
    }
    return true;
}
function moveUp(j) {
    console.log('moveUp');
    for (let i = 1; i < 4; i++) {
        const next = i - 1;
        if (isEmpty(next, j)) {
            if (getValue(i, j) != 0) {
                const value_to_move = getValue(i, j);
                setValue('', i, j, 0);
                setValue('none', next, j, value_to_move);
            }
        }
    }
    return true;
}
function moveDown(j) {
    console.log('moveDown');
    for (let i = 2; i > -1; i--) {
        const next = i + 1;
        if (isEmpty(next, j)) {
            if (getValue(i, j) != 0) {
                const value_to_move = getValue(i, j);
                setValue('', i, j, 0);
                setValue('none', next, j, value_to_move);
            }
        }
    }
    return true;
}
//# sourceMappingURL=app.js.map