import React, { useState, useEffect } from 'react';

import './App.css';
import Qoutes from './Components/Quotes/Qoutes';
import Spiner from './Components/Spinner/Spiner';

const initialQuote = {
  text: "Quote",
  author: "autor"
}

function App() {
  const [quote, setQuote] = useState(initialQuote)
  const [loading, setloading] = useState(false)
  
  const updateQuote = async () => {
    setloading(true)
    const url = "https://breakingbadapi.com/api/quote/random"
    const res = await fetch (url)
    const [data] = await res.json()
    console.log(data)

    setQuote({
      text: data.quote,
      author: data.author
    })
    setloading(false)
  }

  useEffect(() => {
    updateQuote()
  }, [])

  return (

  <div className="app">
  <img 
  src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
  alt="logo"/>

  <button onClick={() => updateQuote()} >Get Another</button>
    {loading ? <Spiner /> : <Qoutes  quote={quote}/>}
  
  </div>
  );
}

export default App;
