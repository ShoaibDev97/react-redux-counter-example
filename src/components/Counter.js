import React, {Component} from 'react';
import {connect} from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                <button>+</button>
                <br></br>
                <button>-</button>
                <br></br>
                <br></br>
                <span>
                    counter : {this.props.count}</span>
            </div>
        );
    }
}
//connects component with redux store state
const mapStateToProps = state => ({count: state.counterApp.counter})

export default connect(mapStateToProps)(Counter);