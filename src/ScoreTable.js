import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;
    let totalScore = Object.values(scores)
      .filter(score => score !== undefined)
      .reduce((total, current) => total + current, 0);

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow rolling={this.props.rolling} description={ones.description} name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={twos.description} name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={threes.description} name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={fours.description} name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={fives.description} name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={sixes.description} name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow rolling={this.props.rolling} description={threeOfKind.description} name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={fourOfKind.description} name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={fullHouse.description} name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={smallStraight.description} name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={largeStraight.description} name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={yahtzee.description} name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow rolling={this.props.rolling} description={chance.description} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>TOTAL SCORE: {totalScore}</h2>
      </div>
    )
  }
}

export default ScoreTable;