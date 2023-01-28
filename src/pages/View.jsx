import { React, useState } from "react";
import Chart from "../components/Charts/Chart";

const listDashboards = [
  {
    option: 1,
    tableau: [
      // new dashboard
      {
        link: "https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
        desc: "this is new dashboard",
        title: "Dashboard",
      },
      //palato paralysis
      {
        link: "https://public.tableau.com/views/4_16637410137820/Dashboard9?:language=en-US&:display_count=n&:origin=viz_share_link",
        desc: "this is plaatao paralyisis",
        title: "palato paralysis",
      },
      //Total Spend Trends by Spend Category
      {
        link: "https://public.tableau.com/views/2_16637263565920/Dashboard10?:language=en-US&:display_count=n&:origin=viz_share_link",
        desc: "this is total spend trend",
        title: "Spend Trends by Spend Category",
      },
      // Spend by Month (checkbox)
      {
        link: "https://public.tableau.com/views/SpendbyMonthcheckbox/Dashboard15?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        desc: "this is spend by month",
        title: "Month (checkbox)",
      },
    ],
  },
  {
    option: 2,
    tableau: [
      //
      {
        link: "https://public.tableau.com/views/8_16642482406220/TopVendors?:language=en-US&:display_count=n&:origin=viz_share_link",
        desc: "this is ",
        title: "Top Vendor",
      },
      //
      {
        link: "https://public.tableau.com/views/9_16642484376460/TopSpendCategories?:language=en-US&:display_count=n&:origin=viz_share_link",
        desc: "this is ",
        title: "Top Spend by Category",
      },
      //
      {
        link: "https://public.tableau.com/views/SpendbyMonth/Dashboard14?:language=en-US&:display_count=n&:origin=viz_share_link",
        desc: "this is ",
        title: "Spend by Month",
      },
    ],
  },
  {
    option: 3,
    tableau: [
      //Category bar chart
      {
        link: "https://public.tableau.com/views/7_16642480068940/Dashboard12?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        desc: "this is ",
        title: "Category bar chart",
      },
      //Dasboard
      {
        link: "https://public.tableau.com/views/Book2_16662365125770/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        desc: "this is ",
        title: "Dashboard1",
      },
    ],
  },
];

const View = () => {
  const [option, setOption] = useState(1);
  const [dashboards, setDashboards] = useState(
    listDashboards.find((dashboard) => dashboard.option === 1).tableau
  );

  return (
    <div>
      <div className="absolute flex justify-between items-center gap-[50rem]">
        <div className="flex flex-row items-center mt-5 ml-10">
          <label className="pl-14 font-bold text-lg">View data for:</label>

          <select
            className="select ml-4 w-56 bg-black text-white"
            onChange={(e) => {
              setOption(e.target.value);
              setDashboards(
                listDashboards.find(
                  (dashboard) => dashboard.option === Number(e.target.value)
                ).tableau
              );
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
