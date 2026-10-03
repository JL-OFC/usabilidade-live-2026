// Arrays - Kistasordenadas

let numeros = [10, 20, 30, 40]
console.log(numeros[0])

let frutas = ["Maçã", "Banana", "Laranja"]

// Adicionando Elementos
frutas.push("Uva")
frutas.unshift("Melão")

// Removendo Elementos
frutas.pop()
frutas.shift()

frutas.forEach((fruta, index) =>{
    console.log(`${index} : ${fruta}`)
})

let misto = [42, "Texto", true, {nome: "Jorge"}, [1, 2, 3]]

console.log(misto[4])
console.log(misto[misto.length - 1])

for( let i = 0; i < misto.length; i++){
    console.log(`${i} : ${misto[i]}`)
}

misto.splice(1, 1)
console.log(misto)


let mapa = new Map()
mapa.set("nome", "Jorge")
mapa.set(42, "numero como chave")
mapa.get("nome")
mapa.delete(42)

mapa.forEach((valor, chave) =>{
    console.log(`${chave} : ${valor}`)
})


let conjunto = new Set([1, 2, 3, 4, 5, 5])
console.log(conjunto)
conjunto.add(6)
conjunto.delete(3)

conjunto.forEach(valor => console.log(valor))



let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    endereco: {
        rua: "Rua A",
        numero: 123
    }
}

console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.endereco.rua)

for(let chave in pessoa){
    console.log(`${chave} : ${pessoa.chave}`)
}

console.log(Object.entries(pessoa))