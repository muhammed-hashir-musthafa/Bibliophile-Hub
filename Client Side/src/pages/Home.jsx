import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Home = () => {
  const [books, setBooks] = React.useState([]);

  const fetchBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-2">Welcome to Book Listing App</h1>
        <p className="text-lg">Manage your book collection with ease!</p>
      </div>
      <div className="mt-6">
        <BookForm refreshBooks={fetchBooks} />
        <BookList books={books} refreshBooks={fetchBooks} />
      </div>
    </div>
  );
};

export default Home;
