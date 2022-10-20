const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const categories = require("./data/categories.json");
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send("hii ... i am ok")
})

// ---> categories
app.get('/categories', (req, res) => {
    res.send(categories)
})

// ---> single news
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(nw => nw._id === id);
    res.send(selectedNews)
})

// ---> category
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    } else {
        const category_news = news.filter(nw => nw.category_id === id);
        res.send(category_news)
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})




app.listen(port, () => {
    console.log(`This is running from port ${port}`)
})