import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./interfaces";
import userModule from "./user";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    user: userModule,
  },
};

export default new Vuex.Store<RootState>(store);
