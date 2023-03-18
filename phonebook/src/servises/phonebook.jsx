import axios from "axios";
const url = "http://localhost:3001/phonebook";
const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};
const create = (newPhone) => {
  const request = axios.post(url, newPhone);
  return request.then((response) => response.data);
};

const deleteUser = (id) => {
  return axios.delete(`${url}/${id}`);
};
const update = (id, updatedPhone) => {
  const request = axios.put(`${url}/${id}`, updatedPhone);
  return request.then((response) => response.data);
};
export default { getAll, create, deleteUser, update };
