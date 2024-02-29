
testbonjour();
document.addEventListener('keydown', haut);
document.addEventListener('keydown', bas);
document.addEventListener('keydown', droit);
document.addEventListener('keydown', gauche);
document.addEventListener('keydown', change_score);


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
    }

}

function bas(event: KeyboardEvent): void{
    if (event.key == 'ArrowDown'){
        console.log('La flèche du bas a été enfoncée');
    }

}

function droit(event: KeyboardEvent): void{
    if (event.key == 'ArrowRight'){
        console.log('La flèche de droite a été enfoncée');
    }

}

function gauche(event: KeyboardEvent): void{
    if (event.key == 'ArrowLeft'){
        console.log('La flèche de gauche a été enfoncée');
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

change_style_score()