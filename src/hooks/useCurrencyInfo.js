import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Lyq7cAR2sa5YgOl9CdYPtWt3yVXB8RCcVQNUHho3&base_currency=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.data))
    },[currency])
    // console.log(data);
    return data

}

export default useCurrencyInfo;