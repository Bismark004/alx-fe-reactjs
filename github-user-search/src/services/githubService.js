
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.json();
  } catch (error) {
    throw new Error('User not found');
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.json();
  } catch (error) {
    throw new Error('User not found');
  }
};
