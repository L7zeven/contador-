const display = document.querySelector('.contagem'); //contante var display ta buscando a classe contagem no html // não esquece do ponto
const idbutoes = document.querySelector('#idbutoes'); // constante var idbutoes esta buscando a idbutoes no html 

idbutoes.addEventListener('click', counter); // pegando a const idbutoes que esta pegando a #idbutoes 
// e botando um evento click nela 

let value = 0;  // uma var let com valor igual a zero 
function counter(e) { // função counter que foi adicionada anterior na linha 4 
    const btn = e.target.id; // const var btn igual a e pegando todas  as id do #idbutoes
    if (btn === 'idadicionar') { //se clicar em idadicionar, adicionar mais 1 
        value += 1; // value aumentar mais 1 
    } else if (btn === 'iddiminuir') { // ou se clicar em iddiminuir, diminui menos 1 n
        value -= 1;
    } else { // se não voltar o valor para 0 
        value = 0; 
    }

    display.textContent = value; // pegando a const var display e conectando com a let value 0 
}
