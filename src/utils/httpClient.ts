import axios from "axios";

const HttpClient = axios.create();

const get = async (url: string) => {
  const response = await HttpClient.get(url);
  return response.data;
};

export default { get };
