import React from "react";
import "./Card.css";

class Card extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {

    return (
          <div className="card">
            <img src={this.props.imgSrc} className={this.props.flip ? ' smallerImage' : 'smallerImage hidden'} alt="cartoonImage"></img>
          </div>
    );

  }
}

export default Card