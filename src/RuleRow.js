import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description, rolling} = this.props;
    const wasScored = score === undefined;
    return (
      <tr 
        className={`RuleRow RuleRow-${wasScored ? 'active' : 'disabled'}`} 
        onClick={wasScored && !rolling ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{wasScored ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;