import Vuex from 'vuex'
import curriculum from './cv.js'

const createStore = () => {
  return new Vuex.Store({
      modules: {
        cv: curriculum
      }
  })
}

export default createStore