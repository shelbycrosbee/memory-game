import React from "react";
import "./App.css";
import Card from "./Card";
import { Z_FILTERED } from "zlib";
//create a reusable component that is a box
//create a grid of images/objects add the box component to the 'card'
//randomize the order of the boxes
//be able to flip the boxes onClick
//store the selected box in game
//add another onClick 
//store the second selection
//compare onClick1 to onClick2 if equal setState of grid with those clicks image-up
//if != reflip go back to previous state
//continue until all pairs are found
//create a reset button that returns all of the 'cards' to face down and randomized. 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOneFlipped: "",
      clickCounter: 0,
      cardTwoFlipped: "",
      cards: [
        {
          id: 0,
          name: "blackPanther",
          url: "./img/black-panther.jpg",
          flip: false
        },
        {
          id: 1,
          name: "blackWidow",
          url: "./img/black-widow.jpg",
          flip: false
        },
        {
          id: 2,
          name: "captainAmerica",
          url: "./img/captain-america.jpg",
          flip: false
        },
        {
          id: 3,
          name: "captainMarvel",
          url: "./img/captain-marvel.jpg",
          flip: false
        },
        {
          id: 4,
          name: "hulk",
          url: "./img/hulk.jpg",
          flip: false
        },
        {
          id: 5,
          name: "ironMan",
          url: "./img/iron-man.jpg",
          flip: false
        },
        {
          id: 6,
          name: "spiderMan",
          url: "./img/spider-man.jpg",
          flip: false
        },
        {
          id: 7,
          name: "thor",
          url: "./img/thor.jpg",
          flip: false
        },
        {
          id: 8,
          name: "xmenRogue",
          url: "./img/xmen-rogue.jpg",
          flip: false
        },
        {
          id: 9,
          name: "xmenWolverine",
          url: "./img/xmen-wolverine.jpg",
          flip: false
        }
      ]
    }
  }

  componentDidMount() {
    let idCounter = 10
    let repeatCardListArr = this.state.cards.map((card) => {
      let newCard = {
        ...card,
        id: idCounter++
      }
      return newCard
    })

    var fullCardList = this.state.cards.slice().concat(repeatCardListArr)

    this.setState({
      cards: fullCardList,
    })
  }


  handleClick = (e, cardId) => {
    if (this.state.clickCounter === 0) {
      let newCards = this.state.cards.map((card) => {
        if (card.id === cardId) {
          this.setState({
            cardOneFlipped: card.name,
            clickCounter: this.state.clickCounter + 1,
          })
          return {
            ...card,
            flip: true,
          };
        } else {
          return {
            ...card
          }
        }
      });
      this.setState({
        cards: newCards
      })
    }
    if (this.state.clickCounter === 1) {
      let newCards = this.state.cards.map((card) => {
        if (card.id === cardId) {
          this.setState({
            cardTwoFlipped: card.name,
            clickCounter: this.state.clickCounter + 1,
          })
          return {
            ...card,
            flip: true,
          };
        } else {
          return {
            ...card
          }
        }
      });
      this.setState({
        cards: newCards
      })
    }
    if (this.state.clickCounter === 2) {
      if (this.state.cardOneFlipped === this.state.cardTwoFlipped) {
        this.setState({
          cardOneFlipped: "",
          cardTwoFlipped: "",
          clickCounter: 0,
        })
      } else {
        let newCards = this.state.cards.map((card) => {
          if (card.name === this.state.cardOneFlipped || card.name === this.state.cardTwoFlipped) {
            return {
              ...card,
              flip: false
            }
          }
          else{
            return {
              ...card,
            }
          }
        })
        this.setState({
          cards: newCards,
          cardOneFlipped: "",
          cardTwoFlipped: "",
          clickCounter: 0,
        })
      }
    }

  }

  render() {
    let cardList = this.state.cards.map((card) => {
      return <li
        onClick={e => this.handleClick(e, card.id)}
        key={card.id}
        style={{ listStyleType: "none" }}><Card flip={card.flip} imgSrc={card.url} /></li>
    })

    return (
      <div>
        <ul className="gridContainer">{cardList}</ul>
      </div>
    );
  }
}

export default App;
