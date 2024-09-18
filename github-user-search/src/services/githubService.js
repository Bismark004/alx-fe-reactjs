
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    // Throwing an error to handle it in the Search component
    throw new Error('User not found');
  }
};
