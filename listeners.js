
//Move Spidermn
addEventListener("keydown",(e)=>{
    if (e.keyCode === 39){
      spider.moveRight()
    }
    else if (e.keyCode === 37){
      spider.moveLeft()
    }
    else if (e.keyCode === 38){
        spider.moveUp()
      }
    else if (e.keyCode === 40){
        spider.moveDown()
      }
  })
  addEventListener("keyup",event=>{
    if(event.keyCode === 32){
        disparo=true
    }
})


//Start
start.onclick=(e)=>{
    if  (inicio.style.display="flex"){
            inicio.style.display="none"
        }
    menu_villanos.style.display="flex"
}