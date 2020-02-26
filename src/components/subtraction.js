import React from 'react';

class MinusButton extends React.Component {

  render() {
    const { count, decreaseCount } = this.props;
    return (

      <button className="btn btn-block btn-danger" onClick={() => decreaseCount(count - 1)}>- Decreament</button>

    )
  }
}

export default MinusButton;
