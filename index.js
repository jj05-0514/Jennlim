const express =requiere('express')
const app =express()
const port = 3000

app.get('/', (req, res) =>  {
    res.send('esta es la ruta de home')
})

app listen()