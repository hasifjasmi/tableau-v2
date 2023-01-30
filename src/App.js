import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Navbar, Footer, Sidebar } from "./components";
import { View } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import { listDashboards } from "./components/data/dashboards";

const App = () => {
	const { currentMode, activeMenu } = useStateContext();
	const [parent] = useAutoAnimate();
	const [option, setOption] = useState(1);
	const [checkBoxes, setCheckBoxes] = useState(
		listDashboards
			.find((dashboard) => dashboard.option === 1)
			.tableau.map((tabl) => tabl.title)
	);
	const [dashboards, setDashboards] = useState(
		listDashboards.find((dashboard) => dashboard.option === 1).tableau
	);

	return (
		<div className={currentMode === "Dark" ? "dark" : ""}>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					<div
						className="fixed right-4 bottom-4"
						style={{ zIndex: "1000" }}
					></div>
					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" ref={parent}>
							<Sidebar
								option={option}
								checkBoxes={checkBoxes}
								setCheckBoxes={setCheckBoxes}
								dashboards={dashboards}
								setDashboards={setDashboards}
							/>
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg" ref={parent}>
							<Sidebar
								option={option}
								checkBoxes={checkBoxes}
								setcheckboxes={setCheckBoxes}
								dashboards={dashboards}
								setDashboards={setDashboards}
							/>
						</div>
					)}
					<div
						className={
							activeMenu
								? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
								: "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
						}
					>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
							<Navbar />
						</div>
						<div>
							<Routes>
								<Route
									path="/"
									element={
										<View
											option={option}
											setOption={setOption}
											dashboards={dashboards}
											setDashboards={setDashboards}
											setCheckBoxes={setCheckBoxes}
										/>
									}
								/>
								{/* <Route path="/View" element={<View />} /> */}
							</Routes>
						</div>
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
