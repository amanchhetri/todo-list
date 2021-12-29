import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, deleteAllTask, taskCompleted } from '../actions';

function Todo() {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todoReducer.list);
    const completedTasks = useSelector((state) => state.todoReducer.completedTasks);
    const [taskInput, setTaskInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskInput.length) dispatch(addTask(taskInput));
        setTaskInput('')
    }

    return (
        <div>
            <div className='g-row'>
                <span className="header__title">
                    TODO LIST 
                </span>
                <span className="header__title2">
                    by Kenny
                </span>
                <div className='g-col'>
                    <form className="task-form" onSubmit={handleSubmit}>
                        <input type="text" className="task-form__input" placeholder='What needs to be done?' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                    </form>
                    <div className='task-list'>
                        {tasks.map((el, i) => {
                            if(completedTasks.find(elem => elem.id === el.id)) {
                                return (
                                    <div className='task-item task-item--completed' key={i}>
                                        <div className="cell">
                                            <button className="btn btn--icon task-item__button task-item__button active" type="button" onClick={() => dispatch(taskCompleted(el))}>
                                                <span className="material-icons">
                                                    done
                                                </span>
                                            </button>
                                        </div>
                                        <div className="cell">
                                            <div className="task-item__title">
                                            {el.data}
                                            </div>
                                        </div>
                                        {/* <h3>{el.data}</h3> */}
                                        <div className="cell">
                                            {/* <button className="btn btn--icon task-item__button" type="button">
                                                <span className="material-icons">
                                                    mode_edit
                                                </span>
                                            </button> */}
                                            <button className="btn btn--icon task-item__button" type="button" onClick={() => dispatch(removeTask(el.id))}>
                                                <span className="material-icons">
                                                    delete
                                                </span>
                                            </button>
                                        </div>
                                        {/* <button onClick={() => dispatch(removeTask(el.id))}>Delete</button> */}
                                    </div>
                                )
                            }
                            else return (
                                <div className='task-item' key={i}>
                                    <div className="cell">
                                        <button className="btn btn--icon task-item__button" type="button" onClick={() => dispatch(taskCompleted(el))}>
                                            <span className="material-icons">
                                                done
                                            </span>
                                        </button>
                                    </div>
                                    <div className="cell">
                                        <div className="task-item__title">
                                        {el.data}
                                        </div>
                                    </div>
                                    {/* <h3>{el.data}</h3> */}
                                    <div className="cell">
                                        {/* <button className="btn btn--icon task-item__button" type="button">
                                            <span className="material-icons">
                                                mode_edit
                                            </span>
                                        </button> */}
                                        <button className="btn btn--icon task-item__button" type="button" onClick={() => dispatch(removeTask(el.id))}>
                                            <span className="material-icons">
                                                delete
                                            </span>
                                        </button>
                                    </div>
                                    {/* <button onClick={() => dispatch(removeTask(el.id))}>Delete</button> */}
                                </div>
                            )
                        }
                        )}
                    </div>
                    <button className='clear-list mt-5' onClick={() => dispatch(deleteAllTask())}>Clear the list</button>
                </div>
            </div>
        </div>
    )
}

export default Todo
