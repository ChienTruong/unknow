import axios from 'axios';

export default function (api) {
  return {
    findAll: () => {
      return axios.get(api);
    },
    findOneById: (id) => {
      return axios.get(`${api}/${id}`);
    },
    delete: (id) => {
      return axios.delete(`${api}/${id}`);
    },
    create: (data) => {
      return axios.create(api, data);
    },
    update: (data, id) => {
      return axios.put(`${api}/${id}`, data);
    }
  };
}
