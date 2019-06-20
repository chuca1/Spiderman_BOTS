class Edificios{
    constructor(){
        this.x=0
        this.y=-canvas.height
        this.width=canvas.width
        this.height=canvas.height*2
        this.img= new Image()
        this.img.src= "./Imagenes/fondo uno.jpg"
        this.img.onload  = () =>{
            this.draw()
        }
    }
    move(){
        if (this.y < 1 && this.y > 0) return
        else if (this.y < -canvas.height) this.y= 0
        this.y+=.2
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height)
        // context.drawImage(
        //     this.img,
        //     this.x,
        //     this.y + canvas.height,
        //     this.width,
        //     this.height
        // )
        this.move()
    }
}
class Central{
    constructor(imagen){
        this.x=40
        this.y=canvas.height
        this.width=200
        this.height=canvas.height
        this.img= new Image()
        this.imagen= imagen
        this.img.src= "./Imagenes/edificio.png"
        this.img.onload  = () =>{
            this.draw()
        }
    }
    move(){
        if (this.imagen.y < 1 && this.imagen.y > 0) return
        this.y++
        if (this.y > canvas.height) this.y= 0
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height)
        context.drawImage(
            this.img,
            this.x,
            this.y - canvas.height,
            this.width,
            this.height
        )
        this.move()
    }
}
class Spiderman{
    constructor(imagen,balas){
        this.x=125
        this.y=550
        this.width=50
        this.height=50
        this.life=30
        this.spiderR =  new Image()
        this.spiderM =  new Image()
        this.spiderL =  new Image()
        this.img = new Image()
        this.imagen = imagen
        this.spiderR.src =  "./Imagenes/derecha.png"
        this.spiderM.src =  "./Imagenes/media.png"
        this.spiderL.src =  "./Imagenes/izquierda.png"
    }
    move(){
        this.y-=2.5
    }
    draw(){
        this.y+=2.5 
        if(this.imagen.y < 1 && this.imagen.y > 0)  context.drawImage(this.img,this.x,this.y,this.width,this.height)
        else if(frames % 3 ==0){
            this.img = animateHelper === 0 ? this.spiderL:
                       animateHelper === 1 ? this.spiderM:
                       animateHelper === 2 ? this.spiderR:this.spiderM
            if (animateHelper<4){
                animateHelper++
            }
            else{
                animateHelper=0
            }
        }
        context.drawImage(this.img,this.x,this.y,this.width,this.height)

        this.move()
    }
    moveRight(){
        if(this.x > canvas.width - 115)return
          this.x += 12
        }
    moveLeft(){
        if(this.x < 40)return
          this.x -= 12
        }
    moveUp(){
        if(this.y < 70)return
            this.y -= 8
        }
    moveDown(){
        if(this.y > 551)return
            this.y += 8
        }
    isTouching(balas){
            return this.x < balas.x + balas.width &&
                   this.x + this.width > balas.x &&
                   this.y < balas.y + balas.height &&
                   this.y + this.height > balas.y
    }

}
class Spiderman2 extends Spiderman{
    constructor(imagen,balas){
        super(imagen,balas)
        this.y=50
        this.width=0
        this.height=0
        this.spiderL.src="./Imagenes/izquierda2.png"
        this.spiderM.src ="./Imagenes/media2.png"
        this.spiderR.src ="./Imagenes/derecha2.png"
        
    }

}
class Telaraña{
    constructor(spiderman){
        this.x=spiderman.x+4
        this.y=spiderman.y
        this.width=10
        this.height=10
    }
    move(){
        this.y-=8
    }
    draw(){
        context.fillRect(this.x,this.y,this.width,this.width)
        this.move()
    }
}
class Telaraña2{
    constructor(spiderman2){
        this.x=spiderman2.x+4
        this.y=spiderman2.y+spiderman2.height
        this.width=10
        this.height=10
    }
    move(){
        this.y+=8
    }
    draw(){
        context.fillRect(this.x,this.y,this.width,this.width)
        this.move()
    }
}
class Balas{
    constructor(){
        this.x=Math.floor(Math.random() * (230 - +40)) + +40
        this.y=0
        this.width=20
        this.height=20
        this.img=new Image()
        this.img.src="./Imagenes/ladrillo.png"
    }
    move(){
        this.y+=5
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.width)
        this.move()
    }
}
 
