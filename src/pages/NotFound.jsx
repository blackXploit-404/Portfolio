import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <img 
        src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif" 
        alt="Not Found"
        className="w-72 md:w-96 mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-400 mb-6">
        Hey Nub ! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
