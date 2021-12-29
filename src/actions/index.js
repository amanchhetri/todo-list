export const addTask = (data) => {
    return {
        type: 'ADD_TASK',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const taskCompleted = (el) => {
    return {
        type: 'TASK_COMPLETED',
        payload: {
            id: el.id,
            data: el.data 
        }
    }
}

export const removeTask = (data) => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            tId: data
        }
    }
}

export const deleteAllTask = () => {
    return {
        type: 'DELETE_ALL_TASK'
    }
}