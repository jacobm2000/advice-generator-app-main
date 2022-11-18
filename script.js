
var id=document.getElementById('idText')
var adviceText=document.getElementById('advice')
console.log(adviceText.textContent)
var button=document.getElementById('btn')
function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) =>
    (
        adviceText.textContent='"'+data.slip.advice+'"',id.textContent="ADVICE # "+ (textContent=data.slip.id)
        
    ))
}

getAdvice()
button.addEventListener("click",getAdvice)



