import React from "react";

export default function CustomAutocomplete({
  autocompletedResults,
  getItemProps,
}) {
  return (
    <div className="sui-search-box__autocomplete-container">
      {autocompletedResults.map((result, i) => (
        <div
          key={result.id.raw}
          {...getItemProps({
            key: result.id.raw,
            item: result,
          })}
          className="px-4 py-2 hover:bg-neutral-300 w-full"
        >
          <span
            dangerouslySetInnerHTML={{ __html: result.name.snippet }}
          ></span>
        </div>
      ))}
    </div>
  );
}
