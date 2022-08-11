import React, { useState, useEffect } from 'react'
const Latency=()=>{
    const [latency, setLatency] = useState()
    useEffect(() => {
      const clientWs = new WebSocket("ws://localhost:55455");
      const startdate = new Date().getTime();
        console.log(startdate);
      clientWs.onopen = function () {
        const opendate = new Date().getTime();
        let lat = opendate-startdate
        setLatency(lat)
      };
    }, [])
    
    
        return (
            <div>
                <h1>Latency</h1>
                <h1>{latency}ms</h1>
            </div>
    )
}

export default Latency