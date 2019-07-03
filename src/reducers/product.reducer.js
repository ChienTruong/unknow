import Actions from '../constants/actions';

export default function(previousState = {}, action) {
    switch (action.type) {
        case Actions.PRODUCTS:
            return Object.assign({}, previousState, action.payload);
        default: return previousState;
    }
}