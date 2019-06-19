const  canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")
//clases

const edificios = new Edificios()
const central = new Central(edificios)
const spider = new Spiderman(edificios)
const bala = new Balas()
const vuture_V= new Vulture(edificios)
const explosiones= new Explosion(vuture_V)
const vida= new LifeBar(spider)
const electro_V = new Electro(edificios)
const kraven_V = new Kraven(edificios)
const rhino_V = new Rhino(edificios)
const goblin_V = new Goblin(edificios)
const venom_V = new Venom(edificios)

// selectores
const inicio = document.querySelector("#inicio")
const menu_villanos = document.querySelector(".villanos")
const vulture_button = document.querySelector("#vulture")
const electro_button = document.querySelector("#electro")
const kraven_button = document.querySelector("#kraven")
const rhino_button = document.querySelector("#rhino")
const goblin_button = document.querySelector("#goblin")
const venom_button = document.querySelector("#venom")
const canvas_C=document.querySelector(".canvas")
const you_W=document.querySelector("#next_phase")
const game_O=document.querySelector(".disp")


//setters for the villans
vuture_V.width=0
vuture_V.height=0
electro_V.width=0
electro_V.height=0
kraven_V.width=0
kraven_V.height=0
rhino_V.height=0
rhino_V.width=0
goblin_V.height=0
goblin_V.width=0
venom_V.height=0
venom_V.width=0

//variables
let balas=[]
let telarañas=[]
let disparo=false
let animateHelper=0
let interval
let frames = 0
let obstacles=[]
let taki_taki=60


//unlocables
let unlock_electro=false
let unlock_kraven=false
let unlock_rhino=false
let unlock_goblin=false
let unlock_venom=false