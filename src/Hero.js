import restaurantPic from "./assets/restaurant.jpg";

export function Hero() {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Little lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned mediterranean
          <br />
          restaurant, focused on traditional
          <br />
          recipes with a modern twist
        </p>
        <button>Reserve a table</button>
      </div>
      <img src={restaurantPic}></img>
    </div>
  );
}
