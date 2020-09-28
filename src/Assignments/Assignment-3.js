import React, { Component } from "react";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Name: "",
      Job: ""
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
    let newEmp = {
      // Id: "5",
      Name: this.state.Name,
      Job: this.state.Job
    };
    this.setState({
      // Name: [...this.state.Name, name],
      // Job: [...this.state.Job, job]
      employee: [...this.state.employee, newEmp]
    });
    alert(`${this.state}`);
    event.preventDefault();
  };

  // const employee = [
  //   {
  //     Id: 1,
  //     Name: "Charlie",
  //     Job: "Janitor"
  //   },
  //   {
  //     Id: 2,
  //     Name: "Mac",
  //     Job: "Bouncer"
  //   },
  //   {
  //     Id: 3,
  //     Name: "Dee",
  //     Job: "Aspiring Actress"
  //   },
  //   {
  //     Id: 4,
  //     Name: "Denise",
  //     Job: "Bartender"
  //   }
  // ];
  // const emplist = employee.map((emp) => (
  //   <table className="table">
  //     <tr>
  //       <td style={{ width: "160px" }}>{emp.Name}</td>

  //       <td style={{ textAlign: "left" }}>{emp.Job}</td>
  //     </tr>
  //   </table>
  // ));

  render() {
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
    const emplist = employee.map((emp) => (
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
            />
            <br />
            <br />
            <label>Job</label>
            <br />
            <input
              type="text"
              style={{ width: "300px" }}
              onChange={this.OnJobChange}
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
