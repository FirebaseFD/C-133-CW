objects = [];
img = "";
stats = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetec = ml5.objectDetector('cocossd', modelLoaded);
}

function draw(){
    image(img, 0, 0, 640, 420);
    /*fill("cyan");
    textSize(20);
    text('Dog', 120, 50);
    stroke("red");
    strokeWeight(5);
    noFill();
    rect(100, 30, 250, 370);

    //Adding a box around the cat
    fill("cyan");
    text('Cat', 320, 80);
    noFill();
    rect(300, 60, 300, 360);

    //Adding a box around the bowl
    fill("cyan");
    stroke("purple");
    text('Bowl', 280, 325);
    noFill();
    rect(270, 305, 130, 105);*/

    if(stats != ""){
        for (i = 0; i < objects.length; i++) {
            fill("cyan");
            textSize(20);
            stroke("red");
            strokeWeight(5);
            document.getElementById("stats").innerHTML = "Status : Objects Detected";
            percent = floor(objects[i].confidence *100);
            text(objects[i].label+"  "+percent+"%", objects[i].x+20, objects[i].y+20);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);            
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    stats = true;
    objectdetec.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}