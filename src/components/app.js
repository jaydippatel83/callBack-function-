import React, { Component } from 'react';
import Counter from './counter';
import PlusButton from './ addition';
import MinusButton from './subtraction';
import MultiButton from './ multiply';

class App extends Component {
  state = { count: 1 };
  render() {

    return (
      <div className="container">
        <div className="row">

          <div className="col-10 p-4 border border-secondary">
            <h1 className='bg-success text-white'>Passing value using Callback function</h1>
            <Counter count={this.state.count} />
            <div className="row d-flex justify-content-around pt-4">
              <div className="col-8 ml-auto mr-auto">
                <div className="row">
                  <div className="col-4">
                    <PlusButton count={this.state.count} increaseCount={(count) => this.setState({ count })} />
                  </div>
                  <div className="col-4">
                    <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({ count })} />
                  </div>
                  <div className="col-4">
                    <MultiButton count={this.state.count} multiply={(count) => this.setState({ count })} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
