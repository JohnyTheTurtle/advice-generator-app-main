var clickedAt = 0
const advNumber = document.querySelector("p")
const advText = document.querySelector(".advicetext")
const button = document.querySelector("#submit")
const fetchAdvice = async() => {
    if((new Date().getTime() - clickedAt) < 2000){ ///shake if clicked for a new advice under 2sec
        button.classList.toggle("shake");
    } else { ///get new advice
      clickedAt = new Date().getTime(); 
      const apireply = await fetch("https://api.adviceslip.com/advice")
      const data = await apireply.json()
      advNumber.innerText = "Advice # " + data.slip.id
      advText.innerText = data.slip.advice 
    }
    

 }   