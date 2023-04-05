import { useCallback, useState } from "react";

export default function CustomRangeFacet({ onChange }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const [value,setValue] =  useState(null)


  const onStateFilter = useCallback(() => {

    // if(value){
    //   OnRemove(value)
    // }

    const range = {
      from: Number.parseFloat(from),
      to: Number.parseFloat(to),
      name: `${from} - ${to}`
    }
    
    onChange(range);
    //setValue(range)
  }, [value,from,to,onChange]);

  return (
    <>
      <label htmlFor="">From:</label>
      <input
        value={from}
        onChange={(e) => setFrom(e.target.valueAsNumber)}
        className="border my-2 px-4 py-2  w-full"
        type="number"
        placeholder="from"
      />
      <label htmlFor="">To:</label>

      <input
        value={to}
        onChange={(e) =>setTo(e.target.valueAsNumber)}
        className="border my-2 px-4 py-2  w-full"
        type="number"
        placeholder="to"
      />
      <button
        onClick={() => onStateFilter()}
        className="px-4 py-2 bg-blue-600 text-white"
      >
        {" "}
        filter{" "}
      </button>
    </>
  );
}
