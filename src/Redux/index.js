import { createStore } from 'redux'
import reducer from './Store/Store'

const store = createStore(reducer);


export default store;