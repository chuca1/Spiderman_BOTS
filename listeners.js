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
  addEventListener("keydown",event=>{
    if(event.keyCode === 32){
        disparo=true
    }
})
start.onclick=(e)=>{
    if  (imagen_logo.style.visibility == "visible" ||imagen_logo.style.visibility == "" ){
            imagen_logo.style.visibility = "hidden"; 
            imagen_logo.style.height="0vh"
            imagen_logo.style.height="0wh"// or
        
        }
    if  (start.style.visibility == "visible" ||start.style.visibility == "" ){
        start.style.visibility = "hidden";
        start.style.height="0vh" 
        start.style.width="0wh"// or
        
    }
    menu_villanos.style.visibility="visible"
}