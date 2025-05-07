import React from 'react'
import { useParams } from 'react-router';
import { NavLink, Link } from "react-router";

const UsersPhone = () => {
  let params = useParams();
  console.log(params)
  return (
    <div>
      <div className="">
        Userid - {params.userId}
      </div>
      <div className="">
        Number - {params.phonenumber}
      </div>
      <NavLink
        to="/"
      >
        Home
      </NavLink>

    </div>
  )
}

export default UsersPhone