
testbonjour();
document.addEventListener('keydown', haut);
document.addEventListener('keydown', bas);
document.addEventListener('keydown', droit);
document.addEventListener('keydown', gauche);
document.addEventListener('keydown', change_score);
//window.addEventListener('DOMContentLoaded',newGame)
change_style_score();

function getCell(i: number, j: number): HTMLTableCellElement | undefined {
    const table = document.querySelector('.tableau') as HTMLTableElement;
    const rows = table.querySelectorAll('tr');

    // Vérifier si l'indice de ligne i est valide
    if (i >= 0 && i < rows.length) {
        const cells = rows[i].querySelectorAll('td');

        // Vérifier si l'indice de colonne j est valide
        if (j >= 0 && j < cells.length) {
            return cells[j] as HTMLTableCellElement;
        }
    }
    console.log('Not in range')
    return undefined; // Renvoyer undefined si i ou j sont en dehors du tableau
}

function setValue( i: number, j: number, value: number ): boolean{
    let cell = getCell(i , j);
    if(cell != undefined){
        if (value === 0){
            cell.textContent = '';
        }
        else{
            cell.textContent = value.toString();            
    }
        return true;
    }
    return false;
    }


function getValue(i: number, j: number): number{
    let cell = getCell(i , j);
    if(cell != undefined){
        if(cell.textContent == ''){
            return 0;
        }
        else{
            return parseInt(cell.textContent);
        }
    }

}

function isEmpty(i: number, j: number): boolean{
    if(getValue(i,j) == 0){
        return true
    }
    return false
}

function bonjour(): void{
    const message_01: string = "Bonjour";
    console.log(message_01);
}

function testbonjour(): void{
    bonjour();
}

function haut(event: KeyboardEvent): void{
    if (event.key == 'ArrowUp'){
        console.log('La flèche du haut a été enfoncée');
        up(0);
        up(1);
        up(2);
        up(3);
    }

}

function bas(event: KeyboardEvent): void{
    if (event.key == 'ArrowDown'){
        console.log('La flèche du bas a été enfoncée');
        down(0);
        down(1);
        down(2);
        down(3);
    }

}

function droit(event: KeyboardEvent): void{
    if (event.key == 'ArrowRight'){
        console.log('La flèche de droite a été enfoncée');
        right(0);
        right(1);
        right(2);
        right(3);

    }

 
}

function gauche(event: KeyboardEvent): void{
    if (event.key == 'ArrowLeft'){
        console.log('La flèche de gauche a été enfoncée');
        left(0);
        left(1);
        left(2);
        left(3);
    }


}

function change_style_score(): void{
    const mon_score = document.getElementById('score')

    if (mon_score){
        mon_score.style.textAlign = 'center';
        mon_score.style.color = 'purple'; 
        mon_score.style.backgroundColor = 'grey'; 
        mon_score.style.fontSize = '50px';
    }

    else {
        console.error('Pas de score')
    }
}

function change_score(event: KeyboardEvent): void {

    const mon_score = document.getElementById('score');

    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' 
    || event.key == 'ArrowDown' || event.key == 'ArrowUp'){
        let score = parseInt(mon_score.textContent);
        score++;
        mon_score.textContent = score.toString();
    }
}

function getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }

function choose_case_1(): number{
    if(Math.random()>0.85){
        return 4;
    }
    return 2;
}

function choose_case_2(): number{
    if(Math.random()>0.86){
        return 4;
    }
    return 2;
}

function newGame(): void{
    console.log('New Game') 
    const i_1 = getRandomInt(3);
    const j_1 = getRandomInt(3);
    const i_2 = getRandomInt(3);
    let j_2 = getRandomInt(3);
    while(i_1 === i_2 && j_1 ===j_2){
        let j_2 = getRandomInt(3);
    }

    setValue(i_1,j_1,choose_case_1());
    setValue(i_2,j_2,choose_case_2());

}

function moveRight(i: number): boolean{
    console.log('moveRight')
    let count = 0;
    for (let j = 2; j> -1; j--){
        const next = j+1;
        if(isEmpty(i,next)){
            const value_to_move = getValue(i,j);
            if (value_to_move != 0){
                setValue(i, j,0);
                setValue(i, next, value_to_move);
                count+=1;}
            }

        }
        if(count>0){
            return true;
        }
        else{
            return false;
        }
    }
         
function moveLeft(i: number): boolean{
        console.log('moveLeft')
        let count = 0;
        for (let j = 1; j < 4; j++){
            const next = j - 1;
            if(isEmpty(i, next)){
                const value_to_move = getValue(i, j);
                if (value_to_move != 0){
                    setValue(i, j, 0);
                    setValue(i, next, value_to_move);
                    count += 1;
                }
            }
        }
        if(count > 0){
            return true;
        } else {
            return false;
        }
    }
/* 
function moveUp(j: number): boolean{
    console.log('moveUp')
    for (let i = 1; i< 4; i++){
        const next = i-1;
        if(isEmpty(next,j)){

            const value_to_move = getValue(i,j);
            setValue(i, j,0);
            setValue(next, j, value_to_move);

        }
    }
    return true;
}

function moveDown(j: number): boolean{
    console.log('moveDown')
    for (let i = 2; i> -1; i--){
        const next = i+1;
        if(isEmpty(next,j)){

            const value_to_move = getValue(i,j);
            setValue(i, j,0);
            setValue(next, j, value_to_move);


        }
    }
    return true;*/

