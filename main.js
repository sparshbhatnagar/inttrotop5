function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(100, 200)
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video, 180, 140, 300, 200)
    fill("green");
    stroke("green");
    rect(50 , 50 , 540 , 20);
    rect(50 , 430 , 540 , 20);
    rect(50 , 50 , 20 , 380);
    rect(590 , 50 , 20 , 400);

    fill("red");
    stroke("black")
    circle(60,70,50);
    circle(600,70,50);
    circle(60,430,50);
    circle(600,430,50);
    
    
    
}




function take_snapshot() {
save("pic.png");
}