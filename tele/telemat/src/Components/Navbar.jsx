import React from 'react';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    top: '20px', // Adjust the top spacing as required
    left: '50%', // Center the div horizontally relative to the viewport
    transform: 'translateX(-50%)', // Shift the div back by half its width
    width: '90%',
    height: '60px',
    backgroundColor: 'black',
    zIndex: '1000',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '30px',
    paddingTop: '10px',
      }}
    >
      {/* Logo */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'orange',
          fontWeight: 'bold',
          fontSize: '18px',
          letterSpacing: '2px',
        }}
      >
        SAARTHI
      </div>

      {/* Navbar Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '90%',
          gap: '20px',
        }}
      >
        <a
          href="#home"
          style={{
            color: 'white',
            fontSize: '16px',
            padding: '10px 25px',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          className="hover:bg-gray-800 hover:text-orange-400"
        >
          HOME
        </a>
        <a
          href="#services"
          style={{
            color: 'white',
            fontSize: '16px',
            padding: '10px 15px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          className="hover:bg-gray-800 hover:text-orange-400"
        >
          SERVICES
        </a>
        <a
          href="#company"
          style={{
            color: 'white',
            fontSize: '16px',
            padding: '10px 15px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          className="hover:bg-gray-800 hover:text-orange-400"
        >
          COMPANY <span style={{ fontSize: '12px', marginLeft: '5px' }}>▼</span>
        </a>
        <a
          href="#dashboard"
          style={{
            color: 'white',
            fontSize: '16px',
            padding: '10px 15px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          className="hover:bg-gray-800 hover:text-orange-400"
        >
          DASHBOARD
        </a>
        <a
          href="#contact"
          style={{
            color: 'white',
            fontSize: '16px',
            padding: '10px 15px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          className="hover:bg-gray-800 hover:text-orange-400"
        >
          CONTACT US
        </a>
        <a
          href="#blogs"
          style={{
            color: 'white',
            fontSize: '16px',
            padding: '10px 15px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          className="hover:bg-gray-800 hover:text-orange-400"
        >
          BLOGS
        </a>
      </div>
    </div>
  );
};

export default Navbar;
