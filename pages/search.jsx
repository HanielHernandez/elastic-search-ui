import { CustomResultView } from "@/components/CustomResultView";
import Connector from "../services/APIConnector";

import {
  Facet,
  SearchProvider,
  Results,
  PagingInfo,
  SearchBox,
  Paging,
  ResultsPerPage,
  Sorting,
} from "@elastic/react-search-ui";

import { Layout, SingleLinksFacet } from "@elastic/react-search-ui-views";
import { CustomSearchBox } from "@/components/CustomSearchBox";
import CustomAutocomplete from "@/components/CustomAutoCompleteView";
import ClearFilters from "@/components/ClearFilters";
import {CustomSorting} from "@/components/CustomSorting";
import CustomRangeFacet from "@/components/CustomRangeFacet";

const connector = new Connector({});

const config = {
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true,
  searchQuery: {
    search_fields: {
      name: {
        weight: 3,
      },
      description: {},
      price: {},
    },
    result_fields: {
      price: { raw: {} },
      name: {
        snippet: {
          size: 100,
          fallback: true,
        },
      },
      description: {
        raw: {},
      },
      category: {
        raw: {},
      },
    },
    disjunctiveFacets: ["price", "category"],
    facets: {
      category: {
        size: 100,
        type: "value",
      },
      price: {
        type: "range",
        ranges: [
          { from: 0, name: "Any" },
          { from: 0, to: 100, name: "0-100" },
          { from: 100, to: 300, name: "100-300" },
          { from: 300, to: 500, name: "300-500" },
          { from: 500, to: 1000, name: "500-1000" },
        ],
      },
    },
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      result_fields: {
        name: {
          snippet: {
            size: 100,
            fallback: true,
          },
        },
      },
    },
    suggestions: {
      types: {
        documents: {
          fields: ["name", "description"],
        },
      },
      size: 4,
    },
  },
};

const Home = () => {
  return (
    <SearchProvider config={config}>
      <Layout
        bodyHeader={
          <>
            <PagingInfo />
            <ResultsPerPage />
          </>
        }
        sideContent={
          <div>
             <ClearFilters />
            <Sorting
              view={CustomSorting}
              label="Sort by"
              sortOptions={[
                {
                  name: 'Name',
                  value: 'name',
                  direction: 'asc'
                },
                {
                  name: "Most expensive - Less Expensive",
                  value: "price",
                  direction: "desc",
                },
                {
                  name: "Less expensive - Most Expensive",
                  value: "price",
                  direction: "asc",
                },
              ]}
            />

            <Facet
              key="1"
              field="price"
              label="Precio"
              view={SingleLinksFacet}
            />
            
            <Facet
              key="2"
              field="price"
              label="Precio"
              view={CustomRangeFacet}
            />
            <Facet
              key="3"
              field="category"
              label="Category"
              filterType="any"
              isFilterable={true}
            />
            {/* <Facet field="categories.keyword" label="Categories" />
            <Facet
              field="designername.keyword"
              label="Designer"
              isFilterable={true}
              show="1000"
            />
            <Facet
              field="states.keyword"
              label="States"
              filterType="any"
              isFilterable={true}
            />
            <Facet
              field="world_heritage_site.keyword"
              label="World Heritage Site"
              view={BooleanFacet}
            />
            <Facet field="visitors" label="Visitors" view={SingleLinksFacet} />
            <Facet
              field="date_established"
              label="Date Established"
              filterType="any"
            />
            <Facet field="location" label="Distance" filterType="any" />
            <Facet field="acres" label="Acres" view={SingleSelectFacet} /> */}
          </div>
        }
        header={
          <SearchBox
            autocompleteMinimumCharacters={3}
            autocompleteResults={{
              linkTarget: "_blank",
              sectionTitle: "Results",
              titleField: "name",
              urlField: "nps_link",
              shouldTrackClickThrough: true,
              clickThroughTags: ["test"],
            }}
            inputView={CustomSearchBox}
            autocompleteView={CustomAutocomplete}
            autocompleteSuggestions={true}
            debounceLength={0}
          />
        }
        bodyContent={
          <Results titleField="name" resultView={CustomResultView} />
        }
        bodyFooter={<Paging />}
      />
    </SearchProvider>
  );
};

export default Home;
