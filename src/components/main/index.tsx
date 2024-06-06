import { useEffect, useState } from "react";
import HomeImage from "../../assets/svg/home.svg";
import { formatCurrency } from "../../helper";
import { trendingTopics } from "../../helper/ constants";
import { getTransactions } from "../../services/transactons";
import Button from "../button";

type TransactionType = {
  balance: number;
  transactions: {
    title: string;
    type: string;
    amount: number;
  }[];
};

const fake_transactions: TransactionType[] = [
  {
    balance: 5000,
    transactions: [
      {
        title: "mac book",
        type: "debit",
        amount: 500000,
      },
      {
        title: "Starlink",
        type: "debit",
        amount: 445000,
      },
      {
        title: "Salary",
        type: "credit",
        amount: 100000,
      },
      {
        title: "Shopping",
        type: "debit",
        amount: 23000,
      },
    ],
  },
];
const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await getTransactions();
      setTransactions(response?.data);
      setLoading(false);
    } catch (error) {
      setError("Error while fetching ..");
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div className="pt-12 h-full bg-gray-50 overflow-y-scroll">
      <div className="max-w-[90%] lg:max-w-[95%] mx-auto">
        <section>
          <h1 className="text-xl pb-8">Trending Topics</h1>
          <ul className="pt-1 flex flex-col md:flex-row items-center justify-center gap-10">
            {trendingTopics?.map((topic, index) => {
              return (
                <li key={index} className="shadow-lg w-full flex">
                  <div className="bg-white flex gap-5 pl-5 lg:pr-20 py-8 rounded-lg hover:shadow-md hover:cursor-pointer border-blue-300">
                    <img src={HomeImage} alt="home image" />
                    <div>
                      <h2>{topic?.title}</h2>
                      <p className="text-gray_primary">{topic?.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="pt-10 lg:flex justify-between">
          <div>
            <p>Designer Image</p>
            <small>Image is not properly partitioned on figma design</small>
          </div>
          <div className="mb-24 basis-[65%]">
            <p role="alert" aria-live="polite" aria-atomic="true">
              {error && error}
            </p>
            <p aria-live="polite" aria-atomic="true">
              {loading && "Loading...."}
            </p>
            <ul className="p-6 pb-20 shadow-lg rounded-lg bg-white flex justify-between items-center">
              {transactions?.length > 0 ? (
                <>
                  {transactions?.map((transaction, index) => {
                    return (
                      <li key={index} className="w-full">
                        <div className="pb-5">
                          <h3 className="text-lg">Balance</h3>
                          <p className="text-2xl">
                            {formatCurrency(transaction?.balance)}
                          </p>
                        </div>
                        <ul className="w-full">
                          {transaction?.transactions?.map(
                            (transaction, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex justify-between border-b-[1.5px] border-gray-100 py-3"
                                >
                                  <p className="text-[rgba(64, 70, 80, 1)]">
                                    {transaction?.title}
                                  </p>
                                  <div className="flex items-center gap-4">
                                    <Button className="rounded-full border-gray-100 border-2 py-1 px-4 text-2xl">
                                      -
                                    </Button>
                                    <p>{formatCurrency(transaction?.amount)}</p>
                                    <Button className="rounded-full border-gray-100 border-2 py-1 px-4 text-2xl">
                                      +
                                    </Button>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </>
              ) : (
                <>
                  {fake_transactions?.map((transaction, index) => {
                    return (
                      <li key={index} className="w-full">
                        <div className="pb-5">
                          <h3 className="text-lg">Balance</h3>
                          <p className="text-2xl">
                            {formatCurrency(transaction?.balance)}
                          </p>
                        </div>
                        <ul className="w-full">
                          {transaction?.transactions?.map(
                            (transaction, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex justify-between border-b-[1.5px] border-gray-100 py-3"
                                >
                                  <p className="text-[rgba(64, 70, 80, 1)]">
                                    {transaction?.title}
                                  </p>
                                  <div className="flex items-center gap-4">
                                    <Button className="rounded-full border-gray-100 border-2 py-1 px-4 text-2xl">
                                      -
                                    </Button>
                                    <p>{formatCurrency(transaction?.amount)}</p>
                                    <Button className="rounded-full border-gray-100 border-2 py-1 px-4 text-2xl">
                                      +
                                    </Button>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
