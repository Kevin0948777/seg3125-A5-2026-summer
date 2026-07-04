import { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Dog Nail Clipper Pro",
    category: "Grooming",
    pet: "Dog",
    price: 18.99,
    rating: 4.7,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Cat Nail Clipper Mini",
    category: "Grooming",
    pet: "Cat",
    price: 14.99,
    rating: 4.6,
    tag: "Gentle Grip",
  },
  {
    id: 3,
    name: "Soft Pet Brush",
    category: "Grooming",
    pet: "Dog",
    price: 16.5,
    rating: 4.4,
    tag: "Daily Care",
  },
  {
    id: 4,
    name: "Reflective Dog Leash",
    category: "Walking",
    pet: "Dog",
    price: 22.99,
    rating: 4.8,
    tag: "Outdoor",
  },
  {
    id: 5,
    name: "Interactive Cat Toy",
    category: "Toys",
    pet: "Cat",
    price: 12.99,
    rating: 4.5,
    tag: "Fun Pick",
  },
  {
    id: 6,
    name: "Small Memorial Urn",
    category: "Memorial",
    pet: "All Pets",
    price: 29.99,
    rating: 4.9,
    tag: "Respectful",
  },
];

function App() {
  const [category, setCategory] = useState("All");
  const [pet, setPet] = useState("All");
  const [price, setPrice] = useState("All");
  const [cart, setCart] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [surveySent, setSurveySent] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === "All" || product.category === category;
      const matchPet = pet === "All" || product.pet === pet || product.pet === "All Pets";

      let matchPrice = true;
      if (price === "Under $15") matchPrice = product.price < 15;
      if (price === "$15 - $25") matchPrice = product.price >= 15 && product.price <= 25;
      if (price === "Over $25") matchPrice = product.price > 25;

      return matchCategory && matchPet && matchPrice;
    });
  }, [category, pet, price]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function placeOrder(event) {
    event.preventDefault();
    setOrderPlaced(true);
    setCheckoutStep(4);
  }

  return (
    <main className="store">
      <nav className="navbar">
        <h2>PawMart</h2>
        <div>
          <a href="#shop">Shop</a>
          <a href="#cart">Cart ({cart.length})</a>
          <a href="#survey">Survey</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">PET CARE DEALS</p>
        <h1>Everything your pet needs, all in one place.</h1>
        <p>
          Browse grooming tools, toys, walking accessories, and memorial items
          with simple filters and clear product information.
        </p>
        <a href="#shop" className="hero-btn">Shop Deals</a>
      </section>

      <section className="section" id="shop">
        <h2>Shop Products</h2>
        <p className="section-intro">
          Use the filters to narrow products by category, pet type, and price.
        </p>

        <div className="layout">
          <aside className="filters">
            <h3>Filters</h3>

            <label>
              Category
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>All</option>
                <option>Grooming</option>
                <option>Walking</option>
                <option>Toys</option>
                <option>Memorial</option>
              </select>
            </label>

            <label>
              Pet Type
              <select value={pet} onChange={(e) => setPet(e.target.value)}>
                <option>All</option>
                <option>Dog</option>
                <option>Cat</option>
              </select>
            </label>

            <label>
              Price
              <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option>All</option>
                <option>Under $15</option>
                <option>$15 - $25</option>
                <option>Over $25</option>
              </select>
            </label>
          </aside>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <span className="badge">{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.category} • {product.pet}</p>
                <p>Rating: ⭐ {product.rating}</p>
                <strong>${product.price.toFixed(2)}</strong>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cart-section" id="cart">
        <h2>Checkout</h2>

        <div className="steps">
          <span className={checkoutStep >= 1 ? "active" : ""}>1. Cart</span>
          <span className={checkoutStep >= 2 ? "active" : ""}>2. Information</span>
          <span className={checkoutStep >= 3 ? "active" : ""}>3. Payment</span>
          <span className={checkoutStep >= 4 ? "active" : ""}>4. Confirmation</span>
        </div>

        {checkoutStep === 1 && (
          <div className="checkout-box">
            <h3>Your Cart</h3>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <span>{item.name}</span>
                  <strong>${item.price.toFixed(2)}</strong>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))
            )}

            <h3>Total: ${total.toFixed(2)}</h3>

            <button disabled={cart.length === 0} onClick={() => setCheckoutStep(2)}>
              Continue to Information
            </button>
          </div>
        )}

        {checkoutStep === 2 && (
          <form className="checkout-box" onSubmit={(e) => { e.preventDefault(); setCheckoutStep(3); }}>
            <h3>Customer Information</h3>
            <input required placeholder="Full Name" />
            <input required type="email" placeholder="Email Address" />
            <input required placeholder="Shipping Address" />
            <button>Continue to Payment</button>
          </form>
        )}

        {checkoutStep === 3 && (
          <form className="checkout-box" onSubmit={placeOrder}>
            <h3>Payment</h3>
            <input required placeholder="Cardholder Name" />
            <input required placeholder="Card Number" />
            <input required placeholder="Expiry Date" />
            <input required placeholder="CVV" />
            <button>Place Order</button>
          </form>
        )}

        {orderPlaced && (
          <div className="checkout-box success">
            <h3>Order Confirmed</h3>
            <p>Thank you for shopping with PawMart. Your order has been placed.</p>
          </div>
        )}
      </section>

      <section className="section survey-section" id="survey">
        <h2>Tell Us About Your Experience</h2>
        <p className="section-intro">
          Your feedback helps us improve PawMart for future pet owners.
        </p>

        {!surveySent ? (
          <form className="survey-form" onSubmit={(e) => { e.preventDefault(); setSurveySent(true); }}>
            <label>
              How was your experience?
              <select required>
                <option>Excellent</option>
                <option>Good</option>
                <option>Okay</option>
                <option>Poor</option>
              </select>
            </label>

            <textarea required placeholder="Leave a short comment..." />

            <button>Submit Survey</button>
          </form>
        ) : (
          <div className="checkout-box success">
            <h3>Thank you!</h3>
            <p>Your feedback was submitted successfully.</p>
          </div>
        )}
      </section>

      <footer>
        <p>Designed by Kai Wen Yuan</p>
        <p>SEG3125 Assignment 4 E-Commerce Prototype</p>
      </footer>
    </main>
  );
}

export default App;