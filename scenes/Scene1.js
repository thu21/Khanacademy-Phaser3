
var posX_A=400;
var posY_A=280;
var posX_B=700;
var posY_B=280;
var posX_C=250;
var posY_C=530;
var posX_D=550;
var posY_D=530;
var posX_E=850;
var posY_E=530;

var radius = 25;
var color = 0xffff00;
var thickness = 4;
var alpha = 1;
class Scene1 extends Phaser.Scene{
constructor(){
    super({key:'Scene1'});
    this.isRun=true;
   // this.isMusic=true;
}
preload (){}
create ()
  {
  this.countNumberWrong=0;
  this.countNumberRight=0;
  this.input.setDefaultCursor('url(public/assets/Game/blue.cur), pointer');

  this.add.image(230,350,'QA1');
  this.QA2=this.add.image(230,97,'QA2');

  //Music

  this.ImgMusic=this.add.image(1000,10, 'loa33').setOrigin(0).setDisplaySize(150, 150);
  this.music = this.sound.add('music');
  this.ImgMusic.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown',this.chooseMusic,this);
  this.music.play(MusicCofig);


  //Audio
  this.loa=this.add.image(255, 135,'loa').setOrigin(0).setDisplaySize(35, 35);
  this.audio = this.sound.add('audio1');
  this.loa.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', () => {
  this.audio.play();
    });

   //graphics
  this.graphics = this.add.graphics();
  this.graphics.lineStyle(thickness, color, alpha);


 //img1
 this.img1= this.add.rexCircleMaskImage(posX_A+10, posY_A-100, '1', {
                       maskType: 'roundRectangle',
                       radius: 100
                   }).setOrigin(0).setDisplaySize(250, 200);
 this.img1.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonA, this);
 this.A=this.add.text(posX_A+120,posY_A+105,"A", { color: '#000000', font: '32px Arial' }) ;
 this.A.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonA, this);
 //img5
 this.img5= this.add.rexCircleMaskImage(posX_B+10, posY_B-100, '5', {
                                          maskType: 'roundRectangle',
                                          radius: 100
                                      }).setOrigin(0).setDisplaySize(250, 200);
 this.B=this.add.text(posX_B+120,posY_B+105,"B", { color: '#000000', font: '32px Arial' }) ;
 this.B.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonB, this);
 this.img5.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonB, this);
 //img2
 this.img2=this.add.rexCircleMaskImage(posX_C+10, posY_C-100, '2', {
                                  maskType: 'roundRectangle',
                                  radius: 100
                              }).setOrigin(0).setDisplaySize(250, 200);
 this.C=this.add.text(posX_C+120,posY_C+105,"C", { color: '#000000', font: '32px Arial' }) ;
 this.C.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonC, this);
 this.img2.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonC, this);
 //img3
 this.img3=this.add.rexCircleMaskImage(posX_D+10, posY_D-100, '3', {
            maskType: 'roundRectangle',
            radius: 100
        }).setOrigin(0).setDisplaySize(250, 200);
 this.D=this.add.text(posX_D+120,posY_D+105,"D", { color: '#000000', font: '32px Arial' }) ;
 this.D.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('pointerdown', this.clickButtonD, this);
 this.img3.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonD, this);

