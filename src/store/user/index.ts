import { Module } from "vuex";
import { UserState, RootState } from "@/store/interfaces";
import userMutations from "./mutations";
import userGetters from "./getters";
import userActions from "./actions";

const userModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: userMutations,
  getters: userGetters,
  actions: userActions,
};

export default userModule;
