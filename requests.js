const generatePuzzle = (wordCount = 0) => new Promise ((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.addEventListener ('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200)
            resolve (JSON.parse(e.target.responseText).puzzle)
        else if (e.target.readyState === 4)
            reject (`Error: HTTP Status ${e.target.status}`)
    })

    wordCount && wordCount < 10 ? 
        req.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`) :
        req.open('GET', 'http://puzzle.mead.io/puzzle/')
    req.send()
})