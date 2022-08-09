import React, { useState, useEffect} from "react"

const Address= ({version})=>{
    
    const [ipAddress, setIpAddress] = useState()
    
    useEffect(()=>{
        let url =
          version === "ipV4"
            ? "https://api.ipify.org?format=json"
            : "https://api64.ipify.org?format=json";
        (async function(){
            const response = await fetch(url);
            const data = await response.json()
            setIpAddress(data.ip)
            })()
        },
      [version]
    );
        
    return(
        <h1>
            {version} Address: <br/>
            {ipAddress}
        </h1>
    )
}

export default Address