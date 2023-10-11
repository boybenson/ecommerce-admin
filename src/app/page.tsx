import BarChart from "@/component/Barchart";
import PieChart from "@/component/PieChart";
import { AdminUrls, dashboardData } from "@/data/admin-urls";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="my-2 mx-auto w-10/12 border border-gray-300 p-4 rounded-md">
        <header className="flex items-center justify-between py-2">
          <h1 className="font-bold text-4xl">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <input
              type="date"
              className="border border-gray-300 p-2 rounded-lg"
            />
            <button className="border border-gray-300 p-2 rounded-lg bg-black text-white">
              make query
            </button>
          </div>
        </header>

        <div className="my-6">
          <span className="flex items-center space-x-6 bg-gray-100 p-3 rounded-xl md:inline-block">
            {AdminUrls?.map((url, idx) => (
              <Link href={url.label} key={idx}>
                {url.label}
              </Link>
            ))}
          </span>
        </div>

        <div className="my-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {dashboardData?.map((data, idx) => {
              const { label, value, Icon } = data;
              return (
                <div
                  key={idx}
                  className="w-[300px] h-[130px] border border-gray-300 rounded-lg shadow-sm p-4 flex items-start justify-between"
                >
                  <div>
                    <h4 className="font-normal">{label}</h4>
                    <h1 className="font-bold text-2xl">{value}</h1>
                  </div>
                  <div>
                    {" "}
                    <Icon className="w-6 h-6" />{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-6">
          <div>
            <BarChart />
          </div>
          <div>{/* <PieChart /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
