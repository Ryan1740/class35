class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1')
        title.html("CarRacingGame")
        title.position(130,0)
        var input = createInput("name")
        input.position(130,160)
        var button = createButton("play")
        button.position(250,200)
        var name = input.value()
        playerCount+=1
        player.update(name)
        player.update(playerCount)
    }
}