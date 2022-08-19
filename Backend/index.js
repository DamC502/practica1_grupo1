const express = require('express')
const app = express()

const host = 'localhost';
const port = 3000

const datos= [        
        {
            nombre:"Damihan Antonio Morales Cuyuch",   
            carnet:"201431457"
        }
    ]


app.get('/', (req, res) => {
    res.send( {state:true,datos:datos})
})


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})


