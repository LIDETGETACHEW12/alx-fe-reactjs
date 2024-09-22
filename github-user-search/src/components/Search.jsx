import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, repos });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">GitHub Advanced Search</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
