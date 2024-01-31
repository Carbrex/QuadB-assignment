// All API calls are made here

const url = "https://api.tvmaze.com";

export const getShows = async (searchQuery) => {
  const response = await fetch(`${url}/search/shows?q=${searchQuery}`);
  const data = await response.json();
  return data;
};

export const getShowWithID = async (id) => {
  const response = await fetch(`${url}/shows/${id}`);
  const data = await response.json();
  return data;
};
