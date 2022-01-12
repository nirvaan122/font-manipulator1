
    lefthand_x=0
    righthand_x=0
    diff=0
    function setup(){
    Video=createCapture(VIDEO)
    Video.size(500,500)
    canvas=createCanvas(500,500)
    canvas.position(550,100)
    posenet=ml5.poseNet(Video,modelLoaded)
    posenet.on("pose",gotPoses)
    
    
    
    
    
    }
    function draw(){
    background("blue")
    fill("white")
    stroke("black")
    textSize(diff)
    text('DAV PUBLIC SCHOOL', 100, 100);
    document.getElementById("square_side").innerHTML="size of the square="+diff+"px";
    }
    function modelLoaded(){
        console.log("posenet is loaded")
    }
    function gotPoses(results){ 
        if (results.length>0) {
            console.log(results)  
            righthand_x=results[0].pose.rightWrist.x
            lefthand_x=results[0].pose.leftWrist.x
            diff=floor(lefthand_x-righthand_x)
        }
    }