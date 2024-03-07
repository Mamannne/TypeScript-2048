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
function setValue(i, j, value) {
    let cell = getCell(i, j);
    if (cell != undefined) {
        if (value === 0) {
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
    const popup = new Popup("Ne peux pas aller plus haut");
    if (event.key == 'ArrowUp') {
        console.log('La flèche du haut a été enfoncée');
        let flag = count(up);
        if (flag == false) {
            console.log('Did not move up');
            popup.showPopup();
        }
        else {
            add_case();
        }
        if (canMove() === false) {
            console.log('Game over');
            const popup = new Popup('Game over');
            popup.showPopupForEver();
        }
    }
}
function bas(event) {
    const popup = new Popup("Ne peux pas aller plus bas");
    if (event.key == 'ArrowDown') {
        console.log('La flèche du bas a été enfoncée');
        let flag = count(down);
        if (flag == false) {
            console.log('Did not move down');
            popup.showPopup();
        }
        else {
            add_case();
        }
        if (canMove() === false) {
            console.log('Game over');
            const popup = new Popup('Game over');
            popup.showPopupForEver();
        }
    }
}
function droit(event) {
    const popup = new Popup("Ne peux pas aller plus à droite");
    if (event.key == 'ArrowRight') {
        console.log('La flèche de droite a été enfoncée');
        let flag = count(right);
        if (flag == false) {
            console.log('Did not move right');
            popup.showPopup();
        }
        else {
            add_case();
        }
        if (canMove() === false) {
            console.log('Game over');
            const popup = new Popup('Game over');
            popup.showPopupForEver();
        }
    }
}
function gauche(event) {
    const popup = new Popup("Ne peux pas aller plus à gauche");
    if (event.key == 'ArrowLeft') {
        console.log('La flèche de gauche a été enfoncée');
        let flag = count(left);
        if (flag == false) {
            console.log('Did not move left');
            popup.showPopup();
        }
        else {
            add_case();
        }
        if (canMove() === false) {
            console.log('Game over');
            const popup = new Popup('Game over');
            popup.showPopupForEver();
        }
    }
}
function change_style_score() {
    const mon_score = document.getElementById('score');
    if (mon_score) {
        mon_score.style.textAlign = 'center';
        mon_score.style.color = '#9edebd';
        mon_score.style.backgroundColor = '#2d2b55';
        mon_score.style.border = '3px solid #fad000';
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
function choose_case(p) {
    if (Math.random() > p) {
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
    setValue(i_1, j_1, choose_case(0.85));
    setValue(i_2, j_2, choose_case(0.86));
}
function moveRight(i) {
    console.log('moveRight');
    let count = 0;
    for (let j = 2; j > -1; j--) {
        const next = j + 1;
        if (isEmpty(i, next)) {
            const value_to_move = getValue(i, j);
            if (value_to_move != 0) {
                setValue(i, j, 0);
                setValue(i, next, value_to_move);
                count += 1;
            }
        }
    }
    if (count > 0) {
        return true;
    }
    else {
        return false;
    }
}
function moveLeft(i) {
    console.log('moveLeft');
    let count = 0;
    for (let j = 1; j < 4; j++) {
        const next = j - 1;
        if (isEmpty(i, next)) {
            const value_to_move = getValue(i, j);
            if (value_to_move != 0) {
                setValue(i, j, 0);
                setValue(i, next, value_to_move);
                count += 1;
            }
        }
    }
    console.log('quitte moveleft');
    return (count > 0);
}
function moveUp(j) {
    console.log('moveUp');
    let count = 0;
    for (let i = 1; i < 4; i++) {
        const next = i - 1;
        if (isEmpty(next, j)) {
            const value_to_move = getValue(i, j);
            if (value_to_move != 0) {
                setValue(i, j, 0);
                setValue(next, j, value_to_move);
                count += 1;
            }
        }
    }
    if (count > 0) {
        return true;
    }
    else {
        return false;
    }
}
function moveDown(j) {
    console.log('moveDown');
    let count = 0;
    for (let i = 2; i > -1; i--) {
        const next = i + 1;
        if (isEmpty(next, j)) {
            const value_to_move = getValue(i, j);
            if (value_to_move != 0) {
                setValue(i, j, 0);
                setValue(next, j, value_to_move);
                count += 1;
            }
        }
    }
    if (count > 0) {
        return true;
    }
    else {
        return false;
    }
}
function fusionRight(i) {
    console.log('fusionRight');
    let tmp = 0;
    for (let j = 3; j > 0; j--) {
        let k = j - 1;
        while (k > -1 && isEmpty(i, k)) {
            k--;
        }
        console.log(j, k);
        let previous_not_empty = k;
        let a = fusion(i, previous_not_empty, i, j);
        if (a == true) {
            tmp++;
        }
    }
    console.log(tmp, 'fusionright tmp');
    return (tmp > 0);
}
function fusionLeft(i) {
    console.log('fusionLeft');
    let tmp = 0;
    for (let j = 0; j < 3; j++) {
        let k = j + 1;
        while (k < 4 && isEmpty(i, k)) {
            k++;
        }
        let previous_not_empty = k;
        let flag = fusion(i, previous_not_empty, i, j);
        if (flag == true) {
            tmp++;
        }
    }
    console.log('quitte fusionLeft');
    return (tmp > 0);
}
function fusionUp(j) {
    console.log('fusionUp');
    let tmp = 0;
    for (let i = 0; i < 3; i++) {
        let k = i + 1;
        while (k < 4 && isEmpty(k, j)) {
            k++;
        }
        console.log(i, k);
        let previous_not_empty = k;
        let flag = fusion(previous_not_empty, j, i, j);
        if (flag == true) {
            tmp++;
        }
    }
    return (tmp > 0);
}
function fusionDown(j) {
    console.log('fusionDown');
    let tmp = 0;
    for (let i = 3; i > 0; i--) {
        let k = i - 1;
        while (k > -1 && isEmpty(k, j)) {
            k--;
        }
        console.log(i, k);
        let previous_not_empty = k;
        let flag = fusion(previous_not_empty, j, i, j);
        if (flag == true) {
            tmp++;
        }
    }
    return (tmp > 0);
}
function fusion(i_1, j_1, i_2, j_2) {
    console.log('fusion');
    if (getValue(i_1, j_1) === getValue(i_2, j_2) && getValue(i_1, j_1) != 0) {
        const value_to_fusion = getValue(i_1, j_1) * 2;
        setValue(i_2, j_2, value_to_fusion);
        setValue(i_1, j_1, 0);
        return true;
    }
    return false;
}
// ici mes fonctions sont plus longue que celles demadées car j'ai du les adapter aux erreurs dans mes fonctions précèdentes. Malgré tout le résultat fonctionne
function right(i) {
    let tmp = 0;
    let flag = moveRight(i);
    if (flag == true) {
        console.log(i, "moved right");
        tmp++;
    }
    flag = fusionRight(i);
    if (flag == true) {
        console.log(i, "fused right");
        tmp++;
    }
    flag = moveRight(i);
    if (flag == true) {
        console.log(i, "moved right");
        tmp++;
    }
    flag = moveRight(i);
    if (flag == true) {
        console.log(i, "moved right");
        tmp++;
    }
    return (tmp > 0);
}
function left(i) {
    console.log('left function');
    let tmp = 0;
    let flag = moveLeft(i);
    if (flag == true) {
        console.log(i, "moved left");
        tmp++;
    }
    flag = fusionLeft(i);
    if (flag == true) {
        console.log(i, "fused left");
        tmp++;
    }
    flag = moveLeft(i);
    if (flag == true) {
        console.log(i, "moved left");
        tmp++;
    }
    flag = moveLeft(i);
    if (flag == true) {
        console.log(i, "moved left");
        tmp++;
    }
    console.log('quitte left');
    return (tmp > 0);
}
function up(j) {
    let tmp = 0;
    let flag = moveUp(j);
    if (flag == true) {
        console.log(j, "moved up");
        tmp++;
    }
    flag = fusionUp(j);
    if (flag == true) {
        console.log(j, "fused up");
        tmp++;
    }
    flag = moveUp(j);
    if (flag == true) {
        console.log(j, "moved up");
        tmp++;
    }
    flag = moveUp(j);
    if (flag == true) {
        console.log(j, "moved up");
        tmp++;
    }
    return (tmp > 0);
}
function down(j) {
    let tmp = 0;
    let flag = moveDown(j);
    if (flag == true) {
        console.log(j, "moved down");
        tmp++;
    }
    flag = fusionDown(j);
    if (flag == true) {
        console.log(j, "fused down");
        tmp++;
    }
    flag = moveDown(j);
    if (flag == true) {
        console.log(j, "moved down");
        tmp++;
    }
    flag = moveDown(j);
    if (flag == true) {
        console.log(j, "moved down");
        tmp++;
    }
    return (tmp > 0);
}
function count(f1) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        let flag = f1(i);
        if (flag == true) {
            console.log(i);
            count++;
        }
    }
    console.log(count, 'quitte count');
    return (count > 0);
}
class Popup {
    constructor(str) {
        this.popup = document.createElement('div');
        this.popup.style.visibility = 'hidden';
        this.popup.style.minWidth = '250px';
        this.popup.style.backgroundColor = '#333';
        this.popup.style.color = '#fff';
        this.popup.style.textAlign = 'center';
        this.popup.style.borderRadius = '2px';
        this.popup.style.padding = '16px';
        this.popup.style.position = 'fixed';
        this.popup.style.zIndex = '1';
        this.popup.style.left = '50%';
        this.popup.style.top = '50%';
        this.popup.style.transform = 'translate(-50%, -50%)';
        this.popup.textContent = str;
        document.body.appendChild(this.popup);
    }
    showPopup() {
        this.popup.style.visibility = 'visible';
        setTimeout(() => {
            this.popup.style.visibility = 'hidden';
        }, 1000);
    }
    showPopupForEver() {
        this.popup.style.visibility = 'visible';
    }
}
function canMove() {
    // Check for empty cells
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (getValue(i, j) === 0) {
                return true;
            }
        }
    }
    // Check for adjacent cells with the same value
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (getValue(i, j) === getValue(i, j + 1)) {
                return true;
            }
        }
    }
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 3; i++) {
            if (getValue(i, j) === getValue(i + 1, j)) {
                return true;
            }
        }
    }
    // No moves left
    return false;
}
function add_case() {
    const emptyCells = [];
    // Find all empty cells
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (isEmpty(i, j)) {
                emptyCells.push({ i, j });
            }
        }
    }
    // Choose a random empty cell
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];
    // Choose a random value (2 or 4)
    let randomValue = choose_case(0.82);
    // Set the value of the chosen cell
    setValue(randomCell.i, randomCell.j, randomValue);
}
//# sourceMappingURL=app.js.map