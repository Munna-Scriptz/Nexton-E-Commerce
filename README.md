🛒 Nexton E-Commerce

A fully responsive E-Commerce web app built with React.js, Redux Toolkit, and Tailwind CSS. This project demonstrates modern UI design, smooth state management, and essential shopping features like product search, cart system, and multi-page navigation.

🚀 Features

🧠 Redux Toolkit for global state management

🛍️ Add to Cart / Delete from Cart functionality

🔍 Search Products with real-time filtering

📄 Multi-page navigation using React Router

📱 Fully responsive layout built with Tailwind CSS

⚡ Optimized performance & clean component structure


🗂️ Folder Structure

src/
│
├── app/
│   └── store.js              # Redux store setup
│
├── features/
│   └── cart/                 # Cart slice and logic
│   └── products/             # Product slice and data
│
├── components/               # Reusable UI components
├── pages/                    # Multi-page routes (Home, Shop, Cart, etc.)
├── assets/                   # Images and static files
└── App.js                    # Root app component

⚙️ Installation

1. Clone the repository

git clone https://github.com/yourusername/nexton-ecommerce.git


2. Move into the project directory

cd nexton-ecommerce


3. Install dependencies

npm install


4. Start the app

npm start



🧩 Example Code

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h3 className="font-semibold text-lg mt-2">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

🧠 Key Concepts

Redux Toolkit for managing cart and product data

Dynamic product rendering using map()

Search filtering with useState and array filter

Reusable components for maintainable codebase

Routing system for page navigation


🧰 Built With

React.js

Redux Toolkit

Tailwind CSS

React Router DOM

JavaScript (ES6+)


📄 License

This project is open-source and available under the MIT License.