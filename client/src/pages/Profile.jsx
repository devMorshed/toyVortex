import React, { useContext } from "react";
import { myContext } from "../contextProvider/MyContextProvider";
import useTitle from "../hooks/useTitle";

const Profile = () => {
	useTitle("Profile");

	const { handleSignOut } = useContext(myContext);

	return (
		<div className="flex flex-col gap-10 items-center justify-center h-[calc(100vh-292px)]">
			<button
				className="px-4 py-3 border rounded bg-gray-200"
				onClick={() => {
					handleSignOut();
				}}>
				Log out
			</button>
		</div>
	);
};

export default Profile;
