import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const notify = () => toast("Thanks, Your Details Submited SuccessFully");
  const [taskvalue, setTaskValue] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setTaskValue({
      ...taskvalue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      access_key: '08cd10cb-ae05-4e65-82ff-40d02102da8a',
      name: taskvalue.name,
      email: taskvalue.email,
      message: taskvalue.message
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.success) {
      notify('Thanks, Your Details Submited SuccessFully');
      setTaskValue({
        name: '',
        email: '',
        message: ''
      });
    } else {
      console.log('Error:', data);
      alert(data.message);
    }
  };



  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={taskvalue.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your Name"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={taskvalue.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={taskvalue.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Your Message and Questions, We Will React Out Through Email"
              rows="5"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactUs;
