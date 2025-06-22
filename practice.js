import React, { useState } from 'react';
import logo  from './facebook.png';
 // Place a logo in src folder

function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = () => {
    const passwordRegex = /^[A-Za-z0-9]+$/;

    if (password.length < 8) {
      setAlertMessage('❌ Password must be at least 8 characters.');
    } else if (!passwordRegex.test(password)) {
      setAlertMessage('❌ Password can only contain letters and numbers.');
    } else {
      setAlertMessage('✅ Login successful!');
    }
  };

  return (
    <div style={styles.container}>
      {/* Emoji */}

      {/* Title */}
      <h2 style={styles.title}> Welcome to Login Page </h2>

      {/* Logo */}
      <img src={logo} alt="Social Logo" style={styles.logo} />

      {/* Username Input */}
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      {/* Alert Message */}
      {alertMessage && (
        <div style={styles.alert}>
          {alertMessage}
        </div>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit} style={styles.button}>
        Submit ✅
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f0f8ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
    padding: '20px',
  },
  emoji: {
    fontSize: '50px',
    marginBottom: '10px',
  },
  title: {
    color: 'teal',
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '20px',
  },
  
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '250px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  alert: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'teal',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default App;
