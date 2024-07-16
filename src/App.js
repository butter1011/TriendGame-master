import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import LoadPage from "./pages/login/loadPage";
import HeadPage from "./pages/login/headPage";
import TrustPage from "./pages/login/trustPage";
import OwnPage from "./pages/login/ownPage";
import YouPage from "./pages/login/youPage";
import JoinPage from "./pages/login/joinPage";
import ReviewPage from "./pages/login/reviewPage";
import vector from "./img/profile/Vector.png";

import Earn from "./pages/earn";
import Play from "./pages/play";
import Profile from "./pages/profile";
import Rank from "./pages/rank";
import Loading from "./pages/play/Loading";
import Footer from "./components/Footer";

import bgImage from "./svg/background.svg";
import { createContext, useContext, useState } from "react";

const AuthenContext = createContext(null);

export const useAuth = () => useContext(AuthenContext);

export default function App() {
	const [auth, setAuth] = useState(false);
	useContext(auth);
	return (
		<AuthenContext.Provider value={{ auth, setAuth }}>
			<div
				className="main-container flex flex-col justify-between h-screen"
				style={{
					backgroundColor: "black",
					backgroundImage: `url(${bgImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}>
				<BrowserRouter>
					{auth === true && (
						<header className="fixed top-2 right-2">
							<div className="flex justify-end pt-5 pr-5">
								<img className=" w-9 " src={vector} alt="vector" />
							</div>
						</header>
					)}
					<section className="overflow-y-auto flex justify-center items-center">
						<Routes>
							<Route path="/" element={<Home />} />
							{/* login routers start */}
							<Route path="/login" element={<Login />} />
							<Route path="/login/load" element={<LoadPage />} />
							<Route path="/login/head" element={<HeadPage />} />
							<Route path="/login/trust" element={<TrustPage />} />
							<Route path="/login/own" element={<OwnPage />} />
							<Route path="/login/you" element={<YouPage />} />
							<Route path="/login/join" element={<JoinPage />} />
							<Route path="/login/review" element={<ReviewPage />} />
							{/* login routers end */}
							<Route path="/earn" element={<Earn />} />
							<Route path="/play" element={<Play />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/rank" element={<Rank />} />
							<Route path="*" element={<Home />} />
						</Routes>
					</section>
					{auth === true && (
						<footer className="w-svw ">
							<Footer />
						</footer>
					)}
				</BrowserRouter>
			</div>
		</AuthenContext.Provider>
	);
}
