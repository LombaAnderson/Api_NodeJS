const express = require('express')
const routes = express.Router()

let db = [
    {'1' : { Nome : 'Cliente 1' , Idade: '20'} },
    {'2' : { Nome : 'Cliente 2' , Idade: '23'} },
    {'3' : { Nome : 'Cliente 3' , Idade: '27'} },
]

// Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// Inserir Dados
routes.post('/add', (req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id',(req,res) =>{
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
        return item
    })

    return res.send(newDB)
})

module.express = routes