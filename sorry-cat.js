const sadCatImgs=[
  "https://media.tenor.com/9cR6so-6CAQAAAAi/kawaii-mochi.gif",
  "https://media.tenor.com/3DcefzguPqAAAAAi/mochi-peach.gif",
  "https://media.tenor.com/YGyT1579xX4AAAAi/mochi-sad.gif",
  "https://media.tenor.com/noZs9WKNqyoAAAAi/cat-sad.gif",
  "https://media.tenor.com/wLeYLBVf6QgAAAAi/cry-anime.gif",
  "https://media.tenor.com/HN5z9bLBvKgAAAAi/cover-ears.gif",
  "https://media.tenor.com/x8PLmeuZFRgAAAAi/tkthao219-peach.gif",

]
function changeBGI(){
  const index= Math.floor(Math.random()*sadCatImgs.length)
  document.querySelector('.bgi').src=sadCatImgs[index]
}

const noButton= document.querySelector(".noButton")
const buttonFly=()=>{
  const left= Math.floor(Math.random()*200)
  const top= Math.floor(Math.random()*200)
  noButton.style.left= `${left}px`
  noButton.style.top= `${top}px`
  noButton.style.position= "absolute"
}
const playCryAudio=()=>{
  document.querySelector(".crying_cat").play()
}
const pauseCryAudio=()=>{
  document.querySelector("crying_cat").pause()
}
noButton.addEventListener('mouseover',()=>{
  changeBGI()
  buttonFly()
  playCryAudio()
  pauseHappyAudio()
})
noButton.addEventListener('click',()=>{
  changeBGI()
  buttonFly()
})
const pauseHappyAudio=()=>{
  document.querySelector("happy_cat").pause()
}

const yesButton= document.querySelector('.yesButton')
function yesChangeBGI(){
  document.querySelector(".bgi").src= "https://media.tenor.com/906nGAL7Xw0AAAAi/mochi-peachcat-cute-cat.gif"
}
const playHappyAudio=()=>{
  document.querySelector(".happy_cat").play()
}
yesButton.addEventListener('click',()=>{
  yesChangeBGI()
  playHappyAudio()
  pauseCryAudio()
})