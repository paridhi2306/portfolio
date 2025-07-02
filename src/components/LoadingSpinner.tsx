import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/20"></div>
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-purple-500 border-r-purple-400 border-b-purple-300 border-l-purple-200 rounded-full animate-spin"></div>
        
        {/* Inner pulse */}
        <div className="absolute inset-2 rounded-full animate-pulse bg-gradient-to-br from-purple-600/20 to-transparent"></div>
      </div>
    </div>
  );
}