export class PlayerController {

  playerList = [];

  createPlayer(name) {
    const player = {
      name: name,
      //Additionam properties other than name
    }
    this.playerList.push(player);
    return player;
  }

  getPlayer(name) {
    const Player = this.playerList.find(p => p.name==name)
    if(Player){
      return player;
    }
    else{
      return error="No such player";
    }
  }

}