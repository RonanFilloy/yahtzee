import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    dieValues: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 1
  };
  constructor(props) {
    super(props);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  toggleLocked(evt) {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {dieValues, locked, val, disabled, rolling} = this.props;
    const dieNum = dieValues[val - 1];
    let classes = `Die fas fa-dice-${dieNum} fa-5x `
    if(locked) classes += 'Die-locked ';
    if(rolling) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        onClick={this.toggleLocked}
        disabled={disabled}
      />
    );
  }
}

export default Die;
