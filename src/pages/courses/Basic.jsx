import React from 'react';

const Advance = () => {
  return (
    <>
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f8f9fa',
          padding: '20px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
          }}
        >
          <h1 style={{ fontSize: '2rem', color: '#343a40' }}>Under Development of Basic Interview Questions</h1>
          <p style={{ fontSize: '1.2rem', color: '#6c757d', marginBottom: '20px' }}>
            This section is still being developed. Please wait for a few days for updates.
          </p>
          <p style={{ fontSize: '1rem', color: '#6c757d' }}>
            Thank you for your patience!
          </p>
        </div>
      </main>
    </>
  );
};

export default Advance;