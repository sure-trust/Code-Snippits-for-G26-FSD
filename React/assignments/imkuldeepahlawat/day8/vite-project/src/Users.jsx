import React from 'react'
import { useParams } from 'react-router';

const Users = () => {
    let params = useParams();
  console.log(params)
  return (
    <div>Users {params.userId}</div>
  )
}

export default Users