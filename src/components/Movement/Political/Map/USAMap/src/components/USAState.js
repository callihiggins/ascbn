import React from "react";

const USAState = (props) => {
  return (
    <>
      <path
        d={props.dimensions}
        fill={props.fill}
        data-tip={props.state}
        data-name={props.state}
        data-for={props.state}
        data-event='click'
        data-event-off="mouseleave"
        className={`${props.state} state`}
        onClick={props.onClickState}
      >
        <title>{props.stateName}</title>
      </path>
    </>
  );
}
export default USAState;
