const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// Lista de estados
const estados = [
    { id: 1, nome: 'São Paulo', sigla: 'SP' },
    { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    { id: 3, nome: 'Minas Gerais', sigla: 'MG' },
    { id: 4, nome: 'Bahia', sigla: 'BA' },
    { id: 5, nome: 'Espírito Santo', sigla: 'ES' },
    { id: 6, nome: 'Paraná', sigla: 'PR' },
    { id: 7, nome: 'Santa Catarina', sigla: 'SC' },
    { id: 8, nome: 'Rio Grande do Sul', sigla: 'RS' },
    { id: 9, nome: 'Goiás', sigla: 'GO' },
    { id: 10, nome: 'Distrito Federal', sigla: 'DF' },
    { id: 11, nome: 'Mato Grosso', sigla: 'MT' },
    { id: 12, nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { id: 13, nome: 'Pará', sigla: 'PA' },
    { id: 14, nome: 'Amazonas', sigla: 'AM' },
    { id: 15, nome: 'Roraima', sigla: 'RR' },
    { id: 16, nome: 'Amapá', sigla: 'AP' },
    { id: 17, nome: 'Tocantins', sigla: 'TO' },
    { id: 18, nome: 'Rondônia', sigla: 'RO' },
    { id: 19, nome: 'Acre', sigla: 'AC' },
    { id: 20, nome: 'Piauí', sigla: 'PI' },
    { id: 21, nome: 'Ceará', sigla: 'CE' },
    { id: 22, nome: 'Rio Grande do Norte', sigla: 'RN' },
    { id: 23, nome: 'Paraíba', sigla: 'PB' },
    { id: 24, nome: 'Pernambuco', sigla: 'PE' },
    { id: 25, nome: 'Alagoas', sigla: 'AL' },
    { id: 26, nome: 'Sergipe', sigla: 'SE' },
    { id: 27, nome: 'Maranhão', sigla: 'MA' }
]

app.get('/', (req, res) =>{
    res.send("API de Estados do Brasil")
})

app.get('/estados', (req, res) =>{
    res.json(estados)
})

app.get('/estados/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const estado = estados.find((e) => e.id === id)
    if(estado){
        res.json(estado)
    } else{
        res.status(404).json({ message: "Estado não encontrado"})
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})