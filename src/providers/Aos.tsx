"use client"
// components/MyProvider.tsx
import React, { ReactNode, useEffect } from 'react';

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
interface MyProviderProps {
  children: ReactNode;
}

const AosProvider: React.FC<MyProviderProps> = ({ children }) => {
  // You can add any state or functionality you need here
  useEffect(() => {
    AOS.init({ once: true });
  }, []);


  return (
    <div>
      {/* Your global state or logic can go here */}
      {children}
    </div>
  );
};

export default AosProvider;