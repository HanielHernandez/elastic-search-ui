// const { default: client } = require("./elastic_search/client");

import { Client } from '@elastic/elasticsearch';
import { faker } from '@faker-js/faker';
export const CLOUD_ID = 'test:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQ4Y2QyN2E3NGU1ZGE0MzNjYmM3NjU1YWFmZGRkNzU1MiQwNTU5YmVlODViOGU0ZDVkOGJiODRhMTk4Mzc2YWYyMQ=='
export const API_KEY = 'REN2ZlI0Y0JnWWJyZnc2bHRsd0o6UGlyMUdUSWdRdENnbTlTTDNzZjlyUQ=='
const generate = async () => {
   const  client  = new Client({
    cloud: {
      id: CLOUD_ID
    },
    auth: { apiKey: API_KEY}
  })


  await client.indices.create({
    index: 'products',
    operations: {
      mappings: {
        properties: {
          name: { type: 'keyword' },
          description: { type: 'text' },
          price: { type: 'number' },
          category: {type: 'keyword'},
          image: {type: 'text'}
        }
      }
    }
  }, { ignore: [400] })

  const dataset = [];

  for (let i = 0; i <= 50; i++) {
    dataset.push({
      name: faker.commerce.productName(),
      thumbnail: faker.image.business(360, 240, true),
      description: faker.commerce.productDescription(),
      price: faker.datatype.float({min:0,max:1000,precision: 0.2}),
      category: faker.commerce.department()
    });
  }

  console.log(dataset)
  const operations = dataset.flatMap(doc => [{ index: { _index: 'products' } }, doc])

  const bulkResponse = await client.bulk({ refresh: true, operations })

  if (bulkResponse.errors) {
    const erroredDocuments = []
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0]
      if (action[operation].error) {
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before to try it again.
          status: action[operation].status,
          error: action[operation].error,
          operation: operations[i * 2],
          document: operations[i * 2 + 1]
        })
      }
    })
    console.log(erroredDocuments)
  }

  const count = await client.count({ index: 'products' })
  console.log('Documents inserter', count)
};


generate()