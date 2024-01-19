import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Cards Page</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((item) => (
          <BookSingleCard key={item._id} book={item} />
        ))}
      </div>
    </div>
  );
};

export default BooksCard;