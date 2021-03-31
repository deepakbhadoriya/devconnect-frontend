let baseUrl = `http://localhost:5000`;

if (process.env.NODE_ENV !== 'production') {
  baseUrl = 'https://devconnect7.herokuapp.com';
} else {
  baseUrl = 'http://localhost:5000';
}

export default baseUrl;
