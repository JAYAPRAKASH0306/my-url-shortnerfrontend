import React, { useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://urlshortnerbackend-87il.onrender.com/shorturl", {
        url: url,
      });

      if (response.data.shortURL) {
        setShortUrl(response.data.shortURL);
      }
    } catch (error) {
      console.error("Error creating short URL:", error);
    }
  };

  return (
    <div className="App">
      <h3>URL SHORTENER</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>URL </label>
          <input
            type="text"
            placeholder="Paste your long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">SHORTEN</button>
        </div>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;