import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
                fetch(`https://api.frankfurter.app/latest?from=${currency.toUpperCase()}`)

            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error(error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;