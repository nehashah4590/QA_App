"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const History = () => {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const token = session?.user?.access_token;
  const username = session?.user?.name;

  useEffect(() => {
    const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}/history/`,
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
    .then((response: any) => {
      console.log(JSON.stringify(response.data));
      setData(response.data);
    })
    .catch((error: any ) => {
      console.log(error);
    });

  },[token]);

  return (
    <div className="flex overflow-y-auto">
     <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item?.question}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
