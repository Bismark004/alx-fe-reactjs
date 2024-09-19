// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);

      if (
        (location && !data.location?.toLowerCase().includes(location.toLowerCase())) ||
        (minRepos && data.public_Repos < parseInt(minRepos))

      ) {
        throw new Error ('User not found based on the search criteria');
      } 
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
        type='text'
        placeholder='Enter Location'
        value={location}
        onChange = {(e) => setLocation(e.target.value)}
        />

        <input
        type='number'
        placeholder = 'Enter minimum number of repos'
        value={minRepos}
        onChange= {(e) => setMinRepos(e.target.value)}

        />


        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h2>{userData.name ? userData.name : userData.login}</h2>
          <p>Useername: {userData.login}</p>
          <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      )}
    </div>
  );
}

export default Search;
