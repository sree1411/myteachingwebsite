import React from 'react';
import css from  '../assests/abc.pdf'
const Basic = () => {
  return (
    <>
      <main>
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
          }}
        >
          <h1 style={{ fontSize: '2rem', color: '#343a40' }}>
            Basic Interview Questions
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '20px' }}>
            <a
              href={css}   // Correct path to your file in the public folder
              className='btn btn-primary'
              download="Basic_Interview_Questions" // File will download with this name
            >
              Click here to download
            </a>
          </p>
          <p style={{ fontSize: '1rem', color: '#6c757d' }}>
            Thank you for your patience!
          </p>
        </div>
      </main>
    </>
  );
};

export default Basic;
