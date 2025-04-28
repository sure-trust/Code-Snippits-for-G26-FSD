import React from 'react'
import ChildD from './ChildD'

const ChildC = ({ userDetails,handleChange }) => {
  return (
    <div>
            <h4>

                ChildC
            </h4>
            <ChildD userDetails={userDetails} handleChange={handleChange} />

        </div>
  )
}

export default ChildC