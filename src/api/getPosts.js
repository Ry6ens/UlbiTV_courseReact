import axios from "axios";

export const getPosts = async (limit, page) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    { params: { _limit: limit, _page: page } }
  );
  return response;
};

export const getPostById = async (id) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return response;
};

export const getPostComments = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response;
};
