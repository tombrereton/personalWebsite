import React from 'react';
import './style.css';


class BurgerMenu extends React.Component {
  changeColor() {
    var b1 = document.getElementsByClassName('burgerMenuContainer')[0]
    b1.classList.toggle('change')
  }

  render() {
    return (
      <div className="burgerMenuContainer" onClick={this.changeColor}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}

export default BurgerMenu;
