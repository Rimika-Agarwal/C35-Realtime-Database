//step1
var database;
var position;
var ball;

function setup(){
    createCanvas(500,500);

    //step2
    database = firebase.database();

    //step3 - ref
    //database.ref("ball/position").on("value", readPosition, showError);
    var ballRef =  database.ref("ball/position");
    ballRef.on("value", readPosition, showError);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

//reading function the perameter is always "data"
function readPosition(data){
    position = data.val()
    console.log(position.x)
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("No data")
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x: position.x + x,
        y: position.y + y
    })
}
