
const buttonStart = document.getElementById ('start');
console.log(buttonStart);

const container = document.querySelector ('.container');
console.log(container);

const optionsDifficulty = document.getElementById ('difficulty');
console.log(optionsDifficulty);




buttonStart.addEventListener ("click", function (){

    //console.log(optionsDifficulty);
    //container.innerHTML='';


    let grid = document.createElement('div');
    grid.classList.add('numbers-grid');
    container.append(grid);
    console.log(grid);

    
    for ( i = 1; i <= 100 ; i++ ) {

        const cella = document.createElement ('div');
        cella.classList.add('cell-style');
        cella.innerHTML= i;
        grid.append(cella);
        //console.log(cella);

        buttonStart.classList.add('button-start-display');

        cella.addEventListener ("click", function (){
            cella.classList.toggle('cella-color');
            console.log(cella.innerText);
        })
    }

})