import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { addToDo, removeToDo, deleteToDo } from '../actions/index';
import './todo.css'

const Todo = () => {
    const [set, getData] = useState();
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list);
    console.log(list);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption> Mack's list</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder=" Add new Items" value={set} onChange={(e) => getData(e.target.value)} />
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addToDo(set), getData(''))}>+</i>
                    </div>

                    <div className="showItems">
                        {
                            list.map((e) => {
                                return (
                                    <div key={e.id}>
                                        <h3>{e.data}</h3>
                                        <i className="fa fa-plus add-btn" onClick={() => dispatch(deleteToDo(e.id))}>-</i>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        <button onClick={() => dispatch(removeToDo())}>CLear ALL</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;