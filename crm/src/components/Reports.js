import React, { Component } from "react";

export default class Reports extends Component {
  state = {
    reports: [{ name: "Отчет 1", review: "", result: "" }],
  };

  render() {
    return (
      <div>
        <h1>Reports</h1>
        <h2>Add report</h2>
        {reports.map((report) => (
          <Report report={report} />
        ))}
      </div>
    );
  }
}
