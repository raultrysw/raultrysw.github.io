import Vuex from 'vuex'
import curriculum from './cv.js'
import projects from './projects'

const createStore = () => {
  return new Vuex.Store({
      modules: {
        cv: curriculum,
        projects
      }
  })
}

export default createStore