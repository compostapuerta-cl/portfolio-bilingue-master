const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req,res) => {
    const language = req.acceptsLanguages()[0].substr(0,2).toLowerCase()

    switch(language){
        case 'en':
            res.sendFile(path.resolve(__dirname, 'en.html'))
            break
        case 'es':
            res.sendFile(path.resolve(__dirname, 'es.html'))
            break
        default:
            res.sendFile(path.resolve(__dirname, 'es.html'))
            break
    }
})

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/*', (req,res) => res.redirect('/'))

app.listen(PORT)