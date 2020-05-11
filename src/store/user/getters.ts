import { GetterTree } from "vuex";
import { UserState, RootState } from "@/store/interfaces";

const userGetters: GetterTree<UserState, RootState> = {
  getLocalToken(state) {
    if (!state.token) state.token = localStorage.getItem("token");
    return state.token;
  },
};

export default userGetters;
