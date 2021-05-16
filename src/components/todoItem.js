import React from 'react'
import {useDispatch} from 'react-redux';
import {deleteItem} from '../features/todoSlice'

const TodoItem = ({name,done,id}) => {
    const dispatch = useDispatch() 
    const onDeleteItem =() =>{
        dispatch(deleteItem(
            id
        ))
    }
    return (
        <div className="todoItem">
            {name}
            <button  onClick={onDeleteItem} > Delete</button>
        </div>
    )
}

export default TodoItem
