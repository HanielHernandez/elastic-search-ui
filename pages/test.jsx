import { getDocument } from '@/utils/elastic_search';
import React, { useEffect, useState } from 'react'
export default function Test(){

   const [loading, setLoading] = useState(false);

   const [response, setResponse] = useState(null);




   const onProcessQueryClicked = async ()=>{
   }




  return <div className='container container-xl mx-auto p-4'>

    <button className='border px-4 py-2 mb-4 hover:bg-neutral-200' onClick={()=>onProcessQueryClicked()}>
      Process query
    </button>
    {
      loading && <div className='w-6 h-6 border-blue-600 border-t-neutral-300 border-4 block rounded-full animate-spin' ></div>
    }
    
      <pre>
        {response}
      </pre>
  </div>
}