import { AxiosResponse } from "axios";
import api from "./api";

export default {
  async validate(token: any): Promise<AxiosResponse> {
    return api.post(
      "/token/validate",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
