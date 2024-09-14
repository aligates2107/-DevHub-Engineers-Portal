// import React from 'react';

function QuickStart() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen flex flex-col items-center justify-center p-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Quick Start</h1>
        <p className="text-xl mb-10">Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>

        <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">You will learn</h2>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>How to create and nest components</li>
            <li>How to add markup and styles</li>
            <li>How to display data</li>
            <li>How to render conditions and lists</li>
            <li>How to respond to events and update the screen</li>
            <li>How to share data between components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuickStart;