//img4
 this.img4=this.add.rexCircleMaskImage( posX_E+10, posY_E-100, '4', {
                       maskType: 'roundRectangle',
                       radius: 100
                   }).setOrigin(0).setDisplaySize(250, 200);
 this.E=this.add.text(posX_E+120,posY_E+105,"E", { color: '#000000', font: '32px Arial' }) ;
 this.E.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonE, this);
 this.img4.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonE, this);
  //  If a Game Object is clicked on, this event is fired.
  //  We can use it to emit the 'clicked' event on the game object itself.
 this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);
 this.info = this.add.text(500, 10, '', { font: '48px Arial', fill: '#000000' });

  }

 update(){
   if (this.countNumberRight==3&&this.countNumberWrong==0){
       this.destroyObject(this.img1,this.img3,this.A,this.D,this.BB,this.CC,this.EE,this.B,this.C,this.D,this.E);

      if (this.isRun) {
        this.run();
      }
      if (this.img5.x==550){
       this.setRun(false);
       this.music.stop();


      this.scene.start("Scene2");
       }

  }
  else if (this.countNumberWrong==2){

       this.again=this.add.image(1040,170,'reload').setOrigin(0).setDisplaySize(70, 70);

       this.again.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown',() =>{
       this.music.stop();

    //window.location.href = 'Game.html'
    //let Scene_Start = this.scene.get('Sence_Start');
         this.scene.start();// restart current scene

 });
 }
  //this.info.setText('Dung: ' + this.countNumberRight +'\n Sai :'+this.countNumberWrong  );
}

 run(){
     this.img5.x--;
     this.img2.x++;
     this.img4.x--;
}
 setRun(x){
       this.isRun=x
}

   destroyObject() {
      for (let index = 0; index < arguments.length; index++) {
        arguments[index].setActive(false).setVisible(false);
      }
    }
    setObjectVisible(isVisible) {
      for (let index = 1; index < arguments.length; index++) {
        arguments[index].setVisible(isVisible);
      }
    }

    clickButtonFalse(posX,posY,textX){

        this.textX.destroy();
        this.add.text(posX,posY,"textX", { color: '#FF0000', font: '32px Arial' }) ;
        this.Animations();
    }
    clickButtonA(){
    //this.destroyObject(this.A)
   //this.AA = new Phaser.Curves.Path(posX_A,posY_A, { color: '#FF0000'}).circleTo(100);
    //this.AA=this.add.text(posX_A,posY_A,"A", { color: '#FF0000', font: '32px Arial' }) ;
    this.graphics.strokeCircle(posX_A+130,posY_A+125, radius);
    this.countNumberWrong++;


    }
    clickButtonB(){
    // this.destroyObject(this.B)
    // this.BB=this.add.text(posX_B,posY_B,"B", { color: '#00FF00', font: '32px Arial' }) ;
    this.BB=this.graphics.strokeCircle(posX_B+130,posY_B+125, radius);
    this.countNumberRight++;
    }
    clickButtonC(){
    //this.C.destroy();
    //this.CC=this.add.text(posX_C,posY_C,"C", { color: '#00FF00', font: '32px Arial' }) ;
     this.CC=this.graphics.strokeCircle(posX_C+130,posY_C+125, radius);
     this.countNumberRight++;
    }
    clickButtonD(){
    //this.D.destroy();
    //this.DD=this.add.text(posX_D,posY_D,"D", { color: '#FF0000', font: '32px Arial' }) ;
      this.DD=this.graphics.strokeCircle(posX_D+130,posY_D+125, radius);
      this.countNumberWrong++;
      this.Animations();
    }
    clickButtonE(){
    //this.E.destroy();
   // this.EE=this.add.text(posX_E,posY_E,"E", { color: '#00FF00', font: '32px Arial' }) ;
       this.EE= this.graphics.strokeCircle(posX_E+130,posY_E+125, radius);
       this.countNumberRight++;
    }

    Animations(){
    console.log("Ready!");
    this.ani2=this.add.sprite(920,90,"ani2");
    var frameNames=this.textures.get('ani2').getFrameNames();
    console.log(frameNames);
    this.anims.create({
    key:'attack',
    frames:[
        {
                key:'ani2',
                frame:"01.png"
        },

        {
                key:'ani2',
                frame:"02.png"
        },
        {
                key:'ani2',
                frame:"03.png"
        },
        {
                 key:'ani2',
                 frame:"04.png"
        },
        {
                 key:'ani2',
                 frame:"05.png"
        },
        {
                 key:'ani2',
                 frame:"06.png"
        },
        {
                  key:'ani2',
                  frame:"07.png"
        },
        {
                  key:'ani2',
                  frame:"08.png"
        },
        {
                  key:'ani2',
                  frame:"09.png"
        },
        {
                  key:'ani2',
                  frame:"10.png"
        }
    ],
    fameRate:8,
    repeat:-1
    });
    this.ani2.play("attack")
    }
   // setMusic(x){
   //        this.isMusic=x
   // }
   chooseMusic(){

           /* if(this.isMusic==true)
             {
            // this.ImgMusic=this.add.image(1000,10, 'loa33').setOrigin(0).setDisplaySize(150, 150);
             this.ImgMusic.destroy();
             this.ImgMusicSt= this.add.image(1000,10,'loa3').setOrigin(0).setDisplaySize(150, 150);
             this.setMusic(false);
             this.music.pause();

             }
             else{
               this.ImgMusicSt.destroy();
              this.ImgMusic=this.add.image(1000,10, 'loa33').setOrigin(0).setDisplaySize(150, 150);

              this.setMusic(true);
              this.music.resume();}
*/
       this.ImgMusic.destroy();
       this.add.image(1000,10,'loa3').setOrigin(0).setDisplaySize(150, 150);
       this.music.pause();
}
}
























