import React from 'react';
import _ from 'lodash';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'played': 0
    };
  }
  handleClick(){
    this.setState({
      played: this.props.playerTurn
    }, () => {
      this.props.changeCoordinateState(this.props.coordinate, this.state.played);
    }
    )
  }
  render() {
    return(
      <div className="grid" onClick={() => this.handleClick()}>
        {this.state.played}
      </div>
    )
  }
}

module.exports = Grid;
