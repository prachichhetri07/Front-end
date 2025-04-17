import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section text-center text-white">
        <div className="hero-content">
          <h1>Welcome to Tastebook 🍽️</h1>
          <p>Discover & Share Your Favorite Recipes</p>
        </div>
      </header>

      <section className="gallery container my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <img 
              src="https://i1.wp.com/www.feeleat.fr/wp-content/uploads/2018/09/spaghetti-bolognese-106560-1-scaled.jpeg?fit=2560%2C1707&ssl=1" 
              className="img-fluid rounded shadow" 
              alt="Spaghetti" 
            />
          </div>
          <div className="col">
            <img 
              src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg" 
              className="img-fluid rounded shadow" 
              alt="Chicken Curry" 
            />
          </div>
          <div className="col">
            <img 
              src="https://cdn.loveandlemons.com/wp-content/uploads/2020/01/how-to-make-avocado-toast.jpg" 
              className="img-fluid rounded shadow" 
              alt="Avocado Toast" 
            />
          </div>
          <div className="col">
            <img 
              src="https://www.indianveggiedelight.com/wp-content/uploads/2023/01/white-sauce-pasta.jpg" 
              className="img-fluid rounded shadow" 
              alt="White Sauce Pasta" 
            />
          </div>
          <div className="col">
            <img 
              src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts-1.jpg" 
              className="img-fluid rounded shadow" 
              alt="Desserts" 
            />
          </div>
          <div className="col">
            <img 
              src="https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg" 
              className="img-fluid rounded shadow" 
              alt="Strawberry Water" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
