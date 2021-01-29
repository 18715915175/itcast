(function (w){
				function extend(o1,o2){
					for(var key in o2){
						if(o2.hasOwnProperty(key)){
							o1[key]=o2[key];
						}
					}
				}
				
				function Person(ctx,img,widthFrame,heightFrame,x,y,renderWidth,renderHeight,speed){
					this.ctx=ctx;
					this.img=img;
					this.widthFrame=widthFrame;
					this.heightFrame=heightFrame;
					thi
				
				extend(Person.prototype,{
					draw:function(){
						this.ctx.drawImage(this.img,
								this.width*this.currentFrame,0,this.width,this.height,
								this.x,this.y,this.renderWidth,this.renderHeight)
					},
					
					bind:function(){
						var self=this;
						document.addEventListener("keydown",function(e){
							switch(e.keyCode){
								case 37: 
									self.direction=1;
									console.log(e.keyCode);
									break;
								case 38: 
									self.direction=3;
									console.log(e.keyCode);
									break;
								case 39: 
									self.direction=2;
									console.log(e.keyCode);
									break;
								case 40: 
									self.direction=0;
									console.log(e.keyCode);
									break;
							}
						})
					},
					
					// 移动小人
					update:function (){
						switch(this.direction){
							case 0:this.y+=this.speed;
								this.y=this.y>this.ctx.canvas.height?-this.renderHeight:this.y;
							console.log(this.direction);
							break;
							case 1:this.x-=this.speed;
								this.x=this.x<-this.renderWidth?this.ctx.canvas.width:this.x;
							console.log(this.direction);
							break;
							case 2:this.x+=this.speed;
								this.x=this.x>this.ctx.canvas.width?-this.renderWidth:this.x;
							console.log(this.direction);
							break;
							case 3:this.y-=this.speed;
								this.y=this.y<-this.renderHeight?this.ctx.canvas.height:this.y;
							console.log(this.direction);
							break;
						}
					}
				})
				// 对外暴露
				w.Person=Person;
				
			}(window));