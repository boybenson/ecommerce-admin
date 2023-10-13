import BarChart from "@/components/Barchart";
import { dashboardData } from "@/data/admin-urls";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
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
