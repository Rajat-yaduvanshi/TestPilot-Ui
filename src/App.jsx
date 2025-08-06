import React from 'react';

function App() {
  const handleAmazonTest = () => {
    alert('Amazon test triggered!');
    // Here you can later connect to Jenkins API to trigger Amazon test job
  };

  const handleFlipkartTest = () => {
    alert('Flipkart test triggered!');
    // Here you can later connect to Jenkins API to trigger Flipkart test job
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>SDET Automation Dashboard</h1>
      <button onClick={handleAmazonTest} style={{ marginRight: '10px' }}>
        Test
      </button>
{/*       <button onClick={handleFlipkartTest}> */}
{/*         Flipkart Test */}
{/*       </button> */}
    </div>
  );
}

export default App;
