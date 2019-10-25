import {SVG_NS, KEYS} from '../settings'
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'
import Ball2 from './Ball2';


export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameOn = true;

    this.gameElement = document.getElementById(this.element)
    
    //create a new instance of board. height and weight passed through fron Game object
    this.board = new Board(this.width, this.height)
    
      this.paddleWidth = 8
      this.paddleHeight = 56
      this.boardGap = 10

    this.ball = new Ball(8, this.width, this.height)
    this.ball2 = new Ball2(8, this.width, this.height)

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.a,
      KEYS.z
    )

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - this.boardGap - this.paddleWidth),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down
    )

    this.score1 = new Score(this.width / 2 - 50, 30, 30)
    this.score2 = new Score(this.width / 2 + 25, 30, 30)


    document.addEventListener("keydown", event => {
    switch(event.key) {
      case KEYS.spaceBar:
      document.getElementById('start').play();
      this.gameOn = !this.gameOn
      this.player1.speed = 10
      this.player2.speed = 10
      break
      }
    }) 

  }

  render() {

    if(this.gameOn){

      this.player1.speed = 0
      this.player2.speed = 0
      return
    }

    let svg = document.createElementNS(SVG_NS, 'svg')
    this.gameElement.innerHTML = ''
   
    svg.setAttributeNS(null, 'width', this.width)
    svg.setAttributeNS(null, 'height', this.height)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`) 
    this.gameElement.appendChild(svg)

    this.board.render(svg)
    this.player1.render(svg)
    this.player2.render(svg)
    this.ball.render(svg, this.player1, this.player2)
    this.ball2.render(svg, this.player1, this.player2)
    this.score1.render(svg, this.player1.score)
    this.score2.render(svg, this.player2.score)

    if(this.player1.score >= 10){
      start.pause()
      gameOver.innerText = "Player 1 wins";
      document.getElementById('over').play();
      play.loop = false;
      
      return;
    }


    if(this.player2.score >= 10){
    start.pause()
    gameOver.innerText = "Player 2 wins";
    document.getElementById('over').play();
    play.loop = false;
    
    return;
    }
    

  }

}
