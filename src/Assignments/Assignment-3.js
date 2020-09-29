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
      emp: employee
      // Name: "",
      // Job: ""
    };

    this.OnNameChange = this.OnNameChange.bind(this);
    this.OnJobChange = this.OnJobChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
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
  OnSubmit = (event) => {
    event.preventDefault();
    var row = {
      Id: 8,
      Name: this.state.Name,
      Job: this.state.Job
    };

    var newList = [...this.state.emp];

    //var newList=employee.map(e=>e)
    newList.push(row);
    this.setState({
      emp: newList
    });
  };

  render() {
    const emplist = this.state.emp.map((emp) => (
      <table className="table">
        <tr>
          <td style={{ width: "160px" }}>{emp.Name}</td>

          <td style={{ textAlign: "left" }}>{emp.Job}</td>
        </tr>
      </table>
    ));

    return (
      <form onSubmit={this.OnSubmit}>
        <div>
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Job</th>
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
