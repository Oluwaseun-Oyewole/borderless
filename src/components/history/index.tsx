import { historyData } from "../../helper/ constants";

const History = () => {
  return (
    <div className="pt-12 px-5 shadow-md hidden lg:block">
      <h1 className="text-xl">History</h1>
      <ul className="p-3">
        {historyData?.map((history, index) => {
          return (
            <li key={index} className="flex gap-4 items-start py-6">
              <div className="border-[1.5px] border-gray-300 p-2 rounded-full">
                <history.icon />
              </div>
              <div>
                <h1>{history?.title}</h1>
                <p className="text-gray_primary text-sm">{history?.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
