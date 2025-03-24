import { SERVER_URL } from "../config";

const entity = "contact";

export const contactEndpoints = {
  contactService: () => `${SERVER_URL}/${entity}/`,
};
