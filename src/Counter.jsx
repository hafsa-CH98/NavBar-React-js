import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='flex items-center justify-center gap-[10px] '>
            <button onClick={() => setCount(count + 1) } className='bg-red-500 w-[50px]'>+</button>
            <p className='text-2xl'>{count}</p>
            <button onClick={() => setCount(count - 1) } className='bg-red-500 w-[50px]'>-</button>
            <button onClick={() => setCount(0) } className='bg-blue-500 w-[50px]'>Reset</button>

        </div>
    );
}

export default Counter;
