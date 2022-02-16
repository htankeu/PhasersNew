const config={
    width: 1000,
    height: 500,
    type:Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:450}
        }
    },
    scene:{
        preload:preload,
        create:create,
        update:update
    }
}




var game=new Phaser.Game(config)
let dude
let cursors

function preload(){
    this.load.image('img1', 'img1.png')
}

function create(){
    dude=this.physics.add.image(100, 100, 'img1')
    dude.body.collideWorldBounds=true;

    cursors=this.input.keyboard.createCursorKeys()
}

function update(){
    dude.setVelocityX(0)

    if(cursors.up.isDown){
        dude.setVelocity(0, -200)
    }

    if(cursors.right.isDown){
        dude.setVelocity(200, 0)
    }

    if(cursors.left.isDown){
        dude.setVelocity(-200, 0)
    }

    
}