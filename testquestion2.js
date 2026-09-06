let xpos=50;
let ypos=50;
let colorme=0;
function setup(){
    createCanvas(600,600);
    background("gray")
    
    for(let num=1; num <11; num=num+1){
     fill(colorme)
        circle(xpos,ypos,50);

            xpos+=50;
            ypos+=50;
            colorme+=30;

            
    }}