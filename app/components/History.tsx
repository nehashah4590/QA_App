"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const History = () => {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const [filteredDataOne, setFilteredDataOne] = useState([]);
  const [filteredDataTwo, setFilteredDataTwo] = useState([]);

  const token = session?.user?.access_token;

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

 useEffect(()=>{
  
    const filtered = data.filter(item => item?.chat_id ==1);
      setFilteredDataOne(filtered);
      const filtered2 = data.filter(item => item?.chat_id == 2);
      setFilteredDataTwo(filtered2);
      console.log("1",filteredDataOne)
      console.log("2",filteredDataTwo)
      console.log("data",data)

 },[data])

  return (
    <div className=" overflow-y-auto">
     {/* {data.map((item) => (
        <button key={item?.chat_id} className="flex hover:bg-gray-700 text-white  py-2 px-4 m-1  rounded">
          {item?.question}
        </button>
      ))} */}
      <button className="flex hover:bg-gray-700 text-white  py-2 px-4 my-1  rounded">
          {filteredDataOne?.question}
      </button>
      <button className="flex hover:bg-gray-700 text-white  py-2 px-4 my-1  rounded">
          {filteredDataTwo?.question}
      </button>
    </div>
  )
}

export default History
