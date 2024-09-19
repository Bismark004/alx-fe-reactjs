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
    <div className=' bg-gray-900 text-white min-w-full mx-auto h-screen text-center p-20'>
       <h1 className='text-3xl font-bold text-center uppercase mb-10'>Github user Search</h1>

       <div className='w-full flex justify-center text-black'>
      <form onSubmit={handleSearch} className=' flex flex-col space-y-4'>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-80 p-3 border border-gray-700 rounded-lg'
        />

        <input
        type='text'
        placeholder='Enter Location'
        value={location}
        onChange = {(e) => setLocation(e.target.value)}
         className='w-80 p-3 border border-gray-700 rounded-lg'
        />

        <input
        type='number'
        placeholder = 'Enter minimum number of repos'
        value={minRepos}
        onChange= {(e) => setMinRepos(e.target.value)}
         className='w-80 p-3 border border-gray-700 rounded-lg'

        />


        <button type="submit"  className='w-80 p-3 border border-gray-700 rounded-lg text-white text-lg font-medium hover:bg-cyan-600 transition-colors'>
        Search
        </button>
      </form>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h2>{userData.name ? userData.name : userData.login}</h2>
          <p>Username: {userData.login}</p>
          <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      )}
    </div>
  );
}

export default Search;
