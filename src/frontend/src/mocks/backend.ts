import type { backendInterface, http_request_result } from "../backend";

export const mockBackend: backendInterface = {
  async submitContactForm(_name, _email, _projectType, _budget, _message) {
    return { __kind__: "ok", ok: "success" };
  },
  async transform(input) {
    return input.response as http_request_result;
  },
};
