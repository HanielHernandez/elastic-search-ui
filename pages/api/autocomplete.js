import { API_KEY, CLOUD_ID } from "@/utils/elastic_search/config";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

const connector = new AppSearchAPIConnector({
  engineName: process.env.ELASTIC_SEARCH_ENGINE_NAME,
  endpointBase: process.env.ELASTIC_SEARCH_ENDPOINT_BASE,
  searchKey: process.env.ELASTIC_SEARCH_SEARCH_KEY,
});

export default async function handler(req, res) {
  try {
      const { requestState, queryConfig } = req.body;
      const response = await connector.onAutocomplete(requestState, queryConfig);
      res.json(response);    
  } catch (e) {
    console.error(e);
    res.status(422).json(e);
  }
}