function moveUp(j: number): boolean{
    console.log('moveUp')
    let count = 0;
    for (let i = 1; i < 4; i++){
        const next = i - 1;
        if(isEmpty(next, j)){
            const value_to_move = getValue(i, j);
            if (value_to_move != 0){
                setValue(i, j, 0);
                setValue(next, j, value_to_move);
                count += 1;
            }
        }
    }
    if(count > 0){
        return true;
    } else {
        return false;
    }
}

function moveDown(j: number): boolean{
    console.log('moveDown')
    let count = 0;
    for (let i = 2; i > -1; i--){
        const next = i + 1;
        if(isEmpty(next, j)){
            const value_to_move = getValue(i, j);
            if (value_to_move != 0){
                setValue(i, j, 0);
                setValue(next, j, value_to_move);
                count += 1;
            }
        }
    }
    if(count > 0){
        return true;
    } else {
        return false;
    }
}


function fusionRight(i: number): boolean {
    console.log('fusionRight')
    let count = 0;
    let flag = fusion(i,2,i,3);
    if (flag == true){
        count++;
    }
    flag = fusion(i,1,i,2);
    if (flag == true){
        count++;
    }
    flag = fusion(i,0,i,1);
    if (flag == true){
        count++;
    }
    if(count>0){
        return true;
    }
    return false
}


    

function fusion(i_1:number, j_1:number,i_2: number, j_2:number): boolean{
    console.log('fusion')
    if(getValue(i_1,j_1) === getValue(i_2,j_2) && getValue(i_1,j_1) != 0){
        const value_to_fusion = getValue(i_1,j_1)*2;
        setValue(i_2, j_2, value_to_fusion);
        setValue(i_1, j_1, 0);
        return true;
    }
    return false;
}


function fusionLeft(i: number): boolean{
    console.log('fusionLeft')
    let count = 0;
    let flag = fusion(i,1,i,0);
    if (flag == true){
        count++;
    }
    flag = fusion(i,2,i,1);
    if (flag == true){
        count++;
    }
    flag = fusion(i,3,i,2);
    if (flag == true){
        count++;
    }
    if(count>0){
        return true;
    }
    return false;
}

function fusionUp(j: number): boolean{
    console.log('fusionUp')
    let count = 0;
    let flag = fusion(1,j,0,j);
    if (flag == true){
        count++;
    }
    flag = fusion(2,j,1,j);
    if (flag == true){
        count++;
    }
    flag = fusion(3,j,2,j);
    if (flag == true){
        count++;
    }
    if(count>0){
        return true;
    }
    return false;
}

function fusionDown(j: number): boolean{
    console.log('fusionDown')
    let count = 0;
    let flag = fusion(2,j,3,j);
    if (flag == true){
        count++;
    }
    flag = fusion(1,j,2,j);
    if (flag == true){
        count++;
    }
    flag = fusion(0,j,1,j);
    if (flag == true){
        count++;
    }
    if(count>0){
        return true;
    }
    return false;
}


// ici mes fonctions sont plus longue que celles demadées car j'ai du les adapter aux erreurs dans mes fonctions précèdentes. Malgré tout le résultat fonctionne

function right(i:number):boolean{
    let count = 0;
    let flag = moveRight(i);
    if (flag == true){
        console.log(i,"moved right")
        count++;
    }
    flag = fusionRight(i);
    if (flag == true){
        console.log(i,"fused right")
        count++;
    }
    flag = moveRight(i);
    if (flag == true){
        console.log(i,"moved right")
        count++;
    }
    flag = fusionRight(i);
    if (flag == true){
        console.log(i,"fused right")
        count++;
    }
    flag = moveRight(i);
    if (flag == true){
        console.log(i,"moved right")
        count++;
    }
    if(count>0){
        return true;
    }
    return false;

}

function left(i:number):boolean{
    let count = 0;
    let flag = moveLeft(i);
    if (flag == true){
        console.log(i,"moved left")
        count++;
    }
    flag = fusionLeft(i);
    if (flag == true){
        console.log(i,"fused left")
        count++;
    }
    flag = moveLeft(i);
    if (flag == true){
        console.log(i,"moved left")
        count++;
    }
    flag = fusionLeft(i);
    if (flag == true){
        console.log(i,"fused left")
        count++;
    }
    flag = moveLeft(i);
    if (flag == true){
        console.log(i,"moved left")
        count++;
    }
    if(count>0){
        return true;
    }
    return false;
}

function up(j:number):boolean{
    let count = 0;
    let flag = moveUp(j);
    if (flag == true){
        console.log(j,"moved up")
        count++;
    }
    flag = fusionUp(j);
    if (flag == true){
        console.log(j,"fused up")
        count++;
    }
    flag = moveUp(j);
    if (flag == true){
        console.log(j,"moved up")
        count++;
    }
    flag = fusionUp(j);
    if (flag == true){
        console.log(j,"fused up")
        count++;
    }
    flag = moveUp(j);
    if (flag == true){
        console.log(j,"moved up")
        count++;
    }
    if(count>0){
        return true;
    }
    return false;
}   

function down(j:number):boolean{
    let count = 0;
    let flag = moveDown(j);
    if (flag == true){
        console.log(j,"moved down")
        count++;
    }
    flag = fusionDown(j);
    if (flag == true){
        console.log(j,"fused down")
        count++;
    }
    flag = moveDown(j);
    if (flag == true){
        console.log(j,"moved down")
        count++;
    }
    flag = fusionDown(j);
    if (flag == true){
        console.log(j,"fused down")
        count++;
    }
    flag = moveDown(j);
    if (flag == true){
        console.log(j,"moved down")
        count++;
    }
    if(count>0){
        return true;
    }
    return false;
}


