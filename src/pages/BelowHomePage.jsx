import React from 'react';
import html from '../assests/html.png';
import css3 from '../assests/css3.png';
import js from '../assests/javascript.png';
import react from '../assests/reactjs.png';
import redux from '../assests/redux.png';
import bootstrap from '../assests/bootstrap.png';

const BelowHomePage = () => {
  return (
    <div
      className="container text-center my-5"
      style={{
        margin: '40px auto',
        maxWidth: '1200px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#343a40' }}>Technologies We Use</h2>
      <div className="row" style={{ marginBottom: '40px' }}>
        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={html}
            alt='HTML'
            style={{
              width: '150px',
              height: '150px',
              margin: '0 20px',
              borderRadius: '10%',
            }}
          />
        </div>
        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={css3}
            alt='CSS'
            style={{
              width: '150px',
              height: '150px',
              margin: '0 20px',
              borderRadius: '10%',
            }}
          />
        </div>
        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={js}
            alt='JavaScript'
            style={{
              width: '150px',
              height: '150px',
              margin: '0 20px',
              borderRadius: '10%',
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={react}
            alt='React'
            style={{
              width: '150px',
              height: '150px',
              margin: '0 20px',
              borderRadius: '10%',
            }}
          />
        </div>
        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={redux}
            alt='Redux'
            style={{
              width: '150px',
              height: '150px',
              margin: '0 20px',
              borderRadius: '10%',
            }}
          />
        </div>
        <div className="col" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={bootstrap}
            alt='Bootstrap'
            style={{
              width: '150px',
              height: '150px',
              margin: '0 20px',
              borderRadius: '10%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BelowHomePage;
