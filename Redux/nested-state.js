const redux = require('redux');
const produce = require('immer').produce

const initialState = {
    name:'Vishwas',
    address:{
        street:'123 main st',
        city:'Boston',
        state:'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload:street 
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street:action.payload
            //     }
            // }  
            // with the help of immer i can access it directly and update that state
            return produce(state,(draft)=> {
                draft.address.street = action.payload;
            })   
            default:
                return state
    }
}

const store = redux.createStore(reducer);
console.log('Initial State',store.getState());

const unSubscribe = store.subscribe(()=>{
    console.log('Updated State',store.getState());
})

store.dispatch(updateStreet('456 main str'))
unSubscribe();


