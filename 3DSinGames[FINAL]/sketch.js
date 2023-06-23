var confLocs;
var confTheta;

//For creating the names of the sliders
var button1;
var button2;



function setup() {
    
    //Step 1 - 
    createCanvas(900, 900, WEBGL);
    camera(800,-600,800,0,0,0,0,1,0);
    angleMode(DEGREES);
    
    
    //To create the position and size of slider1 & slider2
    slider1 = createSlider(50, 500, 100); 
    slider1.position(50, 40);
    slider1.style('width', '200px');
   
    
    slider2 = createSlider(0, 15, 2); 
    slider2.position(50, 80);
    slider2.style('width', '200px');
    
     
    
    
    //Step 5 - 
    confLocs = [];
    confTheta = [];
    
    for(var i =0; i< 200; i++){
        random(-500,500);
        var a = random(-500,500);
        var b = random(-800,0);
        var c = random(-500,500);
        confLocs.push(createVector(a,b,c));
        confTheta.push(random(0,360));
        
     
        
    }

    
    
    //Creating the names of slider1 & slider2 using buttons
    button1 = createButton("Height");
    button1.size(50,20);
    button1.position(280,40);
    button1.style("font-family", "Bodoni");
    button1.style("font-size", "13px");
    
    
    button2 = createButton("Animation");
    button2.size(80,20);
    button2.position(280,80);
    button2.style("font-family", "Bodoni");
    button2.style("font-size", "13px");
    
    
  
    
    
}

function draw() {
    
    background(125);
    angleMode(DEGREES);
    
    
    
    
  //  var xLoc = cos(frameCount)*height;
  //  var zLoc = sin(frameCount)*height;
 //   camera(xLoc,-600,zLoc,0,0,0,0,1,0);
    
    var xLoc = cos(frameCount/4) * height * 3/2;
    var zLoc = sin(frameCount/4) * height * 3/2;
    
    //Step 4 - 
    camera (xLoc, -600, zLoc , 0, 0, 0, 0, 1, 0);
    
    
    //Step 2 - 
    normalMaterial();
    stroke(0);
    strokeWeight(2);
    
    
    for(var x =-400;x<400;x+=50){
        for(var z =-400;z<400;z+=50){
            push();
            translate(x,0,z);
            
            //Step 3 - 
            var distance = dist(0,0,x,z)+frameCount;
            
            
            
            // Setting the values of slider1 & slider2
            var sliderval1 = slider1.value();
            var sliderval2 = slider2.value();
            
            var length = (((sin(360 * distance/600 + frameCount * sliderval2) + 1)/2) * 200)+sliderval1;
            
            
    
            
           // var length = map(sin(distance),-1,1,200,300);
            
         
            
            // Creating animation so that when mouse is over the boxes,it changes colour
            var locX = mouseX - height / 2;
            var locY = mouseY - width / 2;
            
            ambientLight(100, 150, 300);
            pointLight(255, 0, 0, locY, locX, 100);
          
            
            
            specularMaterial(255);
            stroke(0);
            strokeWeight(2);
                
            
            
            
            box(50,length,50);
            
            //box(50,50,50);
            pop();
        }
    }
    
    normalMaterial();
    confetti();
    
    
    
    
    
}

function confetti(){
    for(var i=0;i<confLocs.length;i++){
        push();
        translate(confLocs[i].x, confLocs[i].y, confLocs[i].z);
        
        //Step 6 -
        rotateX(confTheta[i]);
        plane(15,15);
        
        confLocs[i].y +=1;
        confTheta[i] +=10;
        
        if(confLocs[i].y>0){
            confLocs[i].y = -800;
        }
        
        pop();
    }
}
