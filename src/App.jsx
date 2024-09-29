import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Confirmation from './Confirmation';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleConfirmPurchase = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <Confirmation />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Shopping App</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <ShoppingCart 
        items={cartItems} 
        onRemoveFromCart={handleRemoveFromCart} 
        onUpdateQuantity={handleAddToCart}
        onConfirmPurchase={handleConfirmPurchase} // ส่งฟังก์ชันยืนยันไปที่ ShoppingCart
      />
    </div>
  );
}

export default App;