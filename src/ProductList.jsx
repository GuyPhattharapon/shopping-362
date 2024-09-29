import React from 'react';

const products = [
  {
    id: 1,
    name: 'Genshin Impact ไอดีเพชรเริ่มต้น AR10',
    description: 'เพชร 5000+ + เม็ดรุ้ง0-10 + เม็ดฟ้า20+ (ตัวละครหลักกลุ่ม) [Asia Server]',
    price: 99.00,
    imageUrl: 'image/im1.jpg', 
  },
  {
    id: 2,
    name: 'Genshin Impact [AR50+] ไอดีเพชร Abyss',
    description: 'Bot เพชร 50000 + เม็ดรุ้ง50 + เม็ดฟ้า90+ (ตัวละครหลักกลุ่ม) [Asia Server]',
    price: 899.00,
    imageUrl: 'image/im2.jpg',
  },
  {
    id: 3,
    name: 'Genshin Impact [AR48] ไอดีเพชร Abyss',
    description: 'Bot เพชร 70000 + เม็ดรุ้ง80 + เม็ดฟ้า100+ (ตัวละครหลักกลุ่ม) [Asia Server]',
    price: 1799.00,
    imageUrl: 'image/im3.jpg',
  },
  {
    id: 4,
    name: 'Genshin Impact [AR47-52] ไอดีเพชร Abyss',
    description: 'Bot เพชร 40000 + เม็ดรุ้ง35 + เม็ดฟ้า65+ (ตัวละครหลักสุ่ม) [Europe Server]',
    price: 299.00,
    imageUrl: 'image/im4.jpg', 
  },
  {
    id: 5,
    name: 'Genshin Impact [AR47-52] ',
    description: 'Bot เพชร 50000 + เม็ดรุ้ง35 + เม็ดฟ้า25+ (ตัวละครหลักสุ่ม) [Europe Server]',
    price: 399.00,
    imageUrl: 'image/im5.jpg',
  },
  {
    id: 6,
    name: 'Genshin Impact [AR47-52] ไอดีเพชร Abyss',
    description: 'Bot เพชร 30000 + เม็ดรุ้ง35 + เม็ดฟ้า55+ (ตัวละครหลักสุ่ม) [America Server]',
    price: 299.00,
    imageUrl: 'image/im6.jpg',
  },
  {
    id: 7,
    name: 'Genshin Impact [Kazuha /C0  Asia AR60]',
    description: 'Bot เพชร 40000 + เม็ดรุ้ง35 + เม็ดฟ้า85+ (Kazuha) [Asia Server]',
    price: 599.00,
    imageUrl: 'image/im7.jpg', 
  },
  {
    id: 8,
    name: 'Genshin Impact [Arlecchino /C0 + ประจำตัว Asia AR60] ',
    description: 'Bot เพชร 20000 + เม็ดรุ้ง45 + เม็ดฟ้า10+ (Arlecchino) [Asia Server]',
    price: 999.00,
    imageUrl: 'image/im8.jpg',
  },
  {
    id: 9,
    name: 'Genshin Impact [Raiden Shogun /C2 + ประจำตัว Asia AR60] ',
    description: 'Bot เพชร 30000 + เม็ดรุ้ง35 + เม็ดฟ้า55+ (Raiden Shogun) [Asia Server]',
    price: 899.00,
    imageUrl: 'image/im9.jpg',
  },
  {
    id: 10,
    name: 'Genshin Impact [มีตัวละคร เมต้าทั้งหมด + ประจำตัว Asia AR60] ',
    description: 'Bot เพชร 12600 + เม็ดรุ้ง10 + เม็ดฟ้า15 (อาติแฟคแน่นๆ) ',
    price: 1000000.00,
    imageUrl: 'image/im10.jpg',
  },
];

function ProductList({ onAddToCart }) { // เปลี่ยนที่นี่
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-200">
          <img className="w-full" src={product.imageUrl} alt={product.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price.toFixed(2)}฿</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              onClick={() => onAddToCart(product)} // เปลี่ยนที่นี่
            >
              หยิบใส่ตะกร้า
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;