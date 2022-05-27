const express = require('express')
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()
const port = 3000

// import and connect to database
async function main() {
    await mongoose.connect('mongodb://localhost:27017/markdown_blog');
}

main().catch(err => console.log(err));

// express settings
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', {
        articles: articles
    })
})


// Similar to Urls.py in Django
app.use('/articles', articleRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})