img1=""
status1=""
function preload(){
img1=loadImage('dog_cat.jpg')
}
function setup(){
canvas=createCanvas(640,420)
canvas.center()
objectdetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="status:detectingObjects"
}
function draw(){
image(img1,0,0,640,420)
fill("red")
noFill()
stroke("red")
rect(30,60,450,350)
text("dog",45,75)
fill("red")
noFill()
stroke("red")
rect(300,90,350,380)
text("cat",320,120)
}
function modelLoaded(){
console.log("modelLoaded")
status1=true
objectdetector.detect(img1,gotResult)
}
function gotResult(error,results){
if (error) {
console.log(error)
}
else{
console.log(results)
}
}