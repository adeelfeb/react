import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Use the full Stackblitz URL
    //axios by default converts the data from the json format 

    
    // axios.get("https://react-swpk--80--f565b097.local-credentialless.webcontainer.io/api/quotes")
    axios.get("/api/quotes")  
    .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  return (
    <>
      <h1>Quote of the Day</h1>
      <h3>Total Quotes: {quotes.length}</h3>
      {
        quotes.map((quote) => (
          <div key={quote.id}>
            <h3>Quote: {quote.quote}</h3>
            <h2>By: {quote.by}</h2>
            <div>----------------------</div>
          </div>
        ))
      }
    </>
  );
}

export default App;
