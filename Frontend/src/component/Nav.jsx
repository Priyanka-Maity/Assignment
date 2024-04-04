import React from 'react';

const Nav = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <a href="/app" style={styles.navbarLink}>Profile</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/" style={styles.navbarLink}>Home</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/notifications" style={styles.navbarLink}>Notification Page</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    width:'1500px',
    // position:'fixed',
    height:'30px',
  },
  navbarList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    
    
  },
  navbarItem: {
    margin: '0 10px',
  },
  navbarLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  },
};

export default Nav;
