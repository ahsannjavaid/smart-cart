import { SERVER_URL } from "../config";

const entity = "services";

export const servicesEndpoints = {
  getServices: () => `${SERVER_URL}/${entity}/`,
};
