import React from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <main className="lg:pl-64 pb-16 lg:pb-0 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
