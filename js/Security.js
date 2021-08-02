class Security {

    constructor(){

       this.access1 = createInput("code1");
       this.access1.position(100,90);
       this.access1.style("background","white");
       
       this.access2 = createInput("code2");
       this.access2.position(700,190);
       this.access2.style("background","white");

       this.access3 = createInput("code3");
       this.access3.position(100,290);
       this.access3.style("background","white");
       
       this.button1 = createButton("check");
       this.button1.position(100,120);
       this.button1.style("background","white")

       this.button2 = createButton("check");
       this.button2.position(700,220);
       this.button2.style("background","white")

       this.button3 = createButton("check");
       this.button3.position(100,320);
       this.button3.style("background","white")
       
 
    }

    display(){

     
        this.button.mousePressed(() =>{


            if(system.athenticate(accessCode1,this.access1.value())){
                this.button.hide();
                this.button.hide();
                score++;
            }
        })


    }
}