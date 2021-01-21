class lines {
    constructor(x,y,w,h){
        
    var option={
        isStatic:true
       
    }
    
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,w,h,option)
    this.image=loadImage("sprites/dustbingreen.png")
    World.add(world,this.body)
    
    
    }
    display(){
        
        var pos=this.body.position
      imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
    }
}
