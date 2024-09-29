import React from 'react';

const ShoppingCart = ({ items, onRemoveFromCart, onConfirmPurchase }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 100; // ค่าขนส่ง
  const finalTotal = total + shippingCost;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <div>
                <p>{item.name} (x{item.quantity})</p>
                <p>ราคา: {item.price.toFixed(2)}฿</p>
              </div>
              <button 
                className="bg-red-600 text-white font-bold py-1 px-2 rounded hover:bg-red-700"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">รวมสินค้า: {total.toFixed(2)}฿</p>
            <p className="font-bold">ค่าขนส่ง: {shippingCost}฿</p>
            <p className="font-bold">รวมทั้งหมด: {finalTotal.toFixed(2)}฿</p>
            <button 
              className="mt-2 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              onClick={onConfirmPurchase} // ฟังก์ชันยืนยันการซื้อ
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;