class Villanos{
    constructor(imagen,telarañas){
        this.x=canvas.width/2
        this.width=60
        this.height=90
        this.img= new Image()
        this.img.src="./Imagenes/vulture.png"
        this.imagen=imagen
        this.y=0
        this.life=20
    
    }
    move(){
        let prueba =Math.floor(Math.random()*2.99) - 1
        if(frames % 2 ==0){
        if((this.x+=prueba) < 150){
            this.x+=prueba
         }
        }
       
    }
    draw(){
        if(this.imagen.y <= 1.5 && this.imagen.y >=-1){
            context.drawImage(this.img,this.x,this.y,this.width,this.height)
            this.move()
        }
        
    }

    isTouching(telarañas){
        return this.x < telarañas.x + telarañas.width &&
               this.x + this.width > telarañas.x &&
               this.y < telarañas.y + telarañas.height &&
               this.y + this.height > telarañas.y
}
}

class Obstacle {
    constructor(x,w) {
      this.x = x
      this.y = 0
      this.width= w
      this.height = 40
      this.img=new Image()
      this.img.src="./Imagenes/obstaculo.png"
    }
    draw() {
      context.drawImage(this.img,this.x, this.y, this.width, 40)
      this.y++
    }
  }
  class Explosion{
      constructor(villano){
      this.x=villano.x
      this.y=villano.height/2
      this.width=100
      this.height=100
      this.img = new Image()
      this.img.src="./Imagenes/explosion.png"
      }
      
      draw(){
          context.drawImage(this.img,this.x,this.y,this.height,this.width)
          context.drawImage(this.img,this.x-villano-width,this.y,this.height,this.width)
          context.drawImage(this.img,this.x+villano-width,this.y,this.height,this.width)
      }
  }
  class LifeBar{
      constructor(spiderman){
      this.x=0
      this.y= 620
      this.width=spiderman.life*30
      this.height=20

      }
      draw(){
        
        context.fillRect(this.x,this.y,this.width,this.height)
    }
  }


// classes of villanos
class Vulture extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Imagenes/vulture.png"
    }   
}
class Electro extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Imagenes/eltectro.png"
    }
}
class Kraven extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Imagenes/kraven.png"
    }
}
class Rhino extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Imagenes/rhino.png"
    }
}
class Goblin extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Imagenes/goblin.png"
    }
    specialAttack(){
      
        context.fillRect(this.x+ this.width/2,this.y,10,canvas.height)
    }
}
class Venom extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Imagenes/Venom.png"
    }
}
class Poder_malo{
    constructor(tipo){
        this.tipo=tipo
        if(tipo==vuture_V){
            this.x=vuture_V.x+ vuture_V.width/2
            this.y=vuture_V.y+vuture_V.height
            this.width=10
            this.height=canvas.height
        }
        else if(tipo==electro_V){
            this.x=0
            this.y=200
            this.width=canvas.width
            this.height=canvas.height/4
        }
        else if(tipo==kraven_V){
            this.x=0
            this.y=400
            this.y1=400
            this.width=canvas.width
            this.height=30
        }
        else if(tipo==rhino_V){
            this.x=0
            this.y=600
            this.width=canvas.width
            this.height=canvas.height/4
        }
        else if(tipo==goblin_V){
            this.x= Math.floor(Math.random() * 130)
            this.y=Math.floor(Math.random() * 110)
            this.width=Math.floor(Math.random() * 110)
            this.height=Math.floor(Math.random() * 110)
        }
        else if(tipo==venom_V){
            this.x=canvas.width/8
            this.x1=canvas.width/4
            this.x2=canvas.width/22
            this.y=0
            this.width=20
            this.height=canvas.height
        }
    }
    specialAttack(){
        if(this.tipo==vuture_V){
            context.fillRect(this.x,this.y,this.width,this.height)
        }
        else if(this.tipo==electro_V){
            context.fillRect( this.x,this.y ,this.width,this.height)
        }
        else if(this.tipo==kraven_V){
                context.fillRect(this.x,this.y,this.width,this.height)
                context.fillRect(this.x,this.y1,this.width,this.height)
        }
        else if(this.tipo==rhino_V){
            context.fillRect( this.x,this.y ,this.width,this.height)
        }
        else if(this.tipo==goblin_V){
            context.fillRect(this.x,this.y,this.width,this.height)
        }
        else if(this.tipo==venom_V){
            context.fillRect(this.x,this.y,this.width,this.height )
            context.fillRect( this.x1,this.y,this.width,this.height)
            context.fillRect(this.x2,this.y,this.width,this.height)
        }



    }
}
