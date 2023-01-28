// Create the Dog class here
import dogs from './data.js'


class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.bg = `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url("${data.avatar}");`
    }
    
    getDogHtml() {
        const { name,age, bio,bg } = this
        return `
                <div class="details" >
                    <h1>${name}, ${age}</h1>
                    <h2>${bio}</h2>
                </div>
                <style>
                .profile {
                    background : ${bg}
                    background-size: cover;
                }
                </style>
        `
    }
}

export default Dog