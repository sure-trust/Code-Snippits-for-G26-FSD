import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {

    const { userDetails, handleChange } = props
    return (
        <div>
            <h2>

                ChildA 
            </h2>
            <ChildB userDetails={userDetails}  handleChange={handleChange} />

        </div>
    )
}

export default ChildA