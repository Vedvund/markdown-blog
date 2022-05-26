const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// Similar to Urls.py in Django
app.use('/articles', articleRouter)


app.get('/', (req, res) => {

    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description'
    }]

    res.render('index', {
        articles: articles
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})