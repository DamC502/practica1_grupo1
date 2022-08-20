const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
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

    const fib = function(n) {
        const sol = [0, 1];
    
        for (let i = 2; i<= n; i++) {
            sol[i] = sol[i -1] + sol[i - 2];
        }
        return sol[n];
    };
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

app.get('/MULTIPLICACION/:NUMERO/:NUMERO2', (req, res) => {
    res.send({ state: true,  result: Number(req.params.NUMERO) * Number(req.params.NUMERO2) })
})

app.get('/DIVISION/:NUMERO/:NUMERO2', (req, res) => {
    if ( Number(req.params.NUMERO2)  != 0) {
        res.send({ state: true,  result:  Number(req.params.NUMERO) / Number(req.params.NUMERO2) })
    }else {
        res.send({ state: true,  result:  "No se puede realizar una división dentro de 0" })
    }    
    
})

app.get('/SUMA/:NUMERO/:NUMERO2', (req, res) => {
    res.send({ state: true,  result: Number(req.params.NUMERO) + Number(req.params.NUMERO2) })
})

app.get('/RESTA/:NUMERO/:NUMERO2', (req, res) => {
    res.send({ state: true,  result: Number(req.params.NUMERO) - Number(req.params.NUMERO2) })
})

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})

/// comentario por Damihan 
