import React, { use, useState } from 'react'

const ChildD = ({ userDetails, handleChange }) => {

  // {
  //   name: 'Kuldeep Ahlawat',
  //   work: 'Engineering'
  // }


  const [updatedUserState, setUpdatedUserSate] = useState({ ...userDetails })



  return (
    <div>
      <h5>

        ChildD
      </h5>
      <p>Name {userDetails.name} Work:{userDetails.work}</p>
      <>
        <input value={updatedUserState.name} placeholder='name' onChange={(e)=>{
          setUpdatedUserSate({...updatedUserState,name:e.target.value})

        }} />

        <input value={updatedUserState.work} placeholder='work' onChange={(e)=>{
          setUpdatedUserSate({...updatedUserState,work:e.target.value})

        }}/>
      </>
      <button onClick={() => {
        handleChange(updatedUserState)
      }}>Change </button>


    </div>
  )
}

export default ChildD