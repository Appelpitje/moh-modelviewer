import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    file: {
      name: "m1_garand.obj",
      path: "/obj/m1_garand.obj"
    }
  },
  getters: {
    getFile: state => {
      return state.file;
    }
  },
  mutations: {
    changeFile(state, payload) {
      state.file = payload;
    }
  },
  actions: {
    changeFile(state, payload) {
      state.file = payload;
    }
  },
  modules: {}
});
