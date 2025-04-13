import React, { useEffect, useState } from 'react'

const UseDebounce = (value, delay = 500) => {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(()=>{
    const timeOut = setTimeout(() => {
        setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeOut); // kullanıcı yazarken eski timeout'u iptal et
    
  }, [value, delay]);

    return debouncedValue;
};

export default UseDebounce