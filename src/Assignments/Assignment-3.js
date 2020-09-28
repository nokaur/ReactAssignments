import React, { Component } from "react";

class AddEmployee extends Component {
  constructor() {
    super();
    this.state={
      Id="",
      Name="",
      Job=""
    }
  }

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
  const emplist = employee.map((emp) => (
    <table className="table">
      <tr>
        <td style={{ width: "160px" }}>{emp.Name}</td>

        <td style={{ textAlign: "left" }}>{emp.Job}</td>
      </tr>
    </table>
  ));

  render() {
    return (
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
          <input type="text" style={{ width: "300px" }} />
          <br />
          <br />
          <label>Job</label>
          <br />
          <input type="text" style={{ width: "300px" }} />
          <br />
          <br />
          <input type="submit" value="Submit" className="button" />
        </div>
      </div>
    );
  }
}

export default AddEmployee;
