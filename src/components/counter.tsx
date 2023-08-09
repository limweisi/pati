import { useState} from "react";

export const Counter: React.FC = () => { 
  const [count, setCount] = useState(0);
  const inc = ()=> setCount(count=> count+1);
  const dec = () => setCount(count=> count-1);
  return(
    <div className="w-278px h-54px bg-gray-200 mx-auto rounded-full flex justify-between items-center">
        <button className="text-3xl pl-5 pb-1" onClick={dec}>-</button>
        <div className="text-2xl">{count}</div>
        <button className="text-3xl pr-5 pb-1" onClick={inc}>+</button>
    </div>
  );
}
