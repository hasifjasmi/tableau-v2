import { useRef, useEffect, useState } from "react";

const { tableau } = window;

export default function Chart({
  dashboard,
  height,
  width,
  dashboards,
  setDashboards,
}) {
  const ref = useRef(null);
  // swap function
  const [swap, setSwap] = useState(true);

  //
  useEffect(() => {
    const viz = new tableau.Viz(ref.current, `${dashboard.link}`, {
      hideToolbar: true,
      hideTabs: true,
      height: "800px",
      width: "640px",
    });

    // return viz; removing this seems to fix the problem lol.
  }, [dashboard, width, height]);

  return (
    <>
      <div className="flex flex-col w-[660px] bg-base-100 border-2 border-black ">
        {/* buttons */}

        <div className="flex flex-row justify-between">
          <div className="font-bold pl-5 pt-3">{dashboard.title}</div>
          <div className="ml-auto flex items-center">
            <button
              onClick={() => {
                setDashboards(
                  dashboards.filter((dash) => dash.link !== dashboard.link)
                );
                console.log(dashboard.link);
              }}
              className="btn btn-square align-items-right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* expand button */}
            <a target="_blank" href={dashboard.link}>
              <button className="btn btn-square">
                <i className="fa-solid fa-expand"></i>
              </button>
            </a>

            {/* flip button */}
            <button
              onClick={() => {
                setSwap(!swap);
              }}
              className="btn btn-square "
            >
              <i className="fa-solid fa-repeat"></i>
            </button>
          </div>
        </div>
        <label
          className={`swap ${swap ? "swap-active" : ""} swap-flip text-9xl`}
        >
          <div
            className="border-2 border-black border-t-transparent bg-white swap-on w-[660px]"
            ref={ref}
          ></div>
          <div className="flex border-2 border-black border-t-transparent bg-white swap-off">
            <p className="text-base"> {dashboard.desc}</p>
          </div>
        </label>
      </div>
    </>
  );
}
