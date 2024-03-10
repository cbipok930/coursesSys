// import React from "react";
import "./ProgressBar.css"

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  // const containerStyles = {
  //   height: 20,
  //   width: '100%',
  //   backgroundColor: "#e0e0de",
  //   borderRadius: 50,
  //   margin: 50
  // }

  // const fillerStyles = {
  //   height: '100%',
  //   width: `${completed}%`,
  //   backgroundColor: bgcolor,
  //   borderRadius: 'inherit',
  //   textAlign: 'right'
  // }

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold'
  // }


  const fillerId = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="pb_container">
      <div style={fillerId}>
        <span className="pb_label">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;