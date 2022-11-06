const textObj = {
    name:
    {0:"Tanya Sinclair",
     1:"John Tarkpor"},
     
    text:{
    0:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
            excited about the future. ”`,
    1: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
            The depth the instructors go into is incredible. I now feel so confident about 
            starting up as a professional developer. ”`},
    
    job:{
        0:"UX Engineer",
        1:"Junior Front-end Developer"
    }
}

const aboutText = document.querySelector(".person-text");
const personsName = document.querySelector(".name");
const job = document.querySelector(".job");
const photo = document.querySelector(".photo");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");


let num = 0;

function changeInfo() {
    aboutText.textContent = textObj.text[Math.abs(num%2)],
        personsName.textContent = textObj.name[Math.abs(num%2)],
        job.textContent = textObj.job[Math.abs(num%2)],
        photo.src = `images/${Math.abs(num%2)}.jpg`    
}

leftBtn.addEventListener("click", function() {
        num--,
        changeInfo(),
        animations()
        
})

rightBtn.addEventListener("click", function() {
            num++,
            changeInfo(),
            animations()
})

function updateInfo() {
    aboutText.textContent = textObj.text[0],
        personsName.textContent = textObj.name[0],
        job.textContent = textObj.job[0],
        photo.src = `images/${0}.jpg`
}

function animations() {
    photo.animate([
        { opacity: 0.3},
        { transform: "translateY(15px)"},
        { opacity: 1}
        ],{duration: 200}),

    aboutText.animate([
        { opacity: 0.3},
        { transform: "translateX(10px)"},
        { opacity: 1}
        ], {duration: 100}),

    job.parentElement.animate([
            { opacity: 0},
            { opacity: 1}
            ], {duration: 300})
}