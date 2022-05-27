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
        createdAt: new Date(),
        description: 'Test description'
    }]

    res.render('articles/index', {
        articles: articles
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})