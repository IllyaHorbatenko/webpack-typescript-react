export default function reducer(state = [], action) {
    switch (action.type) {
        case 'SET_STATES':
            return action.payload;
        default:
            return state;
    }
}