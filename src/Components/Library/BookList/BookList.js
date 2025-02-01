import React from 'react';

const BookList = (props) => {
  return (
    <>
      <td>{props.bName}</td>
      <td>{props.bName}</td>
      <td>{props.publications}</td>
      <td>{props.bPrice}</td>
    </>
  );
};

export default BookList;