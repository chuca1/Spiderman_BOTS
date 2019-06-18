vulture_button.onclick=(e)=> {
      menu_villanos.style.height="0vh"
      menu_villanos.style.width="0vw"
      canvas.style.visibility="visible"
      startGame();
   
  
    function update(){
      frames++
      context.clearRect(0, 0, canvas.width, canvas.height);
      edificios.draw()
      central.draw()
      spider.draw()
      crearTelaraña()
      drawBalas()
      if(edificios.y>0){
        malo_malo(vuture_V,unlock_electro)
      }
      drawObstacles()
      piumpium()
      vida.width=spider.life*30
      vida.draw()
      
    }
    function startGame() {
        if (interval) return
        interval = setInterval(update,1000/60)
    }
  
  }
electro_button.onclick=(e)=> {
    menu_villanos.style.height="0vh"
    menu_villanos.style.width="0vw"
    canvas.style.visibility="visible"
    startGame();
 

  function update(){
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    central.draw()
    spider.draw()
    crearTelaraña()
    drawBalas()
    if(edificios.y>0){
      malo_malo(electro_V,unlock_rhino)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*30
    vida.draw()
    
  }
  function startGame() {
      if (interval) return
      interval = setInterval(update,1000/60)
  }


}
kraven_button.onclick=(e)=> {
    menu_villanos.style.height="0vh"
    menu_villanos.style.width="0vw"
    canvas.style.visibility="visible"
    startGame();
 

  function update(){
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    central.draw()
    spider.draw()
    crearTelaraña()
    drawBalas()
    if(edificios.y>0){
      malo_malo(rhino_V,unlock_rhino)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*30
    vida.draw()
    
  }
  function startGame() {
      if (interval) return
      interval = setInterval(update,1000/60)
  }

}
rhino_button.onclick=(e)=> {
    menu_villanos.style.height="0vh"
    menu_villanos.style.width="0vw"
    canvas.style.visibility="visible"
    startGame();
 

  function update(){
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    central.draw()
    spider.draw()
    crearTelaraña()
    drawBalas()
    if(edificios.y>0){
      malo_malo(rhino_V,unlock_goblin)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*30
    vida.draw()
    
  }
  function startGame() {
      if (interval) return
      interval = setInterval(update,1000/60)
  }

}
goblin_button.onclick=(e)=> {
    menu_villanos.style.height="0vh"
    menu_villanos.style.width="0vw"
    canvas.style.visibility="visible"
    startGame();
 

  function update(){
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    central.draw()
    spider.draw()
    crearTelaraña()
    drawBalas()
    if(edificios.y>0){
      malo_malo(goblin_V,unlock_venom)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*30
    vida.draw()
    
  }
  function startGame() {
      if (interval) return
      interval = setInterval(update,1000/60)
  }

}
venom_button.onclick=(e)=> {
    menu_villanos.style.height="0vh"
    menu_villanos.style.width="0vw"
    canvas.style.visibility="visible"
    startGame();
 

  function update(){
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    central.draw()
    spider.draw()
    crearTelaraña()
    drawBalas()
    if(edificios.y>0){
      malo_malo(venom_V,unlock_venom)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*30
    vida.draw()
    
  }
  function startGame() {
      if (interval) return
      interval = setInterval(update,1000/60)
  }

}










  