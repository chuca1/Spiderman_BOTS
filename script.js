vulture_button.onclick=(e)=> {
      menu_villanos.style.display="none"
      canvas_C.style.display="flex"
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
        unlock_electro=malo_malo(vuture_V)
      }
      drawObstacles()
      piumpium()
      vida.width=spider.life*10
      vida.draw()
      if (spider.life<=0){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
      }
    }
    function startGame() {
        interval = setInterval(update,1000/60)
    }
  
  }
electro_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
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
      unlock_kraven=malo_malo(electro_V)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*10
    vida.draw()
    if (spider.life<=0){
      clearInterval(interval)
      game_O.style.display="initial"
      game_O.style.position="absolute"
    }
    
  }
  function startGame() {
      interval = setInterval(update,1000/60)
  }


}
kraven_button.onclick=(e)=> {
     menu_villanos.style.display="none"
    canvas_C.style.display="flex"
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
      unlock_rhino=malo_malo(kraven_V)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*10
    vida.draw()
    if (spider.life<=0){
      clearInterval(interval)
      game_O.style.display="initial"
      game_O.style.position="absolute"
    }
    
  }
  function startGame() {
      interval = setInterval(update,1000/60)
  }

}
rhino_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
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
      unlock_goblin=malo_malo(rhino_V)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*10
    vida.draw()
    if (spider.life<=0){
      clearInterval(interval)
      game_O.style.display="initial"
      game_O.style.position="absolute"
    }
    
  }
  function startGame() {
      
      interval = setInterval(update,1000/60)
  }

}
goblin_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
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
      unlock_venom=malo_malo(goblin_V)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*10
    vida.draw()
    if (spider.life<=0){
      clearInterval(interval)
      game_O.style.display="initial"
      game_O.style.position="absolute"
    }
  }
  function startGame() {
      
      interval = setInterval(update,1000/60)
  }

}
venom_button.onclick=(e)=> {
    menu_villanos.style.display="none"
       canvas_C.style.display="flex"
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
      malo_malo(venom_V)
    }
    drawObstacles()
    piumpium()
    vida.width=spider.life*10
    vida.draw()
    
  }
   if (spider.life<=0){
    clearInterval(interval)
    game_O.style.display="initial"
    game_O.style.position="absolute"
  }
  function startGame() {
      
      interval = setInterval(update,1000/60)
  }

}
vs.onclick=(e)=> {
  menu_villanos.style.display="none"
     canvas_C.style.display="flex"
  startGame();


function update(){
  spider2.width=50
  spider2.height=50
  frames++
  context.clearRect(0, 0, canvas.width, canvas.height);
  edificios.draw()
  central.draw()
  spider.draw()
  crearTelaraña()
  piumpium()
  spider2.draw()
  crearTelaraña2()
  piumpium2()
  if(spider2.life<=0){
    gameOver()
    player1.style.display="initial"
    player1.style.position="absolute"
  }
  else if(spider.life<=0){
    gameOver()
    player2.style.display="initial"
    player2.style.position="absolute"
  }
  
}
function startGame() {
    
    interval = setInterval(update,1000/60)
}

}









  