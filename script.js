// LOADER + MOSTRAR BOTÃO

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none"

// 🔥 MOSTRA BOTÃO AQUI
document.getElementById("botaoInscricao").style.display="block"

},1500)

})

// CONTADOR

const dias=document.getElementById("dias")
const horas=document.getElementById("horas")
const minutos=document.getElementById("minutos")
const segundos=document.getElementById("segundos")
const progresso=document.getElementById("progressoTempo")

const dataEvento=new Date("May 17, 2026 07:00:00").getTime()
const dataInicio=new Date("Apr 10, 2026 00:00:00").getTime()

setInterval(()=>{

const agora=new Date().getTime()
const distancia=dataEvento-agora

dias.innerHTML=Math.floor(distancia/(1000*60*60*24))
horas.innerHTML=Math.floor((distancia%(1000*60*60*24))/(1000*60*60))
minutos.innerHTML=Math.floor((distancia%(1000*60*60))/(1000*60))
segundos.innerHTML=Math.floor((distancia%(1000*60))/1000)

const total=dataEvento-dataInicio
const atual=agora-dataInicio

const porcentagem=(atual/total)*100
progresso.style.width=porcentagem+"%"

},1000)

// BOTÃO

document.getElementById("botaoInscricao").onclick=()=>{
window.open("https://docs.google.com/forms/u/1/d/e/1FAIpQLSfyLj9_URsIIPYsB4lgo-NiwBlZ6Mwt_kz9OzTt-JKc3sCFhg/viewform?usp=header")
}

// SCROLL

const sections=document.querySelectorAll("section")

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const top=sec.getBoundingClientRect().top
if(top<window.innerHeight-100){
sec.classList.add("show")
}
})
})