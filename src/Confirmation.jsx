import React from 'react';

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">สำเร็จการซื้อ</h1>
      <p className="text-lg mb-2">ขอบคุณที่สั่งซื้อกับเรา!</p>
      <p className="text-lg">เราจะจัดส่งสินค้าให้คุณเร็วที่สุด</p>
      <button 
        className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        onClick={() => window.location.reload()} // เปลี่ยนกลับไปที่หน้าแรก
      >
        กลับไปหน้าหลัก
      </button>
    </div>
  );
}

export default Confirmation;