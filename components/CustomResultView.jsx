export const CustomResultView = ({ result, onClickLink }) => {
  return (
    <div className="flex flex-wrap bg-white shadow-md justify-between items-center border rounded-md p-4 my-2">
      <div className="flex flex-col w-2/3">
        <p
          className="font-medium mb-3"
          dangerouslySetInnerHTML={{ __html: result.name.snippet }}
        ></p>
        <p className="text-sm"> {result.description.raw}</p>
      </div>

      <div className=" bg-blue-600 p-2 rounded-md  text-white">
        ${result.price.raw}
      </div>

      {/* <pre className="w-full">
        {JSON.stringify(result,null,4)}
      </pre> */}
    </div>
  );
};
