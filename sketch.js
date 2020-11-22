var solarpanel;
var back;
var tell,tell_img;
var op1c,op1c_img;
var Knowledgelevel=0;
var how,how_img;
var wr1,wr1_img;
var not,not_img;
var info1,info1_img;
function preload(){
    info1_img=loadImage("info1.PNG");
back=loadImage("backgroung.png")
tell_img=loadImage("information.PNG");
op1c_img=loadImage("OP1.PNG");
how_img=loadImage("how.PNG");
wr1_img=loadImage("OP1WR.PNG");
not_img=loadImage("questions not workings.PNG");
}

function setup(){
    
    canvas=createCanvas(displayWidth - 20, displayHeight - 30)
    //solarpanel=createSprite(200,200,60,60);
    tell=createSprite(displayWidth/2 + 30, displayHeight/2)
    tell.addImage("tellme",tell_img);

    this.Play=createButton("Let's Start and create");

    this.Play.position(displayWidth / 1.5  + 30, displayHeight / 1.3);
    this.Play.style('width', '250px');
          this.Play.style('height', '50px');
          this.Play.style('background', 'yellow');

          this.Play.mousePressed(()=>{
              this.Play.hide();
              tell.visible=false;
              this.Letstest=createButton("First Let Me check How Much Do")
              this.Letstest.position(displayWidth / 2.5+ 30, displayHeight / 2.7);
              this.Letstest.style('width', '250px');
          this.Letstest.style('height', '50px');
          this.Letstest.style('background', 'red');

          this.know=createButton("You Know about solar panels")
          this.know.position(displayWidth / 2 + 30, displayHeight / 2.3);
          this.know.style('width', '250px');
      this.know.style('height', '50px');
      this.know.style('background', 'red');

      this.solet=createButton("So,Let's start checking");
      this.solet.position(displayWidth/1.5 + 30,displayHeight/1.8);
      this.solet.style('width','250px');
      this.solet.style('height', '50px');
          this.solet.style('background', 'darkgreen');
          
          this.solet.mousePressed(()=>{
              this.solet.hide();
              this.know.hide();
              this.Letstest.hide();
              how=createSprite(displayWidth/2 + 30, displayHeight/2);
              how.addImage("How",how_img);
              this.howafter=createButton("Let's Increase");
              this.howafter.position(displayWidth/1.5 + 30,displayHeight/1.5);
              this.howafter.mousePressed(()=>{
                  this.howafter.hide();
                  how.visible=false;
                this.ques1=createButton("1.What is the one of the most important part of a solar panel ");
              this.ques1.position(displayWidth / 2.5+ 30, displayHeight / 2.7);
              this.ques1.style('width','250px');
              this.ques1.style('height', '50px');
                  this.ques1.style('background', 'lightgreen');
                  this.o1pq1=createButton("A.Silicon cells");
                  this.o1pq1.position(displayWidth/2.5 + 30,displayHeight/2.2);

                this.o2pq1=createButton("B.Invertors");
                  this.o2pq1.position(displayWidth/2 + 30,displayHeight/2.2);
//Choosing a correct option for question1.
    this.o1pq1.mousePressed(()=>{
        this.o1pq1.hide();
        this.o2pq1.hide();
        this.ques1.hide();
        op1c=createSprite(displayWidth/3.2+ 30,displayHeight/2);
        op1c.addImage("Correct",op1c_img);
        Knowledgelevel=Knowledgelevel+2;
        this.nextq1c=createButton("Next");
        this.nextq1c.position(displayWidth/2.5 + 30,displayHeight/1.5);
        
        this.nextq1c.mousePressed(()=>{
            this.nextq1c.hide();
            op1c.visible=false;
            this.ques2fc1=createButton("1.Which components work to ensure a PV array is connected to either the ground or a roof");
            this.ques2fc1.position(displayWidth /3 + 30, displayHeight / 2.7);
            this.ques2fc1.style('width','250px');
            this.ques2fc1.style('height', '50px');
                this.ques2fc1.style('background', 'lightgreen');
                this.c1q2o1=createButton("1.Racking and Mounting components");
                this.c1q2o1.position(displayWidth/3.5 + 30,displayHeight/2.2);

                this.c1q2o2=createButton("2.Inverters");
                this.c1q2o2.position(displayWidth/2.1 + 30,displayHeight/2.2)

                this.c1q2o1.mousePressed(()=>{
                    this.c1q2o1.hide();
                    Knowledgelevel=Knowledgelevel+2;
                    this.c1q2o2.hide();
                    this.ques2fc1.hide();
                    not=createSprite(displayWidth /3 + 30, displayHeight / 2.7)
                    not.addImage("no no",not_img);
                    this.nextfin1=createButton("Next");
                    this.nextfin1.position(displayWidth/2.5 + 30,displayHeight/1.8);

                    this.nextfin1.mousePressed(()=>{
                        this.nextfin1.hide();
                        not.visible=false;
                        info1=createSprite(displayWidth /3 + 30, displayHeight / 2.7);
                        info1.addImage("1",info1_img);
                        Knowledgelevel=Knowledgelevel*100;
                        
                    })

                })

                this.c1q2o2.mousePressed(()=>{
                    this.c1q2o1.hide();
                    Knowledgelevel=Knowledgelevel+5;
                    this.c1q2o2.hide();
                    this.ques2fc1.hide();
                    not=createSprite(displayWidth /3 + 30, displayHeight / 2.7)
                    not.addImage("no no",not_img);
                    this.nextfin12=createButton("Next");
                    this.nextfin12.position(displayWidth/2.5 + 30,displayHeight/1.8);

                    this.nextfin12.mousePressed(()=>{
                        this.nextfin12.hide();
                        not.visible=false;
                        info1=createSprite(displayWidth /3 + 30, displayHeight / 2.7);
                        info1.addImage("1",info1_img);
                        Knowledgelevel=Knowledgelevel*100;
                        
                    })

                })



        })
    })
    //Choosing wrong for 1st.
    this.o2pq1.mousePressed(()=>{
       this.o2pq1.hide();
       this.o1pq1.hide();
       this.ques1.hide();
       Knowledgelevel=Knowledgelevel+5;
       wr1=createSprite(displayWidth/2+30,displayHeight/2);
       wr1.addImage("wrong",wr1_img);
       this.nextfw1=createButton("Next");
       this.nextfw1.position(displayWidth/2 + 30,displayHeight/1.5);
      
       this.nextfw1.mousePressed(()=>{
        this.nextfw1.hide();
        wr1.visible=false;
        this.ques2fw1=createButton("1.Which components work to ensure a PV array is connected to either the ground or a roof");
        this.ques2fw1.position(displayWidth /3 + 30, displayHeight / 2.7);
        this.ques2fw1.style('width','250px');
        this.ques2fw1.style('height', '50px');
            this.ques2fw1.style('background', 'lightgreen');
            this.w1q2o1=createButton("1.Racking and Mounting components");
            this.w1q2o1.position(displayWidth/3.5 + 30,displayHeight/2.2);

            this.w1q2o2=createButton("2.Inverters");
            this.w1q2o2.position(displayWidth/2.1 + 30,displayHeight/2.2)

            this.w1q2o1.mousePressed(()=>{
                this.w1q2o1.hide();
                Knowledgelevel=Knowledgelevel+2;
                this.w1q2o2.hide();
                this.ques2fw1.hide();
                not=createSprite(displayWidth /3 + 30, displayHeight / 2.7)
                not.addImage("no no",not_img);
                this.nextfin123=createButton("Next");
                this.nextfin123.position(displayWidth/2.5 + 30,displayHeight/1.8);

                this.nextfin123.mousePressed(()=>{
                    this.nextfin123.hide();
                    not.visible=false;
                    info1=createSprite(displayWidth /3 + 30, displayHeight / 2.7);
                    info1.addImage("1",info1_img);
                    Knowledgelevel=Knowledgelevel*100;
                    
                })

            })

            this.w1q2o2.mousePressed(()=>{
                this.w1q2o1.hide();
                Knowledgelevel=Knowledgelevel+5;
                this.w1q2o2.hide();
                this.ques2fw1.hide();
                not=createSprite(displayWidth /3 + 30, displayHeight / 2.7)
                not.addImage("no no",not_img);
                this.nextfin124=createButton("Next");
                this.nextfin124.position(displayWidth/2.5 + 30,displayHeight/1.8);

                this.nextfin124.mousePressed(()=>{
                    this.nextfin124.hide();
                    not.visible=false;
                    info1=createSprite(displayWidth /3 + 30, displayHeight / 2.7);
                    info1.addImage("1",info1_img);
                    Knowledgelevel=Knowledgelevel*100;
                    
                })
            })

       })






    })
              })

          })


          })
}









function draw(){
    
    background(rgb(198,135,103));
    image(back,0,-displayHeight*0,displayWidth/1, displayHeight*1);
    textSize(30);
    fill(62,93,37);
    text("Knowledge Level:"+Knowledgelevel, displayWidth / 1.7 + 30, displayHeight / 5);
 
    drawSprites();
}