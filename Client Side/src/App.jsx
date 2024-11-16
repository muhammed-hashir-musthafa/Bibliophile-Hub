import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/BookForm';
import { Toaster } from 'react-hot-toast';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
