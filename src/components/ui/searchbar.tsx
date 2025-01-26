import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Smartphone", category: "Electronics" },
  { id: 2, name: "Laptop", category: "Electronics" },
  { id: 3, name: "Headphones", category: "Accessories" },
  { id: 4, name: "Camera", category: "Photography" },
  { id: 5, name: "Smartwatch", category: "Wearables" },
  { id: 6, name: "Tablet", category: "Electronics" },
  { id: 7, name: "Bluetooth Speaker", category: "Accessories" },
  { id: 8, name: "Drone", category: "Photography" },
  { id: 9, name: "Gaming Console", category: "Gaming" },
  { id: 10, name: "Fitness Tracker", category: "Wearables" },
  { id: 11, name: "Desktop Computer", category: "Electronics" },
  { id: 12, name: "Wireless Keyboard", category: "Accessories" },
  { id: 13, name: "Webcam", category: "Photography" },
  { id: 14, name: "VR Headset", category: "Gaming" },
  { id: 15, name: "Portable Charger", category: "Accessories" },
  { id: 16, name: "E-Reader", category: "Electronics" },
  { id: 17, name: "Smart Glasses", category: "Wearables" },
  { id: 18, name: "Gaming Mouse", category: "Gaming" },
  { id: 19, name: "Action Camera", category: "Photography" },
  { id: 20, name: "Electric Scooter", category: "Transportation" },
];

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 bg-blend-saturation z-50 flex justify-center p-4 backdrop-blur-md">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSearch} className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for electronic products..."
            className="w-full py-2 px-12 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <IoCloseOutline className="h-6 w-6" />
          </button>
        </form>
        {searchTerm && (
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
            <p className="text-md font-normal text-gray-600">
              Search results for: {searchTerm}
            </p>
            <ul className="mt-2">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    className="py-2 px-4 border-b last:border-none"
                  >
                    {product.name} -{" "}
                    <span className="text-gray-500">{product.category}</span>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No products found.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
