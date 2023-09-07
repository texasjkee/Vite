import { connect } from "react-redux";
import * as actions from "./action";
import { Component } from "react";
// import { bindActionCreators } from "redux";

// const Counter = ({ counter, inc, dec, rnd }) => {
//   return (
//     <div>
//       <>
//         <h1>{counter}</h1>
//         <button name="INC" onClick={inc}> INC </button>
//         <button name="DEC" onClick={dec}> DEC </button>
//         <button name="RND" onClick={rnd}> RND </button>
//       </>
//     </div>
//   );
// };

class CounterConnect extends Component {
  render(){
    const { counter, inc, dec, rnd } = this.props;
    return (
    <div>
        <h1>{counter}</h1>
        <button name="INC" onClick={inc}> INC </button>
        <button name="DEC" onClick={dec}> DEC </button>
        <button name="RND" onClick={rnd}> RND </button>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.value
  };
};

// const mapDispatchToProps = (dispatch) => {
//   //TODO: WTF????
//   // const { inc, dec, rnd } = bindActionCreators(action, dispatch);
//   return bindActionCreators(action, dispatch);
// };

export default connect(mapStateToProps, actions)(CounterConnect);
