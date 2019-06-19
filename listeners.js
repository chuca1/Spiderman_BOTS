
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
    else if (e.keyCode === 65){
        spider2.moveLeft()
      }
    else if (e.keyCode === 68){
          spider2.moveRight()
      }
    else if (e.keyCode === 87){
          spider2.moveUp()
        }
    else if (e.keyCode === 83){
          spider2.moveDown()
        }
  })
  addEventListener("keyup",event=>{
    if(event.keyCode === 13){
        disparo=true
    }
    else if(event.keyCode === 32){
        disparo2=true
    }
})


//Start
start.onclick=(e)=>{
    if  (inicio.style.display="flex"){
            inicio.style.display="none"
        }
    menu_villanos.style.display="flex"
}

keep_F.onclick=(e)=>{
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    game_O.style.display="none"
    spider.life=10
    vuture_V.life=20
    electro_V.life=22
    kraven_V.life=25
    rhino_V.life=27
    goblin_V.life=28
    venom_V.life=30
    edificios.y=-canvas.height
    balas.splice(0,balas.length)
    telarañas.splice(0,telarañas.length)
    obstacles.splice(0,obstacles.length)
}
go.onclick=(e)=>{
    if(unlock_electro==true){
        electro_button.style.visibility="visible"
    }
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    you_W.style.display="none"
    spider.life=10
    vuture_V.life=20
    electro_V.life=22
    kraven_V.life=25
    rhino_V.life=27
    goblin_V.life=28
    venom_V.life=30
    spider2.life=10
    edificios.y=-canvas.height
    balas.splice(0,balas.length)
    telarañas.splice(0,telarañas.length)
    obstacles.splice(0,obstacles.length)
    player1.style.display="none"
    player2.style.display="none"
    
    game_O.style.display="none"
    telarañas.splice(0,telarañas.length+1)
    telarañas2.splice(0,telarañas2.length+1)
   
}

