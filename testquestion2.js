let xpos=50;
let ypos=50;
let colorme=0;
function setup(){
    createCanvas(600,600);
    background("gray")
    Fill(num*50)
}

function draw(){
    
    for(let num=1; num <11; num=num+1){
        circle(xpos,ypos,50);

            xpos+=50;
            ypos+=50;
            colorme+=30;
            
    };
    
}