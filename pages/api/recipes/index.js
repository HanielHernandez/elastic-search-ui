// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDocuments, setDocuments, createDocument} from "@/utils/elastic_search";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { recipe_id } = req.query;
      const response = await getDocuments("recipes", recipe_id);
      res.status(200).json(response);
    } catch (e) {
      console.error(e);
      res.status(422).json(e);
    }
  } else if (req.method === "PUT") {
    try {
      const { query } = req.body;
      const response = await getDocuments("recipes", query);
      res.status(200).json(response);
    } catch (e) {
      console.error(e);
      res.status(422).json(e);
    }
  } else if (req.method === "POST") {
    try {
      const body = req.body;
      const response = await createDocument("recipes", body);
      res.status(201).json(response);
    } catch (e) {
      console.error(e);
      res.status(422).json(e);
    }
  }
}
