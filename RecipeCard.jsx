import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="card shadow-sm">
      <img 
        src={recipe.image} 
        className="card-img-top img-fluid" 
        alt={recipe.title} 
        style={{ maxHeight: '250px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
