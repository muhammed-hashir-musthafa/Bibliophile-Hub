import React, { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../utils/api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Book List</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-lg   rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 mb-3">{book.title}</h3>
            <p className="text-md text-gray-600 mb-2">By: <span className="font-medium text-indigo-600">{book.author}</span></p>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <button
              onClick={() => handleDelete(book._id)}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
