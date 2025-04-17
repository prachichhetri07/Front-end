import React from 'react';
import './Menu.css';

const menuItems = [
  {
    name: "Spaghetti Bolognese",
    image: "https://i1.wp.com/www.feeleat.fr/wp-content/uploads/2018/09/spaghetti-bolognese-106560-1-scaled.jpeg?fit=2560%2C1707&ssl=1",
    description: "Classic Italian pasta tossed in rich, meaty tomato sauce."
  },
  {
    name: "Chicken Curry",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg",
    description: "Spicy and flavorful Indian chicken curry made with aromatic spices."
  },
  {
    name: "Avocado Toast",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/how-to-make-avocado-toast.jpg",
    description: "Toasted bread topped with creamy smashed avocado and herbs."
  },
  {
    name: "White Sauce Pasta",
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/white-sauce-pasta.jpg",
    description: "Creamy and cheesy pasta cooked in rich white sauce with veggies."
  },
  {
    name: "Summer Desserts",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts-1.jpg",
    description: "Refreshing and sweet fruit-based desserts perfect for hot days."
  },
  {
    name: "Strawberry Water",
    image: "https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg",
    description: "Chilled fruit-infused water made with fresh strawberries and mint."
  },
];

const Menu = () => {
  return (
    <div className="menu-page container py-5">
      <h2 className="text-center mb-4">🍴 Our Recipe Menu</h2>
      <div className="row g-4">
        {menuItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
