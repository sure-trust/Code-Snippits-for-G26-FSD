import React from 'react'
import ChildC from './ChildC'

const ChildB = ({ userDetails, handleChange }) => {

  return (
    <div>
                <h3>
    
                    ChildB 
                </h3>
                <ChildC userDetails={userDetails} handleChange={handleChange} />
    
            </div>
  )
}

export default ChildB