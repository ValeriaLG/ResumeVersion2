import React, { Component } from 'react';
import { Line, HorizontalBar, Pie } from 'react-chartjs-2';
import { gpaData, classTypeData, gradeData } from '../utils/data';
import { classTypeOptions, gpaOptions, gradeOptions } from '../utils/options';
import { sorter } from '../utils/functions';
import "../styles/graphs.css";


class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSortGrades: false
    }
  }

  sort = (gradeData) => {
    const results = sorter(gradeData.labels, gradeData.datasets[0].data);
    const newGradeData = {...gradeData};
    newGradeData["labels"] = results[0];
    newGradeData["datasets"][0]["data"] = results[1];
    return newGradeData;
  }


  render() {
    const { isSortGrades } = this.state;

    return (
      <div className="homepage-container">
        <div className="graph-distribution">
          <div className="banner">
            <h1 class="mainName">Grade Distributions</h1>
          </div>
          <div className="listing graphs" >
            <h3>Course Distribution Among Majors</h3>
            <Pie data={ classTypeData } options={ classTypeOptions } id={ "classTypes" } height={300} width={500} />
          </div>
          <br/>
          <div className="listing graphs" >
            <h3>GPA Over Time</h3>
            <Line data={ gpaData } id={ "gpaTime" } height={300} width={500} options={ gpaOptions } />
          </div>
          <div className="listing graphs" >
            <h3 className="grade-dist-time">Grade Range Distribution Overall</h3>
            <div className="sort-button" onClick={() => this.setState({isSortGrades: !isSortGrades})}>Sort</div>
            <HorizontalBar data={ (!isSortGrades) ? gradeData : this.sort(gradeData) } id={ "gradeOverall" } height={300} width={500} options={ gradeOptions } />
          </div>
        </div>
      </div>
    );
  }
}


export default Graphs;
