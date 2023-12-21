import { ApiClient } from "./api-clients";

export const test = async () => {
  const response = await ApiClient.get(`/accounts`);
  return response.data;
};
