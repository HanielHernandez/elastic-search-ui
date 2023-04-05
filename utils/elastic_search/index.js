import client from "./client"

export const getDocument = (index, id)=>{
  return  client.get({
    index,
    id
  })
}

export const getDocuments = (index, query)=>{
  return  client.search({
    index,
    query
  })
}


export const createDocument = (index, document)=>{
  return  client.index({
    index,
    document
  })
}

export const updateDocument = (index, document)=>{
  return  client.index({
    index,
    document
  })
}