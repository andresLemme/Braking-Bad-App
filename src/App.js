import React, { useState } from 'react';

import './App.css';

const initialQuote = {
  text: "autoe",
  author: "autor"
}

function App() {
  const [quote, setQuote] = useState(initialQuote)

  return (
  <div className="app">
  <img 
  src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
  alt="logo"
/>
  <button>Get Another</button>
  <p>{quote.text} <br/>
  <span>- {quote.author}</span> 
  </p>
  </div>
  );
}

export default App;
