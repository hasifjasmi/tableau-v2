import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useStateContext } from "../contexts/ContextProvider";
import { listDashboards } from "./data/dashboards";

const Sidebar = ({
  option,
  checkBoxes,
  setCheckBoxes,
  dashboards,
  setDashboards,
}) => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const [parent] = useAutoAnimate();
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            ></Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* SIDE BAR CONTENT */}
          <div ref={parent} className="flex flex-col mt-10 gap-2">
            <h1 className="mt-16 font-bold text-xl border-2 border-white border-b-black w-60 pl-2 mr-4 text-center">
              Display Charts
            </h1>

            {listDashboards
              .find((dashboard) => dashboard.option === option)
              .tableau.map((tableauDashboard) => (
                <div className="flex gap-2" key={tableauDashboard.title}>
                  <label htmlFor="" className="text-gray-900">
                    {tableauDashboard.title}
                  </label>
                  <input
                    type="checkbox"
                    className="w-5"
                    name=""
                    id=""
                    checked={checkBoxes.includes(tableauDashboard.title)}
                    value={tableauDashboard.title}
                    onChange={(e) => {
                      if (checkBoxes.includes(tableauDashboard.title)) {
                        setCheckBoxes([
                          ...checkBoxes.filter(
                            (checkbox) => checkbox !== tableauDashboard.title
                          ),
                        ]);
                        setDashboards(
                          listDashboards
                            .find((dashboards) => dashboards.option === option)
                            .tableau.filter((dash) =>
                              [
                                ...checkBoxes.filter(
                                  (checkbox) =>
                                    checkbox !== tableauDashboard.title
                                ),
                              ].includes(dash.title)
                            )
                        );
                      } else {
                        setCheckBoxes([...checkBoxes, tableauDashboard.title]);
                        setDashboards(
                          listDashboards
                            .find((dashboards) => dashboards.option === option)
                            .tableau.filter((dash) =>
                              [...checkBoxes, tableauDashboard.title].includes(
                                dash.title
                              )
                            )
                        );
                      }
                    }}
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
