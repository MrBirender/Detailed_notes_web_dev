
const form = document.querySelector('form')
const userGuess = []
const totalChance = 10

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const randumNumber = Math.floor(Math.random()*100) + 1
    const userInput = parseInt(document.getElementById('userInput').value)
    const 
    userGuess.push(userInput)
    
    if(userInput === randumNumber){
        
    }
    
})

