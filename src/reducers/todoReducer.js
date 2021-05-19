const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
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

        case "DELETE_TODO":
            const newList = state.list.filter((e) => e.id !== action.id);
            console.log("wdccd", newList);

            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO":
            return {
                ...state,
                list: []
            }

        default: return state;

    }
}

export default todoReducer;