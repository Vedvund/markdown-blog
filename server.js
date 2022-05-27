const express = require('express')
const articleRouter = require('./routes/articles')

// import and connect to database
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/markdown_blog');
}

main().catch(err => console.log(err));

// express settings
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


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


// Similar to Urls.py in Django
app.use('/articles', articleRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})