import axios from 'axios';

export const fetchUserData = async (query, location, minRepos) => {
  try {
    // Build the search query for GitHub's API
    let searchQuery = query;

    // Add location to the query if provided
    if (location) {
      searchQuery += `+location:${location}`;
    }

    // Add minimum number of repositories to the query if provided
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    // Make the API call to GitHub's search users endpoint
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
        q: searchQuery, // The search query parameter for GitHub's API
      },
    });

    // Return the array of users that match the query
    return response.data.items;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else {
      throw new Error('Failed to fetch users. Please try again.');
    }
  }
};
