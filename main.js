song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,ml);
    poseNet.on("pose", gotPoses);
}

function preload(){
    song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,300,300);
}

function ml(){
    console.log("poseNet is loaded :D");
}