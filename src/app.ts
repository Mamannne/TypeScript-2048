
testbonjour();
document.addEventListener('keydown', haut);
document.addEventListener('keydown', bas);
document.addEventListener('keydown', droit);
document.addEventListener('keydown', gauche);


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