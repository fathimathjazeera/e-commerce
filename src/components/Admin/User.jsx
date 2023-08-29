
import React, { useContext } from 'react'
import { myContext } from '../context/Context'
import Table from 'react-bootstrap/Table';
const User = () => {
    const {state}=useContext(myContext)
  return (
    <div>
           {state.map((val)=>{
            return <Table striped bordered hover>
    
            <tbody>
                <tr>
                <th>email</th>
                <th>name</th>
                </tr>
              
              <tr>
                <td>{val.email}</td>
                <td>{val.username}</td>
              </tr>
            </tbody>
          </Table>
        })}
    </div>
  )
}

export default User