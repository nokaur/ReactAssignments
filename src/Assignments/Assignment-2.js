import React from "react";

function List() {
  const employee = [
    {
      Id: 1,
      Name: "Novel",
      Job: " Associate Consultant"
    },
    {
      Id: 2,
      Name: "Kiran",
      Job: "Govt Employee"
    },
    {
      Id: 3,
      Name: "Sudhir",
      Job: "Programmer"
    }
  ];

  const emplist = employee.map((emp) => (
    <table style={({ textAlign: "left" }, { width: "400px" })}>
      <tr>
        <td>{emp.Name}</td>
        <td>{emp.Job}</td>
      </tr>
    </table>
  ));

  return (
    <div>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </table>
      <table className="table">
        <tr>
          <td>{emplist}</td>
        </tr>
      </table>
    </div>
  );
}

export default List;
