import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { increment, decrement } from "../redux/action";
import { Dispatch } from "redux";
import { CounterActionTypes } from "../redux/actionTypes";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

class Counter extends Component<CounterProps> {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterActionTypes>) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
