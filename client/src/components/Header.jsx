import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../contextProvider/MyContextProvider";
import Skeleton from "./shared/Skeleton";
import { Tooltip } from "react-tooltip";
const Header = () => {
	const { loading, user } = useContext(myContext);

	return (
		<div className="flex bg-gray-50 justify-around mx-auto py-2 items-center sticky z-10 left-0 right-0 top-0">
			<div className="brand">
				<NavLink className={"flex items-center gap-1"} to={"/"}>
					<img
						className="w-16 md:w-20 "
						src="https://i.ibb.co/tYWxJPW/akatsuki.png"
						alt=""
					/>
					<p className="font-black italic text-xl hidden md:block">
						Toy Vortex
					</p>
				</NavLink>
			</div>
			<div className="flex  md:flex-row items-center gap-1 md:gap-20">
				<div className="flex text-sm sm:text-base gap-1 md:gap-4">
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/all"}>All Toys</NavLink>
					<NavLink to={"/blogs"}>Blogs</NavLink>
				</div>
				{loading ? (
					<Skeleton cclass={"flex gap-2 sm:gap-4 items-center"} />
				) : user ? (
					<div className="flex items-center gap-1 md:gap-4 text-sm sm:text-base justify-between">
						<NavLink to={"/mytoys"}>My Toys</NavLink>
						<NavLink to={"/add"}>Add Toy</NavLink>
						<NavLink to={"/profile"}>
							<img
								data-tooltip-id="profile"
								data-tooltip-content={user?.displayName}
								className=" w-8 h-8 sm:w-12 sm:h-12 rounded-full  bg-black"
								src={
									user?.photoURL
									// "https://picsum.photos/200"
								}
								alt="Profile"
							/>
						</NavLink>
					</div>
				) : (
					<div className=" w-32 sm:w-48 flex justify-center">
						<NavLink
							className="px-3 border text-white font-bold md:py-2 rounded bg-amber-500"
							to={"/login"}>
							Log In
						</NavLink>
					</div>
				)}
				<Tooltip id="profile" />
			</div>
		</div>
	);
};

export default Header;
