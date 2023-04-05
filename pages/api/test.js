// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDocument, setDocument } from "@/utils/elastic_search"

export default async function handler(req, res) {

  if(req.method === 'GET') {
    try{
      cont id =  req.query
      const response = await getDocument('platos',)
      res.status(200).json(response)
    }catch(e){
      console.error(e)
      res.status(422).json(e)
    }
  }

  else if(req.method === "POST") {
    try{
      const body =  req.body
      const response = await setDocument('platos',body)
      res.status(201).json(response)
    }catch(e){
      console.error(e)
      res.status(422).json(e)
    }

  }
}
