import React, { useState } from "react";

export default function Field() {

  const [btnText, setBtnText] = useState("Encode");
  const handleClick = (text) => {
    setBtnText(text);
  }

  return (
    <div className="h-[650px] w-full flex justify-center items-center bg-gray-200">

      <div className="h-[500px] w-[85%] m-[10px] flex flex-col shadow-xl bg-white shadow-gray-400 rounded-md overflow-hidden">

        {/* Algorithms */}

        <div className="border-gray-300 flex justify-between">
          <ul className="flex gap-4">
            <button className={`hover:bg-gray-200 p-2 rounded-t-lg btnText === 'Encode' ? 'bg-gray-200' : ''`} onClick={() => handleClick("Encode")}>Encryption</button>
            <button className="hover:bg-gray-200 p-2 rounded-t-lg" onClick={() => handleClick("Decode")}>Decryption</button>
          </ul> 
          <input className="m-2 p-2 focus:outline-none" type="text" placeholder="Secret Key" />
        </div>

        <div className="border-b-2 border-gray-300 bg-gray-200">
          <ul className="flex p-4 gap-4">
            Algorithms:
            <li>DES</li>
            <li>AES</li>
            <li>Blowfish</li>
            <li>Serpent</li>
            <li>Skipjack</li>
          </ul>
        </div>

        {/* Encryption/Decryption field */}
        <div className="w-full h-[80%]  flex">
          <div className="w-1/2  h-full border-solid border-gray-400 border-r-[2px] overflow-hidden relative">
            <textarea
              className="h-full w-full p-[6px] focus:outline-none"
              type="text"
              placeholder="Enter your text here..."
              id=""
              cols="30"
              rows="10"
            />
            <button className="absolute bottom-0 m-2 right-0 pl-4 pr-4 border-2 p-2 bg-gray-700 text-white hover:rounded-xl">
              {btnText}
            </button>
          </div>

          <div className="w-1/2  h-full border-solid border-gray-400 border-l-[2px]"></div>
        </div>
      </div>
    </div>
  );
}