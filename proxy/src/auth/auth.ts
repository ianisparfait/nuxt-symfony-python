import axios, { AxiosError, AxiosResponse } from "axios";

const Auth = async (username: string, password: string): Promise<any> => {
  return await axios.post("/api/.user/login", {username, password}, {
    headers: {
      "Content-Type": "application/json",
    }}
  ).then((response: AxiosResponse): AxiosResponse => {
    return response.data;
  }).catch((error: AxiosError): unknown => {
    return error.response.data;
  });
};

export default Auth;
export { Auth };
