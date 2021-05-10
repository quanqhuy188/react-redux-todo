import React from 'react'


const todoItem = ({name,done,id}) => {
    return (
        <div className="todoItem">
            {name}
        </div>
    )
}

export default todoItem
