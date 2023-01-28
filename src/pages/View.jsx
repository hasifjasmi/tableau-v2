import { React, useState } from "react";
import Chart from "../components/Charts/Chart";
import { listDashboards } from "../components/data/dashboards";

const View = ({option, setOption, dashboards, setDashboards, setCheckBoxes}) => {
  return (
    <div>
      <div className="absolute flex justify-between items-center gap-[50rem]">
        <div className="flex flex-row items-center mt-5 ml-10">
          <label className="pl-14 font-bold text-lg">View data for:</label>

          <select
            className="select ml-4 w-56 bg-black text-white"
            onChange={(e) => {
              setOption(Number(e.target.value));
              setDashboards(
                listDashboards.find(
                  (dashboard) => dashboard.option === Number(e.target.value)
                ).tableau
              );
              setCheckBoxes(listDashboards.find(
                (dashboard) => dashboard.option === Number(e.target.value)
              ).tableau.map(tabl=>tabl.title))
            }}
            value={option}
          >
            <option value={1}>first</option>
            <option value={2}>second</option>
            <option value={3}>third</option>
          </select>
        </div>
        <div className="pt-5">
          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white text-md pl-8 pr-8 p-2 font-bold rounded-full"
          >
            reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex flex-wrap justify-center">
          <div className="bg-amber-300 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-md w-{0%} flex ">
            {/* <Sidebar /> */}
            <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 p-20">
              {dashboards.map((dashboard) => (
                <Chart
                  key={dashboard.link}
                  dashboard={dashboard}
                  height="800px"
                  width="650px"
                  dashboards={dashboards}
                  setDashboards={setDashboards}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
