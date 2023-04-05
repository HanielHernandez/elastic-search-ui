export const CustomSearchBox = ({
  getAutocomplete,
  getInputProps,
  getButtonProps,
}) => {
  return (
    <div className="flex w-full">
      <input
        {...getInputProps({
          placeholder: "Type for search",
        })}
        className="border w-full border-neutral-200 mr outline-none  px-4 py-2"
      />
      <button
        {...getButtonProps({
          "data-custom-attr": "some value",
        })}
        className="bg-blue-600 rounded-r-md text-white px-4 py-2"

      >
        Search
      </button>
      {getAutocomplete()}

    </div>
  );
};

// export const CustomSearchBox = ({ value, onChange, onSubmit }) => {
//   return (
//     <form className="flex w-full" onSubmit={onSubmit}>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         type="search"
//         className="border w-full border-neutral-200 mr outline-none  px-4 py-2"
//         placeholder={"search"}
//       />

//       <button
//         className="bg-blue-600 rounded-r-md text-white px-4 py-2"
//         type="submit"
//       >
//         Search
//       </button>
//     </form>
//   );
// };
