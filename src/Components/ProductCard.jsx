import ProductCardw from './Card';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function ProductCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]); 
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');

      if (!response.ok) {
        throw new Error(`Failed to fetch product data: ${response.statusText}`);
      }

      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center "> 
          {data.map((product, index) => (
            <div key={product.id} className="product-card"> 
              <ProductCardw  img={product.images[0]}  title={product.title}  price={product.price} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;