import React, { useState, useEffect } from 'react'

export const APIKeyEnterBox = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [haveKey, sethaveKey] = useState(false);
    const [apiKey, setAPIKey] = useState(localStorage.getItem('OPENAI_KEY') || '')

    useEffect(() => {
        if (apiKey !== ''){
            setPlaceholder(apiKey);
            sethaveKey(true);
        }else{
            setPlaceholder('Enter OpenAI API Key');
            sethaveKey(false);
        }
        setInputValue('');
    }, [apiKey]) 

    const saveAPIKey = () => {
        const input = document.getElementById('apiKeyInputBox');
        localStorage.setItem('OPENAI_KEY', input.value);
        setAPIKey(input.value);
    }

    const resetAPIKey = () => {
        const api_key = localStorage.getItem('OPENAI_KEY');
        const input = document.getElementById('apiKeyInputBox');
        if (!api_key) return;
        localStorage.removeItem('OPENAI_KEY');
        setAPIKey('');
    }


    return (
        <div className='flex justify-center items-center gap-2'>
        <input id='apiKeyInputBox' type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder={placeholder} className="bg-white/10 flex text-center w-fit border border-gray-300 px-3 py-1 rounded focus:border-[var(--color-sunset-orange)]"></input>
        {!haveKey ? 
        <button onClick={saveAPIKey} className='bg-white/50 py-1 px-2 rounded text-md font-semibold text-[var(--color-sunset-purple)] shadow hover:bg-white/70 transition ease-in-out'>SAVE</button>
        : <button onClick={resetAPIKey} className='bg-white/50 py-1 px-2 rounded text-md font-semibold text-[var(--color-sunset-purple)] shadow hover:bg-white/70 transition ease-in-out'>RESET</button>
        }
      </div>
    );
}