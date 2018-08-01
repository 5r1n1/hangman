const generatePuzzle = (wordCount = 2) =>
    fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then (resp => {
        if (resp.status === 200) return resp.json().puzzle
        else throw new Error ('Unable to fetch puzzle') 
    }).catch (error => console.log (error))