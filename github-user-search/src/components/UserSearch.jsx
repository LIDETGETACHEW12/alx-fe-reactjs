import { useState } from 'react';
import { fetchGitHubUser } from '../services/githubService';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
      setError(null);
    } catch (err) {
      setError('User not found or API error');
      setUserData(null);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h3>{userData.name}</h3>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
