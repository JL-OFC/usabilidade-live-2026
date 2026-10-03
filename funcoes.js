/*function ola (){
    console.log('Olá, mundo!')
}

ola()

function saudacao(nome){
    return `Olá, ${nome}! Seja bem vindo.`
}

console.log(saudacao('Jorge')) */

const soma = function(a, b) {
    return a+b
}

const multiplicar = (a, b) => a*b

console.log(multiplicar(2, 7))

function numero(numero){
    return numero
}
console.log(numero(soma(5, 5)))


//Funções com parâmetro
function cumprimentar(nome = "Jorge"){
    return `Bem Vindo, ${nome}`
}

console.log(cumprimentar())
console.log(cumprimentar("Danilo"))

(function(){
    var segredo = '456456'
    console.log('Função autoexecutável')
})()


// Função callback
function processar(valor, callback){
    console.log('Processando...')
    callback(valor)
}

processar(10, (num) => console.log(`Resulatdo: ${num*2}`))


// Função Assíncrona async/await

async function obterDados(){
    return "Dados Recebidos"
}

obterDados().then(console.log)
