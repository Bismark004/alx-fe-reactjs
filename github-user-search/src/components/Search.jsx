import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      // Call API to fetch user data based on search criteria
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=' bg-gray-900 text-white min-w-full mx-auto h-screen text-center p-20'>
      <h1 className='text-3xl font-bold text-center uppercase mb-10'>GitHub User Search</h1>

      <div className='w-full flex justify-center text-black'>
        <form onSubmit={handleSearch} className='flex flex-col space-y-4'>
          <input
            type='text'
            placeholder='Enter GitHub username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-80 p-3 border border-gray-700 rounded-lg'
          />

          <input
            type='text'
            placeholder='Enter Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='w-80 p-3 border border-gray-700 rounded-lg'
          />

          <input
            type='number'
            placeholder='Enter minimum number of repos'
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className='w-80 p-3 border border-gray-700 rounded-lg'
          />

          <button type='submit' className='w-80 p-3 border border-gray-700 rounded-lg text-white text-lg font-medium hover:bg-cyan-600 transition-colors'>
            Search
          </button>
        </form>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <div className='mt-10 space-y-6'>
          {userData.map((user) => (
            <div key={user.id} className='bg-gray-800 p-4 rounded-lg'>
              <img src={user.avatar_url} alt={user.login} width='100' className='mx-auto' />
              <h2 className='text-xl font-bold'>{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Public Repositories: {user.public_repos}</p>
              <a href={user.html_url} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
