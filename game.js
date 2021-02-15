class game {
    constructor(){

    }

    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value", function(data){
        gameState = data.val()
    })
    

}
    function update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    function start(){
        if (gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
