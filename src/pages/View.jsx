import { React, useState } from "react";
import Chart from "../components/Charts/Chart";
import { listDashboards } from "../components/data/dashboards";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const View = ({
  option,
  setOption,
  dashboards,
  setDashboards,
  setCheckBoxes,
}) => {
  const [parent] = useAutoAnimate();
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="bg-amber-300 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-md w-{0%} flex flex-col">
            {/* dropdown and reset button */}
            <div className="flex gap-[50rem]">
              {/* dropdwon  */}
              <div className="flex flex-row items-center mt-5 ml-10 z-40">
                <label className="pl-14 font-bold text-lg text-gray-900">
                  View data for:
                </label>

                <select
                  className="select ml-4 w-56 bg-black text-white"
                  onChange={(e) => {
                    setOption(Number(e.target.value));
                    setDashboards(
                      listDashboards.find(
                        (dashboard) =>
                          dashboard.option === Number(e.target.value)
                      ).tableau
                    );
                    setCheckBoxes(
                      listDashboards
                        .find(
                          (dashboard) =>
                            dashboard.option === Number(e.target.value)
                        )
                        .tableau.map((tabl) => tabl.title)
                    );
                  }}
                  value={option}
                >
                  <option value={1}>first</option>
                  <option value={2}>second</option>
                  <option value={3}>third</option>
                </select>
              </div>
              {/* reset button */}
              <div className="pt-5 z-50 mt-2">
                <button
                  onClick={() => {
                    setOption(1);
                    setDashboards(
                      listDashboards.find((dashboard) => dashboard.option === 1)
                        .tableau
                    );
                    setCheckBoxes(
                      listDashboards
                        .find((dashboard) => dashboard.option === 1)
                        .tableau.map((tabl) => tabl.title)
                    );
                  }}
                  className="bg-black text-white text-md pl-8 pr-8 p-2 pb-2 font-bold rounded-full"
                >
                  reset
                </button>
              </div>
            </div>
            {/* <Sidebar /> */}
            <div
              className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 p-20 pt-5"
              ref={parent}
            >
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
