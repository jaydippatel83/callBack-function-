import React from 'react';

class MultiButton extends React.Component {
    render() {
        const { count, multiply } = this.props;
        return (
            <button className="btn btn-block btn-warning" onClick={() => multiply(count * count)}>* Multiply</button>
        )
    }
};

export default MultiButton;
