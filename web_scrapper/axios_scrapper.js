const PORT = 8000
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import axios from 'axios'
import * as cheerio from 'cheerio'
import express from 'express'
const cors = require('cors')
const app = express()

app.use(cors())

const url = 'https://www.digi24.ro/ultimele-stiri'

app.get('/', function(req, res) {

    res.json('This is my cacacca')

})

app.get('/results', (req, res) => {

    axios(url)
    .then(response => {

        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        const baseUrl = 'https://www.digi24.ro'


        $('.col-10 > .article').each(function () {

            const articleTitle = $(this).find('.article-title > a ').attr('title')
            const articleLink = baseUrl + $(this).find('.article-title > a').attr('href')
            const articleImage = $(this).find('.article-thumb > a > img').attr('src')



            articles.push({
                articleTitle,
                articleLink,
                articleImage
            })


        })

        res.json(articles)


    }).catch(err => console.log(err))

})




    app.listen(PORT, ()  => console.log(`server running on port ${PORT}`))