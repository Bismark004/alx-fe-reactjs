
import axios from 'axios';

export const fetchUserData = async (query, location, minRepos) => {

  try {
    let searchQuery = `${query}`;
    
    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos) {
      searchQuery += `repos:>=${minRepos}`;
    }
     

    const response = await axios.get(`https://api.github.com/users`,{
      params: {
        q: searchQuery,
      },
    });
    return response.data.items;
  } catch (error) {
    if (error.response) {
      if (error.response === 403) {
        throw new Error('Api rate limit exceeded. Please try again later');
      }
      throw new Error('unable to fetch users at the moment. Please try again later');

    } else if (error.request) {
      throw new Error ('Network error. Please check your internet connection.');
    } else {
      throw new Error ('An error occured. Please try again');
    }
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/${username}/repos`);
    return response.json();
  } catch (error) {
    throw new Error('User not found');
  }
};
