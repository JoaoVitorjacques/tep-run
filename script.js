window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none"

},2000)

})


const dias=document.getElementById("dias")
const horas=document.getElementById("horas")
const minutos=document.getElementById("minutos")
const segundos=document.getElementById("segundos")

const botao=document.getElementById("botaoInscricao")


const dataLiberacao=new Date("May 17, 2026 00:00:00").getTime()


const contador=setInterval(()=>{

const agora=new Date().getTime()

const distancia=dataLiberacao-agora


if(distancia<0){

clearInterval(contador)

botao.style.display="block"

return

}


dias.innerHTML=Math.floor(distancia/(1000*60*60*24))

horas.innerHTML=Math.floor((distancia%(1000*60*60*24))/(1000*60*60))

minutos.innerHTML=Math.floor((distancia%(1000*60*60))/(1000*60))

segundos.innerHTML=Math.floor((distancia%(1000*60))/1000)

},1000)


botao.onclick=()=>{

window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfyLj9_URsIIPYsB4lgo-NiwBlZ6Mwt_kz9OzTt-JKc3sCFhg/viewform?usp=header"

}