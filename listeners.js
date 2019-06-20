
//Move Spidermn
addEventListener("keydown",(e)=>{
    if (e.keyCode === 39){
      spider2.moveRight()
    }
    else if (e.keyCode === 37){
      spider2.moveLeft()
    }
    else if (e.keyCode === 38){
        spider2.moveUp()
      }
    else if (e.keyCode === 40){
        spider2.moveDown()
      }
    else if (e.keyCode === 65){
        spider.moveLeft()
      }
    else if (e.keyCode === 68){
          spider.moveRight()
      }
    else if (e.keyCode === 87){
          spider.moveUp()
        }
    else if (e.keyCode === 83){
          spider.moveDown()
        }
  })
  addEventListener("keyup",event=>{
    if(event.keyCode === 13){
        disparo2=true
    }
    else if(event.keyCode === 32){
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

keep_F.onclick=(e)=>{
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    game_O.style.display="none"
    spider.life=30
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
    if(unlock_kraven==true){
        kraven_button.style.visibility="visible"
    }
    if(unlock_rhino==true){
        rhino_button.style.visibility="visible"
    }
    if(unlock_goblin==true){
        goblin_button.style.visibility="visible"
    }
    if(unlock_venom==true){
        venom_button.style.visibility="visible"
    }
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    you_W.style.display="none"
    spider.life=30
    vuture_V.life=20
    electro_V.life=22
    kraven_V.life=25
    rhino_V.life=27
    goblin_V.life=28
    venom_V.life=30
    spider2.life=30
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
go1.onclick=(e)=>{
    if(unlock_electro==true){
        electro_button.style.visibility="visible"
    }
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    you_W.style.display="none"
    spider.life=30
    vuture_V.life=20
    electro_V.life=22
    kraven_V.life=25
    rhino_V.life=27
    goblin_V.life=28
    venom_V.life=30
    spider2.life=30
    spider2.width=0
    spider2.height=0
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

go2.onclick=(e)=>{
    if(unlock_electro==true){
        electro_button.style.visibility="visible"
    }
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    you_W.style.display="none"
    spider.life=30
    vuture_V.life=20
    electro_V.life=22
    kraven_V.life=25
    rhino_V.life=27
    goblin_V.life=28
    venom_V.life=30
    spider2.life=30
    spider2.width=0
    spider2.height=0
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