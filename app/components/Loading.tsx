// components/Loading.tsx

import React from 'react';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 16px solid #5a1482;
          border-radius: 50%;
          border-top: 16px solid #a2c217;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
