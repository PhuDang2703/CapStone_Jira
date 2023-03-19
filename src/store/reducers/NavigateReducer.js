


const navigateState = {
    navigate:{}
};



export const NavigateReducer = (state = navigateState,action) => {
    switch(action.type) {
        case 'ADD_NAVIGATE':{
            state.navigate = action.navigate;
            console.log(state.navigate);
            return {...state}
        }
        default: return {...state}
    }
}