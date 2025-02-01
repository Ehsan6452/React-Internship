import React, { useState } from 'react';
import './Ticket.css';

const Ticket = () => {
  const [isValid, setIsValid] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [fNameValue, setFNameValue] = useState('');
  const [lNameValue, setLNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [mainCountriesCity, setMainCountriesCity] = useState([
    'Tehran',
    'Mashhad',
    'Isfahan',
    'Shiraz',
    'Tabriz',
  ]);
  const [selectCity, setSelectCity] = useState('Tehran');

  const countriesData = {
    Iran: ['Tehran', 'Mashhad', 'Isfahan', 'Shiraz', 'Tabriz'],
    USA: ['Los Angeles', 'New York', 'Chicago', 'Miami', 'Houston'],
    Iraq: ['Baghdad', 'Basra', 'Mosul', 'Najaf', 'Karbala'],
    UK: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh'],
  };

  const book = (event) => {
    event.preventDefault();
    setIsBooked(true);

    if (fNameValue.length !== 0 && lNameValue.length !== 0 && emailValue.length !== 0 && phoneValue.length !== 0) {
      setIsValid(true);
      setTimeout(() => setIsValid(false), 5000);
    }
  };

  const setValue = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'FName':
        setFNameValue(value);
        break;
      case 'LName':
        setLNameValue(value);
        break;
      case 'Phone':
        setPhoneValue(value);
        break;
      case 'Email':
        setEmailValue(value);
        break;
      default:
        break;
    }
  };

  const selectCountry = (event) => {
    const selectedCountry = event.target.value;
    setMainCountriesCity(countriesData[selectedCountry]);
  };

  const selectedCity = (event) => {
    setSelectCity(event.target.value);
  };

  return (
    <section className="Ticket">
      <h1>Book your ticket</h1>
      {isValid && <h2 className="Message">You successfully booked a ticket from {selectCity}</h2>}
      <div className="InfoBox">
        <input onChange={setValue} type="text" className="Info" name="FName" placeholder="First Name" tabIndex={1} />
        <input onChange={setValue} type="text" className="Info" name="LName" placeholder="Last Name" tabIndex={2} />

        {isBooked && fNameValue.length === 0 && <span className="TErrorMessage">Please Enter Your First Name</span>}
        {isBooked && lNameValue.length === 0 && <span className="TErrorMessage">Please Enter Your Last Name</span>}

        <input onChange={setValue} type="text" className="Info" name="Phone" placeholder="Phone Number" tabIndex={3} />
        <input onChange={setValue} type="text" className="Info" name="Email" placeholder="Email Address" tabIndex={4} />

        {isBooked && phoneValue.length === 0 && <span className="TErrorMessage">Please Enter Your Phone Number</span>}
        {isBooked && emailValue.length === 0 && <span className="TErrorMessage">Please Enter Your Email Address</span>}

        <select className="Info" onChange={selectCountry}>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="UK">United Kingdom</option>
          <option value="USA">United States America</option>
        </select>
        <select className="Info" onChange={selectedCity}>
          {mainCountriesCity.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>

        <button className="Book" type="submit" onClick={book}>
          Book
        </button>
      </div>
    </section>
  );
};

export default Ticket;