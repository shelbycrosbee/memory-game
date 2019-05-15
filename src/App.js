import React from "react";
import "./App.css";
import Card from "./Card";
import axios from "axios";
//more you can do with this:
// add in dropdowns where the user could choose the character
//display a loading message
//let the player choose the number of tiles
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOneFlipped: "",
      clickCounter: 0,
      cardTwoFlipped: "",
      upCardsCount: 0,
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
    axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: {
        apikey: "c56887ba881836aef8c0b1dfef37eecf",
        orderBy: "-modified",
        limit: 10,

      }
    })
      .then((response) => {
        // handle success
        console.log(response.data);
        let characters = response.data.data.results.map((c, i) => {
          return {
            id: i,
            name: c.name,
            url: `${c.thumbnail.path}.${c.thumbnail.extension}`
          }
        })
        let idCounter = 10
        let repeatCardListArr = characters.map((card) => {
          let newCard = {
            ...card,
            id: idCounter++
          }
          return newCard
        })
    
        var fullCardList = characters.slice().concat(repeatCardListArr)
    
        let shuffledCards = this.shuffleArray(fullCardList);
    
        this.setState({
          cards: shuffledCards,
        })
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
   
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
          upCardsCount: this.state.upCardsCount + 2,
        })
      } else {
        let newCards = this.state.cards.map((card) => {
          if (card.name === this.state.cardOneFlipped || card.name === this.state.cardTwoFlipped) {
            return {
              ...card,
              flip: false
            }
          }
          else {
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


  componentDidUpdate() {
    if (this.state.upCardsCount === this.state.cards.length) {
      alert('You Won!');
      this.setState({
        upCardsCount: 0,
      })
    }
  }

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // console.log(arr)
    return arr;

  }

  handleShuffle(e, cards) {
    let shuffledCards = this.shuffleArray(cards);
    console.log(shuffledCards)
    return shuffledCards
  }

  handleRestart = (e) => {

    let restartCards = this.state.cards.map((card) => {
      return {
        ...card,
        flip: false,
      }
    })
    let shuffleCards = this.handleShuffle(e, restartCards)
    this.setState({
      cards: shuffleCards,
      upCardsCount: 0
    })

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
        <button className="button" onClick={e => this.handleRestart(e)}
        >Restart</button>
        {/* <button className="button" onClick={this.handleShuffle.bind(this)}>Shuffle</button> */}
      </div>
      //try to make restart and shuffle one button
    );
  }
}

export default App;
