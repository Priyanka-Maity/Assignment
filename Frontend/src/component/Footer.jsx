import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>This is a footer.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    bottom: 0,
    width: '1550px',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    fontSize: '14px',
  },
};

export default Footer;