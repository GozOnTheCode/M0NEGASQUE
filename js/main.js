const userAction = async () => { 
    const response = await fetch('https://api.ipify.org/?format=json'); 
    const myJson = await response.json(); 
    user_ip = myJson.ip
    p_ip = document.getElementById("ip").innerText = user_ip
    p_ip2 = document.getElementById("ip2").innerText = user_ip
    console.log(myJson)
}

window.onload = userAction()


const input = document.querySelector('.input-writer')
const writer = document.querySelector('.writer .p-writer')
const allWriter = document.querySelector('.writer')
const form = document.getElementById('myform')

const reponse = document.querySelector('.p-response')

const rep1 = document.createElement("p")

let i = 4

form.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
  
    if (nomTouche === 'Enter') {
        document.forms["myform"].requestSubmit()

        const words = ["me", "socialmedia", "competence", "order"]
        const inputs = input.value.trim().split(' ')

        if (input.value === Array.include) {
            console.log("good")
        } else {
            console.log("pas good")
        }

        if (input.value === "me") {
            reponse.innerHTML = '<h1 class="h1-rep">About me 🖐</h1><p class="p-pres1"><span class="red">🎭 Quick Presentation : </span>Im 14 years old and Ive been passionate about<br> computer science and especially programming since I was little.</p><p class="p-edu1"><span class="green">📝 Diploma / Education : </span>I am currently in second GT with an option specialized<br> in computer programming in python. I have the patent</p><p class="p-bigPres">⚡️ I have been passionate about computer science since<br> about the age of 10, I started with the python language which<br> taught me the basics of programming, I created<br> games by following tutorials on the internet, and I I then turned to web development<br> where I got a lot more, it was what I needed, I have been<br> a web developer and web integrator for 2 years<br> now.</p>'
            console.log(reponse.textContent)
            input.value = ""
        } 

        if (input.value === "socialmedia") {
            reponse.innerHTML = '<h1 class="h1-rep">Social Media 📡</h1><p class="p-pres1"><span class="red">📱 Social Media : </span>I have instagram, discord, github.</p><nav><ul><li><span class="green">-> Instagram</span> : https:/www.instagram.com/nathan_mhe</li><li><span class="green">-> Discord</span> : M0NEGASQUE#4711</li><li><span class="green">-> GitHub</span> : https://www.github.com/GozOnTheCode</li></ul></nav><p class="p-other">If you want to contact me on another social<br> network, contact me on discord and I will answer you</p>'
            console.log(reponse.textContent)
            input.value = ""
        }

        if (input.value === "competence") {
            reponse.innerHTML = '<h1 class="h1-rep">My Skills 📡</h1><p class="p-pres1"><span class="red">💻 My languages and Framework : </span>HTML, CSS, JAVASCRIPT, PYTHON, REACT, VUEJS, ANGULAR, REACT NATIVE.</p><nav><ul><li><span class="green">-> HTML</span> : 99.99%</li><li><span class="green">-> CSS</span> : 95%</li><li><span class="green">-> JAVASCRIPT</span> : 80%</li><li><span class="green">-> PYTHON</span> : 70%</li><li><span class="green">-> REACT</span> : 65%</li><li><span class="green">-> VUEJS</span> : 80%</li><li><span class="green">-> ANGULAR</span> : 60%</li><li><span class="green">-> REACT NATIVE</span> : 50%</li></ul></nav><p class="p-other">I estimate my knowledge of all these<br> language with it\'s percentage</p>'
            console.log(reponse.textContent)
            input.value = ""
        }

        if (input.value === "order") {
            reponse.innerHTML = '<h1 class="h1-rep">Order 🎁</h1><p class="p-pres1"><span class="red">✉️ How to order : </span>To order contact me on my discord (socialmedia)</p><nav><ul><li><span class="green">-> Website</span> : 10€</li></ul></nav><p class="p-other">I only develop the front of your website. The price<br> may vary depending on the request, each request is different<br> so the price will be too ;)</p>'
            console.log(reponse.textContent)
            input.value = ""
        }

        if (input.value === "clear") {
            reponse.innerHTML = " "
            console.log(reponse.textContent)
            input.value = ""
        }

    }
    form.addEventListener("submit", (ev) => ev.preventDefault())
})

function myloader() {


    const loader = document.querySelector('.loader')
    loader.style.visibility = "visible"
    setInterval(() => {
        loader.style.transition = "all 2s";
        loader.classList.add("classTest");
    }, 5000);
}

myloader()

