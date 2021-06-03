import React, { useState, useEffect } from "react";
import "../App.css"

const DataTable = () => {
  const allData = [
    {
      Id: 1,
      Name: "Afajal",
      Email: "Afajal@gmail.com",
      Role: "admin",
      Status: "active",
    },
    {
      Id: 2,
      Name: "Ramiz",
      Email: "Ramiz@gmail.com",
      Role: "admin",
      Status: "non-active",
    },
    {
      Id: 3,
      Name: "Xavier",
      Email: "Xavier@gmail.com",
      Role: "manager",
      Status: "active",
    },
    {
      Id: 4,
      Name: "Dhruv",
      Email: "Dhruv@gmail.com",
      Role: "admin",
      Status: "active",
    },
    {
      Id: 5,
      Name: "Sayali",
      Email: "Sayali@gmail.com",
      Role: "manager",
      Status: "non-active",
    },
    {
      Id: 6,
      Name: "Pooja",
      Email: "Pooja@gmail.com",
      Role: "employee",
      Status: "active",
    },
    {
      Id: 7,
      Name: "Rehaan",
      Email: "Rehaan@gmail.com",
      Role: "employee",
      Status: "active",
    },
    {
      Id: 8,
      Name: "Valee",
      Email: "Valee@gmail.com",
      Role: "admin",
      Status: "active",
    },
    {
      Id: 9,
      Name: "Mohd",
      Email: "Mohd@gmail.com",
      Role: "employee",
      Status: "non-active",
    },
    {
      Id: 10,
      Name: "Suraj",
      Email: "Suraj@gmail.com",
      Role: "manager",
      Status: "active",
    },
  ];
  const [filteredData, setFilteredData] = useState([{}]);
  const [uniqueRoles, setUniqueRoles] = useState([])
  const [uniqueStatus, setUniqueStatus] = useState([])
  const [role, setRole] = useState("all")
  const [status, setStatus] = useState("all")
  useEffect(() => {
    setFilteredData(allData);
    let roles = []
    for(var r in allData){
        roles.push(allData[r].Role)
    }
    let status = []
    for(var r in allData){
        status.push(allData[r].Status)
    }
    setUniqueRoles([...new Set(roles)])
    setUniqueStatus([...new Set(status)])
  }, []);

 
  const OnSearch = e => {
    if(e.target.name === "Role"){
        setRole(e.target.value)
    }else{
        setStatus(e.target.value)
    }
    
  }

  useEffect(() => {
    let data = allData.filter(data => {
        return (role === "all" ? true : data?.Role?.toLowerCase() === role) && 
        (status === "all" ? true : data?.Status?.toLowerCase() === status)
    })
    setFilteredData(data)
  },[role,status])
 
  return (
    <div>
      <h1>Data Table</h1>
      <div style={{ display: "inline-block", marginLeft: "20px" }}>
        <select name="Role" onChange={OnSearch} placeholder="Search by Role" style={{height: "30px", width: "200px", marginLeft: "20px", marginBottom:"50px"}}>
            <option value="all">All</option>
            {
                uniqueRoles.map((d) => <option value={d}>{d}</option>)
            }
        </select>
        <select name="Status" onChange={OnSearch} placeholder="Search by Status" style={{height: "30px", width: "200px", marginLeft: "20px", marginBottom:"50px"}}> 
            <option value="all">All</option>
            {
                uniqueStatus.map((d) => <option value={d}>{d}</option>)
            }
        </select>
            </div>
      <table id="datatable">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.map((d) => 
            <tr key={d.Id}>
              <td>{d.Id}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
              <td>{d.Role}</td>
              <td>{d.Status}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
