import Dog from './Dog.js'
import dogs from './data.js'
import render from './index.js'

const likeBadge = document.getElementById("like-badge")
const nopeBadge = document.getElementById("nope-badge")
let currentDog = getNewDog()

// functions which handle when the Dog is hated, liked, getNewOne and then set it respectively
 
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

function getNewDog() {
    return new Dog(dogs.shift())
}

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

export {hateDog, likeDog, getNewDog, setNextDog, currentDog}