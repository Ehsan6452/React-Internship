import React, { useState } from 'react';
import './Library.css';
import Header from './Header/Header';
import Input from './Inputs/Input';
import BookList from './BookList/BookList';

const Library = () => {
  const [bName, setBName] = useState('');
  const [aName, setAName] = useState('');
  const [publications, setPublications] = useState('');
  const [bPrice, setBPrice] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [booksList, setBooksList] = useState([]);

  const addBook = () => {
    if (bName.trim() && aName.trim() && publications.trim() && bPrice !== '' && !isNaN(bPrice)) {
      const newBook = {
        id: booksList.length + 1,
        bName: bName.trim(),
        aName: aName.trim(),
        publications: publications.trim(),
        bPrice: Number(bPrice),
      };
      setBooksList([...booksList, newBook]);
      setBName('');
      setAName('');
      setPublications('');
      setBPrice('');
      setIsClick(true);
      setTimeout(() => setIsClick(false), 1000);
    }
  };

  const setValue = (value, field) => {
    switch (field) {
      case 'BName':
        setBName(value);
        break;
      case 'AName':
        setAName(value);
        break;
      case 'BPrice':
        setBPrice(value);
        break;
      case 'Publications':
        setPublications(value);
        break;
      default:
        break;
    }
  };

  return (
    <section className="Library">
      <Header />
      <Input
        isClick={isClick}
        bName={bName}
        aName={aName}
        bPrice={bPrice}
        publications={publications}
        set={setValue} 
      />
      <button type="button" className="Add" onClick={addBook}>
        Add
      </button>
      <thead className="List">
        <tr>
          <th>Book Name</th>
          <th>Author</th>
          <th>Publications</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="List">
        {booksList.map((book) => (
          <tr key={book.id}>
            <BookList {...book} />
          </tr>
        ))}
      </tbody>
    </section>
  );
};

export default Library;