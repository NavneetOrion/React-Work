import React, { useReducer } from "react";

const AgeChecker = () => {
  const reducer = (state, action) => {
    console.log(action.payload)
    switch (action.type) {
      case "Incre":
        state.age = state.age + action.payload.age;
        if (state.age < 18) {
          return {
            age: state.age,
            type: "Child",
          };
        } else if (state.age >= 18) {
          return {
            age: state.age,
            type: "Adult",
          };
        } else if (state.age < 1) {
          alert("Please enter valid age!!");
        }
        else
        {
          return
        }
      case "Decre":
        state.age = state.age - action.payload.age;
        if (state.age >= 18) {
          return {
            age: state.age,
            type: "Adult",
          };
        } else if (state.age < 18) {
          return {
            age: state.age,
            type: "Child",
          };
        } else if (state.age < 1) {
          alert("Please enter valid age!!");
        }
        else
        {
          return
        }
      default:
        return state;
    }
  };
  const [Age, dispatch] = useReducer(reducer, { age: 0 });
  
  return (
    <div>
      <h1>
        Age Checker:- {Age.age} ==== {Age.type}
      </h1>
      <br />
      <button onClick={() => dispatch({ type: "Incre", payload: { age: 1 } })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decre", payload: { age: 1} })}>
        Decrement
      </button>
    </div>
  );
};

export default AgeChecker;
