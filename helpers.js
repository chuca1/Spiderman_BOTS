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

  function malo_malo(tipo,variable){
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
        gameOver(variable)
    }
    if(taki_taki<=60){
        
    }
    
  }
function gameOver(variable){
    clearInterval(interval)
    variable=true
}
