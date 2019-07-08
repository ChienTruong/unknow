import Actions from '../constants/actions';

export default function (previousState = {}, action) {
    switch (action.type) {
        case Actions.PRODUCTS:
            return Object.assign({}, previousState, action.payload);
        case Actions.PRODUCTS_ADD:
            const data = [...previousState.data, action.payload.data];
            return Object.assign({}, previousState, action.payload, { data });
        default: return previousState;
    }
}