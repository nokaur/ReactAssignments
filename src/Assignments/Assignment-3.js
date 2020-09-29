import React, { Component } from "react";

var employee = [
  {
    Id: 1,
    Name: "Charlie",
    Job: "Janitor"
  },
  {
    Id: 2,
    Name: "Mac",
    Job: "Bouncer"
  },
  {
    Id: 3,
    Name: "Dee",
    Job: "Aspiring Actress"
  },
  {
    Id: 4,
    Name: "Denise",
    Job: "Bartender"
  }
];

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: employee,
      count: 4
      // Name: "",
      // Job: ""
    };

    this.OnNameChange = this.OnNameChange.bind(this);
    this.OnJobChange = this.OnJobChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OnEmployeeDelete = this.OnEmployeeDelete.bind(this);
  }

  OnNameChange = (event) => {
    this.setState({
      Name: event.target.value
    });
  };
  OnJobChange = (event) => {
    this.setState({
      Job: event.target.value
    });
  };
  OnEmployeeDelete = (i) => {
    let list = [...this.state.emp];
    list.splice(i, 1);
    this.setState({
      emp: list
    });
  };
  OnSubmit = (event) => {
    var row = {
      Id: this.state.count + 1,
      Name: this.state.Name,
      Job: this.state.Job
    };

    var newList = [...this.state.emp];

    //var newList=employee.map(e=>e)
    newList.push(row);
    this.setState({
      emp: newList,
      count: this.state.count + 1
    });
    event.preventDefault();
  };

  render() {
    const emplist = this.state.emp.map((emp, i) => (
      <table className="table">
        <tr key={i}>
          <td style={{ width: "400px" }}>{emp.Name}</td>

          <td style={({ textAlign: "left" }, { width: "500px" })}>{emp.Job}</td>
          <td style={{ textAlign: "right" }}>
            <button
              onClick={(i) => this.OnEmployeeDelete(i)}
              className="button"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    ));

    return (
      <form onSubmit={this.OnSubmit}>
        <div>
          <table className="table">
            <tr>
              <th>Name</th>
              <th style={{ width: "100px" }}></th>
              <th>Job</th>
              <th style={{ width: "183px" }}></th>
            </tr>
          </table>
          <table>
            <tr>
              <td>{emplist}</td>
            </tr>
          </table>
          <br />
          <div style={{ textAlign: "left" }}>
            <label>Name</label>
            <br />
            <input
              type="text"
              style={{ width: "300px" }}
              onChange={this.OnNameChange}
              value={this.state.Name}
            />
            <br />
            <br />
            <label>Job</label>
            <br />
            <input
              type="text"
              style={{ width: "300px" }}
              onChange={this.OnJobChange}
              Value={this.state.Job}
            />
            <br />
            <br />
            <input type="submit" value="Submit" className="button" />
          </div>
        </div>
      </form>
    );
  }
}

export default AddEmployee;
