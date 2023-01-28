// Here are the eventlisteners and the function which renders the Html to the DOM
import {hateDog, likeDog, getNewDog, setNextDog, currentDog} from './utils.js'


document.getElementById("cross-btn").addEventListener("click", () => {
    return hateDog()
})

document.getElementById("like-btn").addEventListener('click', () => {
    return likeDog()
})

const render = () => {
    document.getElementById('profile').innerHTML = currentDog.getDogHtml()
}
render()

export default render




