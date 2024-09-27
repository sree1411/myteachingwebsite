import React, { useState, useEffect } from 'react';
import Overview from '../jscomponents/Overview';
import Assignment from '../jscomponents/Assignment';
import Circulams from '../jscomponents/Circulams';
import Projects from '../jscomponents/Projects';

const ReactJsCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check if the screen width is mobile-sized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles
  const headerStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const h1Style = {
    fontSize: isMobile ? '24px' : '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const h2Style = {
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: '300',
    color: '#666',
  };

  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: isMobile ? 'flex-start' : 'center',
    marginTop: '20px',
    overflowX: isMobile ? 'scroll' : 'initial',
  };

  const tabsListStyle = {
    display: 'flex',
    gap: '15px',
    padding: 0,
    listStyle: 'none',
    flexDirection: isMobile ? 'column' : 'row',
    width: isMobile ? '100%' : 'auto',
  };

  const tabStyle = (isActive) => ({
    padding: isMobile ? '12px 15px' : '10px 20px',
    cursor: 'pointer',
    backgroundColor: isActive ? 'lightblue' : 'white',
    border: isActive ? '1px solid #007bff' : '1px solid #ccc',
    borderRadius: '8px',
    color: isActive ? 'white' : 'black',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    width: isMobile ? '100%' : 'auto',
    textAlign: 'center',
  });

  const tabContentStyle = {
    marginTop: '30px',
    textAlign: 'center',
    padding: isMobile ? '10px' : '20px',
    borderTop: '1px solid #eee',
    backgroundColor: '#fafafa',
  };

  return (
    <>
      <main>
        <div style={headerStyle}>
          <h1 style={h1Style}>Web Development</h1>
          <h2 style={h2Style}>Frontend Development with ReactJS</h2>
        </div>

        <div style={tabsContainerStyle}>
          <ul style={tabsListStyle}>
            <li
              style={tabStyle(activeTab === 'overview')}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </li>
            <li
              style={tabStyle(activeTab === 'circulam')}
              onClick={() => setActiveTab('circulam')}
            >
              Circulam
            </li>
            <li
              style={tabStyle(activeTab === 'assignment')}
              onClick={() => setActiveTab('assignment')}
            >
              Assignments
            </li>
            <li
              style={tabStyle(activeTab === 'project')}
              onClick={() => setActiveTab('project')}
            >
              Projects
            </li>
          </ul>
        </div>

        <div style={tabContentStyle}>
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'circulam' && <Circulams />}
          {activeTab === 'assignment' && <Assignment />}
          {activeTab === 'project' && <Projects />}
        </div>
      </main>
    </>
  );
};

export default ReactJsCourse;
