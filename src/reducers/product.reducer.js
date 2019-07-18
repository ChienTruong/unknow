import Actions from '../constants/actions';

export default function (previousState = {}, action) {
    switch (action.type) {
        case Actions.PRODUCTS:
            return action.payload;
        case Actions.PRODUCTS_CREATE: {
            const data = [...previousState.data, action.payload.data];
            return Object.assign({}, previousState, action.payload, { data });
        }
        case Actions.PRODCUTS_UPDATE: {
            const data = [];
            return Object.assign({}, { data });
        }
        case Actions.PRODUCTS_DETAIL: {
            // todo
            const detail = action.payload;
            return Object.assign({}, previousState, action.payload, { detail });
        }
        case Actions.PRODUCTS_DELETE:
            // todo
            return Object.assign({}, previousState, action.payload);
        default: return previousState;
    }
}