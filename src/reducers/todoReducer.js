const initialState = {
    list: [],
    completedTasks: []
}

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const {id, data} = action.payload;

            return {
                ...state, 
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case 'TASK_COMPLETED':
            const {id: taskId, data: taskData} = action.payload; 

            if(state.completedTasks.find(el => el.id === taskId)) {
                const removeIndex = state.completedTasks.map(item => item.id).indexOf(taskId);
                state.completedTasks.splice(removeIndex, 1);
            } else {
                state.completedTasks.push({id: taskId, data: taskData});                
            }
        case 'REMOVE_TASK':
            const {tId} = action.payload;
            const list = state.list.filter(el => el.id !== tId);

            return {
                ...state,
                list: list
            }
        case 'DELETE_ALL_TASK':
            return {
                ...state,
                list: []
            }
        default: return state;
    }
}

export default todoReducer;