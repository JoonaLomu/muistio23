const { response } = require('express')
const express = require('express')
const app = express()

let notes = [

    {
        id:1,
        content: "CSS on tyylimuotoilu",
        date: "2022-11-23T11:22:40.0982",
        important: true
    },
    {
        id: 2,
        content: "Selain pystyy suorittamaan ainostaan Javascript-koodia",
        date: "2022-11-23T11:22:50.0007",
        important: false
    },
    {
        id: 3,
        content: "PHP-ohjelmointikieltä käytetään back-end ohjelmoinnissa",
        date: "2022-11-23T11:24:09.0313",
        important: true
    },
    {
        id: 4,
        content: "Tietokannat on englanniksi password",
        date: "2022-11-23T11:44:39.0000",
        important: false
    },   
]
app.get('/', (req, res) => {
    res.send('<h1>Terve Joona</h1>')
})


app.get('/app/notes', (req, res) => {
    res.json(notes)
})


app.get('/app/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if ((note)) {
        res.json(note)
    } else {
        res.status(404)
        res.end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204)
    response.end()
})  



const PORT = 3001
app.listen(PORT, () => {
    console.log(`Palvelin käynnissä portissa ${PORT}`)
})