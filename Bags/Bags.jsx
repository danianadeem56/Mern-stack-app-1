import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bags.css";

function Bags() {
  const [bags, setBags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/womens-bags"
        );
        setBags(response.data.products); // API returns { products: [...] }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bags:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBags();
  }, []);

  if (loading) return <p className="para1">Loading Bags...</p>;
  if (error) return <p className="para1">Something went wrong!</p>;

  return (
    <div className="bags">
      <h1>Our Bags Collection</h1>
      <p>Explore our range of stylish and quality bags fetched from API:</p>
      <div className="bags-grid">
        {bags.map((bag) => (
          <div className="bag-card" key={bag.id}>
            <img src={bag.thumbnail} alt={bag.title} />
            <h3>{bag.title}</h3>
            <p>${bag.price}</p>


          </div>
        ))}
      </div>
    </div>
  );
}

export default Bags;

















