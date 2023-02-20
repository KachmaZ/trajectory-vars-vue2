import Vue from "vue";
import Vuex from "vuex";
import vehicles from "./modules/vehicles";

//Main vuex file. Connect modules to extend

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vehicles,
  },
});
