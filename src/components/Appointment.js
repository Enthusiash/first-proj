import React, { useState } from 'react';

import '../styles/Appointment.css'

const Appointment = () => {
    const [gender, setGender] = useState('');
    const [dateTime, setDateTime] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value);
      };
  
  return (
    <div className="form">
        <form>
         <h1>Appointment <span>Form</span></h1>
         <input type="text" className="name" id="" placeholder='Enter Full Name' required />
         <input type="address" className="address" id="" placeholder='Enter Address' required />
        <select id="gender" name="gender" value={gender} onChange={handleGenderChange} required >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="datetime-local" id="datetime" name="datetime" value={dateTime} onChange={handleDateTimeChange} required />
         <input type="email" className="email" id="" placeholder='Sample@gmail.com' required />
         <input type="phone" className="phone" id="" placeholder='Enter Phone' required />
         <textarea name="message" id="" cols="30" rows="5" placeholder='Message....' required />
         <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
