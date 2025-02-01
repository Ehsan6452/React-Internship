import React from 'react';
import './Input.css';

const Input = (props) => {
  const setInputValue = (event) => {
    props.set(event.target.value, event.target.name); // اینجا از props.set استفاده می‌شود
  };

  return (
    <div className="Inputs">
      <input
        type="text"
        className="Filed"
        name="BName"
        placeholder="Book Name"
        onChange={setInputValue}
        value={props.BName}
      />
      <input
        type="text"
        className="Filed"
        name="AName"
        placeholder="Author Name"
        onChange={setInputValue}
        value={props.AName}
      />

      <div className="ErrorSpace">
        {props.IsClick && props.bName === '' && <span>Please Enter Book Name ...</span>}
        {props.IsClick && props.aName === '' && <span>Please Enter Author Name ...</span>}
      </div>

      <input
        type="number"
        className="Filed"
        name="BPrice"
        placeholder="Book Price"
        onChange={setInputValue}
        value={props.BPrice}
      />
      <input
        type="text"
        className="Filed"
        name="Publications"
        placeholder="Publications"
        onChange={setInputValue}
        value={props.Publications}
      />

      <div className="ErrorSpace">
        {props.IsClick && props.bPrice === '' && <span>Please Enter Book Price ...</span>}
        {props.IsClick && props.publications === '' && (
          <span>Please Enter Publications Name ...</span>
        )}
      </div>
    </div>
  );
};

export default Input;