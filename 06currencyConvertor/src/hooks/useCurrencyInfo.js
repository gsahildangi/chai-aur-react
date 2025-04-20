import { useEffect ,useState } from "react";



function useCurrencyInfo(currency){
      let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      const [data ,setdata] = useState({});
       useEffect(()=>{
             fetch(url).then((res)=>res.jason()).then((res)=>setdata(res[currency]))
       },[currency])
    console.log(data);
    return data 
}


export default useCurrencyInfo;