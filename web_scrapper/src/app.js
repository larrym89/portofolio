const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(res => res.json())
    .then(data => {

        data.forEach(article => {
            const item = `<div class="article"><h3>` + article.articleTitle + `</h3><img src="${article.articleImage}"><a href="${article.articleLink}">` + article.articleLink + `</div>`
            feedDisplay.insertAdjacentHTML("beforeend", item)
        })

    })
    .catch(err => console.error(err))