import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    langues:'zh'
  },
  mutations:{
  	newTitle(state,msg){
      state.langues=msg
    }
  }
})

export default store