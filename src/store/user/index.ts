import { Module } from "vuex";
import { UserState, RootState } from "@/store/interfaces";

const userModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: "",
  },
};

export default userModule;
