const form = document.getElementById('form-contatos')
const contato = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (contato.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi inserido`)
    } else {contato.push(inputNomeContato.value)
        numeros.push(inputNumeroContato.value)
    
        let linha = `<tr>
                    <td>${inputNomeContato.value}</td>
                    <td>${inputNumeroContato.value}</td>
                    </tr>`
    
        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
 //   const QtdContatos = calculaMediaFinal();
    document.getElementById('total-numeros').innerHTML = numeros.length ;

}

/*
function calculaMediaFinal() {
    let TotalContatos = 0

    for (let i = 0; i < numeros.length; i++) {
        TotalContatos += numeros.value[i]
    }

    return TotalContatos 
}
*/