// app/src/App.tsx
import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

function App() {
  const [userInput, setUserInput] = useState('');
  const { connected, publicKey, connect } = useWallet();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !connected) return;
    
    // We'll implement the posting logic later
    console.log('Posting:', userInput);
    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold mb-4">Blockchain Diary</h1>
                
                {!connected ? (
                  <button
                    onClick={() => connect()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">
                      Connected: {publicKey?.toString().slice(0, 8)}...
                    </p>
                  </div>
                )}

                {connected && (
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="w-full p-2 border rounded mb-2"
                      rows={4}
                      placeholder="What's on your mind?"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Post Entry (Earn 0.05 USDT)
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;