import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username;

    // Append location and repo count filters to the search query
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // GitHub Search API for users
    const response = await axios.get('https://api.github.com/search/users', {
      params: { q: query }
    });

    return response.data.items; // Return array of users
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
