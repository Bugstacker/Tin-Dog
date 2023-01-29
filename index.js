import dogs from './data.js'
import Dog from './Dog.js'


// event listeners
document.getElementById("cross-btn").addEventListener("click", () => {
    return hateDog()
})

document.getElementById("like-btn").addEventListener('click', () => {
    return likeDog()
})

// dislike dog
function hateDog() {
    currentDog.hasBeenSwiped = true
    
    if(currentDog.hasBeenSwiped) {
        nopeBadge.style.display = "block"
            setTimeout(() => {
                nopeBadge.style.display = "none"
                setNextDog()
            }, 1500)
    }
}

// like the dog
function likeDog() {
    currentDog.hasBeenLiked = true
    currentDog.hasBeenSwiped = true
    
    if( currentDog.hasBeenLiked ) {
        likeBadge.style.display = "block"
        setTimeout(() =>{
            likeBadge.style.display = "none"
            setNextDog()
        }, 1500)
    }
}

// get the new dog in line
const getNewDog = () =>  new Dog(dogs.shift()) 

// render the next dog in line if there are more dogs in the array or either reload the page
function setNextDog() {
    if(dogs.length > 0) {
        currentDog = getNewDog()
        render()
    }
    else {
        location.reload()
        return false;
    }
}

// badges of nope and like
const likeBadge = document.getElementById("like-badge")
const nopeBadge = document.getElementById("nope-badge")
// Set new dog i
let currentDog = getNewDog()
// render the Dog to the Dom
const render = () => {
    document.getElementById('profile').innerHTML = currentDog.getDogHtml()
}
render()




