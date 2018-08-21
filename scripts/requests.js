const generatePuzzle = async (wordCount = 2) => {
    let data 
    const resp = await fetch (`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (resp.status === 200) data = await resp.json()
    else throw Error (`Unable to fetch puzzle. HTTP Status - ${resp.status}`)
    if (data.puzzle) return data.puzzle
    else throw Error ('Error fetching puzzle')
}

// async await is faster - dunno why
// const generatePuzzle = (wordCount = 2) => fetch (`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then (resp => resp.status === 200 ? resp.json() : Error (`Unable to fetch puzzle. HTTP Status - ${resp.status}`))
//     .then (data => data.puzzle)
//     .catch (error => console.log (error))