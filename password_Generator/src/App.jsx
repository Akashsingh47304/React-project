import { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (symbolAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed]);

  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 bg-gray-800">
          <h1 className="text-white text-center text-2xl font-bold mb-4">
            Password Generator
          </h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4 text-white">
            <input
              type="text"
              value={password}
              readOnly
              className="outline-none w-full py-2 px-3 text-white"
              placeholder="Password"
              ref={passRef}
            />

            <button
              className="bg-blue-600 text-white px-4"
              onClick={copyPassToClipboard}
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label>Numbers</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={symbolAllowed}
                onChange={() => setSymbolAllowed((prev) => !prev)}
              />
              <label>Symbols</label>
            </div>

            <button
              onClick={passwordGenerator}
              className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;