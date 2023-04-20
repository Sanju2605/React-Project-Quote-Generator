import React, { useState } from "react";
import "./App.css";
import Header from "./Header";


function App(){
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [favorites, setFavorites] = useState([]);
  
  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => console.log(err));
  };
  
  
  const handleNewQuote = () => {
    fetchQuote();
  };
  
  const handleAddToFavorites = () => {
    const favoriteQuote = { quote, author };
    setFavorites([...favorites, favoriteQuote]);
  };
return (
    <div
      className="App"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
    <Header/>
          <button><div  className="share button a.share-facebook" class="share-button">
            <a href="https://twitter.com/settings/account?lang=en" class="share-twitter">Share on Twitter</a>
            <a href="https://www.facebook.com/login/" class="share-facebook">Share on facebook</a>
          </div>
          </button>
  
      <div className="container">
        <div className="quote-box">
        <center>
        <h1>Quote Of The Day</h1>
          <h2 className="quote">{quote}</h2>
          <p className="author">- {author}</p>
          </center>
          <div className="button-container">
            <center>
            <button className="btn" onClick={handleNewQuote}>
              New Quote
            </button>
            <button className="btn" onClick={handleAddToFavorites}>
              Add to Favorites
            </button>
            </center>
          </div>
          {favorites.length > 0 && (
            <div className="favorites-box">
              <h3>Favorites</h3>
              {favorites.map((favorite, index) => (
                <div key={index}>
                  <p>{favorite.quote}</p>
                  <p>- {favorite.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
)
              }


export default App;