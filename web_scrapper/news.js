import * as cheerio from 'cheerio';
import fetch from 'node-fetch'
import fs from 'fs';

async function getNews() {

    try {

        const response = await fetch('https://www.digi24.ro/ultimele-stiri')
        const body = await response.text()
        const $ = cheerio.load(body)

        const items = []
        const baseUrl = 'https://www.digi24.ro'

        $('.col-10 > .article').map((i, el) => {

            const articleTitle = $(el).find('.article-title > a ').attr('title')
            const articleLink = baseUrl + $(el).find('.article-title > a').attr('href')
            const articleImage = $(el).find('.article-thumb > a > img').attr('src')



            items.push({
                articleTitle,
                articleLink,
                articleImage
            })

        })



        // fs.writeFile('digi24news.json', JSON.stringify(items), function(err){
        //     if(err) console.log(err)
        //     console.log('File created successfully')
        // })

        


    } catch (error) {
        console.log('Error: ' + error)
    }

}

getNews()