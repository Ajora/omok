import React from 'react';

class Grid extends React.Component {
  handleClick() {
    let turnCount = this.props.playerTurnCount;
    turnCount += 1;
    this.props.onClickHandler(this.props.coordinate, turnCount);
  }
  render() {
    return (
      <div className="grid-space">
        <div
          className={this.props.omokPiece}
          id={this.props.coordinate}
          onClick={() => this.handleClick()}
        />
        <div className="cross" />
      </div>
    )
  }
}

Grid.propTypes = {
  onClickHandler: React.PropTypes.func.isRequired,
  playerTurnCount: React.PropTypes.number.isRequired,
  coordinate: React.PropTypes.arrayOf(React.PropTypes.number),
  omokPiece: React.PropTypes.string.isRequired,
};
module.exports = Grid;
