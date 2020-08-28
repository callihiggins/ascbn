import React from "react";
import PropTypes from "prop-types";
import data from "./data/usa-map-dimensions";
import USAState from "./components/USAState";

class USAMap extends React.Component {

  clickHandler = (stateAbbreviation) => {
    this.props.onClick(stateAbbreviation);
  };

  fillStateColor = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].fill) {
      return this.props.customize[state].fill;
    }

    return this.props.defaultFill;
  };

  stateClickHandler = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].clickHandler) {
      return this.props.customize[state].clickHandler
    }
    return this.clickHandler;
  }

  setOrganizations = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].organizations) {
      return this.props.customize[state].organizations;
    }
  };

  buildPaths = (currentToolTipHtml) => {
    let paths = [];
    let dataStates = data();
    for (let stateKey in dataStates) {
      const path =
        <USAState
          key={stateKey}
          stateName={dataStates[stateKey].name}
          dimensions={dataStates[stateKey]["dimensions"]}
          state={stateKey}
          fill={this.fillStateColor(stateKey)}
          onClickState={this.stateClickHandler(stateKey)}
          organizations={this.setOrganizations(stateKey)} 
        />
      paths.push(path);
    };
    return paths;
  };

  render() {
    if (this.props.currentToolTipHtml) debugger;
    return (
      <svg className="us-state-map" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 959 593">
        <title>{this.props.title}</title>
        <g className="outlines">
          {this.buildPaths(this.props.currentToolTipHtml)}
        </g>
      </svg>
    );
  }
}

USAMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  defaultFill: PropTypes.string,
  customize: PropTypes.object
};

USAMap.defaultProps = {
  onClick: () => {},
  width: 959,
  height: 593,
  defaultFill: "#D3D3D3",
  title: "United States",
  customize: {}
};

export default USAMap;
