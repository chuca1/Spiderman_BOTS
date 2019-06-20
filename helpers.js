function crearTelaraña(){
    if(disparo==true){
    let telaraña= new Telaraña(spider)
    telarañas.push(telaraña)
    disparo=false
    }
}
function piumpium(){
    for(let i=0;i<telarañas.length;i++){
       if(telarañas[i].y < 0){
           telarañas.splice(i,1)
       }
       telarañas[i].draw()
    }
    telarañas.map(telaraña=>{
        telaraña.draw()
        if(vidaSpiderman2(telaraña)==true){
            telarañas.splice(telaraña,1)
        }
    })
}
function crearTelaraña2(){
    if(disparo2==true){
    let telaraña2= new Telaraña2(spider2)
    telarañas2.push(telaraña2)
    disparo2=false
    }
}
function piumpium2(){
    for(let i=0;i<telarañas2.length;i++){
       if(telarañas2[i].y < 0){
           telarañas2.splice(i,1)
       }
       telarañas2[i].draw()
    }
    telarañas2.map(telaraña2=>{
        telaraña2.draw()
        if(vidaSpiderman(telaraña2)==true){
            telarañas2.splice(telaraña2,1)
        }
    })
}

function crearBalas(){
    if(!(frames%100 === 0))return
    let bals=new Balas()
    
    balas.push(bals)
}
function drawBalas(){
    crearBalas()
    
    balas.map(bals=>{
        bals.draw()
        if(vidaSpiderman(bals)==true){
            balas.splice(bals,1)
        }
        else if (bals.y>700){
            balas.splice(bals,1)
        }
    })
}
function vidaSpiderman(balass){
    if (spider.isTouching(balass)){
        spider.life--
        return true
    }
    if (spider.life<=0){
        clearInterval(interval)

    }
}
function vidaSpiderman2(balass){
    if (spider2.isTouching(balass)){
        spider2.life--
        return true
    }
    if (spider2.life<=0){
        clearInterval(interval)
    }
}

function valorx(){
    let valor = Math.floor(Math.random() * 130)
    if ( valor < 20){
        valorx()
    }
    return valor
  }
  function widthX(){
    valore = Math.floor(Math.random() * 110)
    if (valore > 100){
       return valore
    }
    return 100
  }
  function generateObstacles() {
    obstacles.push(new Obstacle (valorx(),widthX()))
  }
  function drawObstacles() {
    if (frames % 320 === 0) {
      generateObstacles()    
    }
    obstacles.forEach(obstacle => {
      obstacle.draw()
      if(spider.isTouching(obstacle)){
          spider.life-=2
          obstacles.splice(obstacle,1)
      }
      else if (obstacle.y>700){
        obstacles.splice(obstacle,1)
        }
    })
  }

  function malo_malo(tipo){
    tipo.height=50
    tipo.width=50
    tipo.draw()
    for(let i = 0 ; i<telarañas.length;i++){
        if (tipo.isTouching(telarañas[i])){
            tipo.life--
            telarañas.splice(i,1)
        } 
    }
    if (tipo.life<=0){
        explosiones.draw(tipo)
        gameOver()
        you_W.style.display="initial"
        you_W.style.position="absolute"
        return true
    }
    if(taki_taki<=60 && taki_taki>0){
        poder_malo.specialAttack()
        taki_taki-=1
        if(spider.isTouching(poder_malo)){
            spider.life-=3
            poder_malo=""
            taki_taki=0
        }
    }
    else{
        poder_malo=""
    }
    if(frames% 200==0){
        taki_taki=60
        poder_malo= new Poder_malo(tipo)  
    }
    
  }
function gameOver(){
    clearInterval(interval)
    return true
}
