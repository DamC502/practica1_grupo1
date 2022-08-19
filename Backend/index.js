const express = require('express')
const app = express()

const host = 'localhost';
const port = 3000

const datos= [        
        {
            nombre:"Damihan Antonio Morales Cuyuch",   
            carnet:"201431457"
        },
        {
            nombre:"Maynor Octavio Piló Tuy",
            carnet:"201531166"
        },
        {
            nombre:"José Diego Pérez Toralla",
            carnet:"201504081"
        },
        {
            nombre:"Renan Estuardo Luna Gonzalez",
            carnet:"201114567"
        }
    ]


app.get('/', (req, res) => {
    res.send( {state:true,datos:datos})
})

app.get('/PAROIMPAR/:NUMERO', (req, res) => {    
    res.send({  state: true,  result: req.params.NUMERO % 2 == 0 ? 'Par' : 'Impar' })
})

app.get('/fibo/:NUMERO', (req, res) => {

    const fib = function (n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
    res.send({state:true, result: fib(req.params.NUMERO) })
})

app.get('/ALREVEZ/:PALABRA', (req, res) => {
    res.send({ state: true, result: req.params.PALABRA.split("").reverse().join("") })
})

app.get('/potencia/:NUMERO', (req, res) => {
    res.send({ state:true, result: Math.pow(Number(req.params.NUMERO), 3) })
})

app.get('/raiz/:NUMERO', (req, res) => {
    res.send({ state: true,  result: Math.sqrt(Number(req.params.NUMERO)) })
})

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})


