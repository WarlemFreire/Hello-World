const keys = document.querySelectorAll('.key'); //chamou todas as teclas

const checkbox = document.querySelector('.checkbox_keys'); //chamou a class do checkbox
const switcher = document.querySelector('.switcher');  //chamou a class do switcher
const keySection = document.querySelector('.piano_keys') 

const playNote =(note) => { //cria função playNote
    const audio = new Audio (`../notes/${note}.wav`); //chama o audio na pasta referente a nota e poe dentro de Audio
    audio.play(); //da play no audio
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note')); // captura o data-note que foi criado no html para cada tecla separada
    

    if (key.className.includes('black')) { //se a tecla conter a classe preta
        key.classList.add('black-pressed'); //adicionar esse estilo
        return;
    }

    key.style.background = '#ddd'; //muda a cor da tecla ao clicar 
}

const handleMouseUp = (key) => {
    if (key.className.includes('black')) { //se a tecla conter a classe preta
        key.classList.remove('black-pressed'); //remove o estilo black-pressed
        return;
    }

    key.style.background = 'white'; //muda a cor da tecla ao soltar o click
}

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMouseDown(key)) //toda vez que uma tecla é clicada executa handleMouseDown
    key.addEventListener('mouseup', () => handleMouseUp(key)) //toda vez que uma tecla é clicada executa handleMouseUP
}); 

checkbox.addEventListener('change', ({target}) => { //detecna mudança no checkbox
    if (target.checked) {
        switcher.classList.add('switcher-active') //adiciona a class do switch ativo
        keySection.classList.remove('disabled-keys'); // remove a classe disabled keys sumindo com as letras
        return;
    }

    switcher.classList.remove('switcher-active'); //remove a class do switch ativo
    keySection.classList.add('disabled-keys'); //adiciona a class disabled-keys sumindo com as letras
})

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "u": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "o": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "Dead": () => handleMouseDown(keys[19]),
    "=": () => handleMouseDown(keys[20]),
    "[": () => handleMouseDown(keys[21]),
    "Backspace": () => handleMouseDown(keys[22]),
    "Enter": () => handleMouseDown(keys[23]),
    
}

const keyUpMapper = {
    
        "Tab": () => handleMouseUp(keys[0]),
        "1": () => handleMouseUp(keys[1]),
        "q": () => handleMouseUp(keys[2]),
        "2": () => handleMouseUp(keys[3]),
        "w": () => handleMouseUp(keys[4]),
        "e": () => handleMouseUp(keys[5]),
        "4": () => handleMouseUp(keys[6]),
        "r": () => handleMouseUp(keys[7]),
        "5": () => handleMouseUp(keys[8]),
        "t": () => handleMouseUp(keys[9]),
        "6": () => handleMouseUp(keys[10]),
        "y": () => handleMouseUp(keys[11]),
        "u": () => handleMouseUp(keys[12]),
        "8": () => handleMouseUp(keys[13]),
        "i": () => handleMouseUp(keys[14]),
        "9": () => handleMouseUp(keys[15]),
        "o": () => handleMouseUp(keys[16]),
        "p": () => handleMouseUp(keys[17]),
        "-": () => handleMouseUp(keys[18]),
        "Dead": () => handleMouseUp(keys[19]),
        "=": () => handleMouseUp(keys[20]),
        "[": () => handleMouseUp(keys[21]),
        "Backspace": () => handleMouseUp(keys[22]),
        "Enter": () => handleMouseUp(keys[23]),
        
    
}

document.addEventListener('keydown',(event) => {
    event.preventDefault(); //impede que o tab faça sair da pagina
    keyDownMapper[event.key]()
    
})

document.addEventListener('keyup',(event) => {
    event.preventDefault(); //impede que o tab faça sair da pagina
    keyUpMapper[event.key]()
    
})