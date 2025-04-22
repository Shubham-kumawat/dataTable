import React, { useState } from "react";
import "./Users.css"


const UserList = () =>{
    let size = Math.random()*51;

    let Users = [];

    for(let i = 0; i< size; i++){
        Users.push( { name: "Kushagra", age: 22, gender: "Male" })
    }

    return Users;
}

const Users = () => {
 const[users ,setUsers] =useState([])

 const handleRefresh = () =>{
setUsers(UserList());
 }

  return (<>
  <div className="container">
    <div className="upper">
        <input type="text" placeholder="Search" />
        <button onClick={handleRefresh} className="btn">Refresh</button>

        </div>
        <div className="Table">
    <table border={1}>
      <tr >
        <th>S.No.</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      {users.map((user, index) => {
        return <tr key={index}>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
        </tr>;
      })}
     <tfoot><tr>
            <td colSpan={4}>
              <p>Total:{users.length}</p>
            </td>
            </tr>
        </tfoot>
    </table>
    </div>
    </div>
    </>
  );
};

export default Users;