const generatePuzzle = (wordCount = 2) => fetch (`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then (resp => resp.status === 200 ? resp.json() : Error (`Unable to fetch puzzle. HTTP Status - ${resp.status}`))
    .then (data => data.puzzle)
    .catch (error => console.log (error))