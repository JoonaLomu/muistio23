const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json('strict'))

let notes = [
    {
        id: 1,
        content: "CSS on tyylimuotoilua",
        date: "2022-11-23T11:22:40.0982",
        important: true,

    },
    {
        id: 2,
        content: "Selain pystyy suorittamaan ainoastaan Javascript-koodia",
        date: "2022-11-23T11:22:50.0007",
        important: false,
    },
    {
        id: 3,
        content: "PHP-ohjelmointikieltä käytetään back-end ohjelmointiin",
        date: "2022-11-23T11:23:00.0444",
        important: true,
    },
    {
        id: 4,
        content: "Tietokannat on englanniksi password",
        date: "2022-11-23T11:25:00.4444",
        important: false,
    },
]

app.get('/', (req, res) =>{
    res.send('<h1>Terve Jasperi!</h1>')
})

app.get('/app/notes', (req, res) =>{
    res.json(notes)
})

app.get('/app/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if(note){
        res.json(note)
    } else {
        res.status(404);
        res.end();
    }
})

app.delete('/app/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204)
    res.end()
})
  
app.post('/app/notes', (req, res)=>{
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0

    const note = req.body
    note.id = maxId + 1

    notes = notes.concat(note)

    res.json(note)
})



const PORT = 3306
app.listen(PORT, () => {
console.log(`Palvelin käynnissä portissa ${PORT}`)
})