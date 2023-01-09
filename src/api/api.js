import axios from 'axios';


// const instance = axios.create({
//   withCredentials: true,
//   baseURL: 'https://63acc6b1da81ba97618c3d0a.mockapi.io/',
// });

export const pizzasAPI = {
  getPizzas(activeCategory, sortType, pageNumber) {
    return axios
      .get(
        `https://63acc6b1da81ba97618c3d0a.mockapi.io/items?${
          activeCategory === 0 ? '' : `category=${activeCategory}&`
        }sortBy=${sortType.value}&order=${sortType.to}&page=${pageNumber}&limit=4`,
      )
      .then((response) => {
        return response.data;
      });
  },
};