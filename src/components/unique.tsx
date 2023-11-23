"use client"
import {ChevronRight} from 'lucide-react'

import React, { useState } from 'react';
import { create } from '@/app/action'
const Input =  () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="flex items-center">
    <div className="border p-2 rounded-lg border-white border-solid rounded-md flex items-center">
    <label className="mr-2">
      deeplink.bio /
    </label>
    
    <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="votre-nom"
          className=" mr-4 bg-transparent border-none rounded-md text-white focus:outline-none"
        />
      <button className="p-2 flex justify-center items-center flex-row bg-[#0F44FF] text-white rounded-md"  type="submit">Commencer <ChevronRight /></button>
    </div>
  </div>
  );
};

export default Input;
