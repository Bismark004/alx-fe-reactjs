import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the search query
    let query = username;

    // Append location to the query if provided
    if (location) {
      query += `+location:${location}`;
    }

    // Append minimum repositories to the query if provided
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Fetch data from the GitHub Search API
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    // Return the array of users that match the search criteria
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching users from GitHub API');
  }
};
