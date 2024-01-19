import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import LoadingComp from '../components/LoadingComp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      description,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5174/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Stored successfully.', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error!', { variant: 'error' });
        console.log(error);
      });
  };
  const backgroundImageStyle = {
    background: `url("data:image/jpeg;base64,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")`, // Replace with the actual base64 image data
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    
  };

  return (
    <div className='p-4' style={backgroundImageStyle}>
        

      <BackButton />
      <h1 className='text-3xl my-4 text-yellow-500'>Create Book</h1>
      {loading ? <LoadingComp /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook