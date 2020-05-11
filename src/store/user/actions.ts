import { ActionTree } from "vuex";
import { RootState, UserState } from "@/store/interfaces";

const userActions: ActionTree<UserState, RootState> = {
  async validateLocalToken({ getters }) {},
};

export default userActions;
