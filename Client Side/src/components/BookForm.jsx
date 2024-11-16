import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addBook } from '../utils/api';
import toast from 'react-hot-toast';

const AddBook = ({ onBookAdded }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    description: Yup.string().required('Description is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addBook(values);
      toast.success("Book Added Successfully")
      resetForm();
      onBookAdded();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Formik
      initialValues={{ title: '', author: '', description: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-8 shadow-2xl rounded-xl max-w-lg mx-auto space-y-6 border border-gray-300">
          <h2 className="text-3xl font-semibold text-indigo-700 text-center">Add a New Book</h2>
          
           <div>
            <Field
              name="title"
              placeholder="Enter book title"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
          </div>

           <div>
            <Field
              name="author"
              placeholder="Enter author name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ErrorMessage name="author" component="div" className="text-red-500 text-sm mt-1" />
          </div>

           <div>
            <Field
              name="description"
              as="textarea"
              placeholder="Enter book description"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
          </div>

           <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg transition duration-300 focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Adding...' : 'Add Book'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddBook;
