// The switcher for Theme1+

const attachedstyle = document.getElementById("stylesheet")
const input = document.getElementById("Enter")
const go = document.getElementById("go")

go.addEventListener("click", function(){
    attachedstyle.href = input.value + "/styles.css"
})