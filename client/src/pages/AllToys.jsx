import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { myContext } from "../contextProvider/MyContextProvider";
import useTitle from "../hooks/useTitle";

const VolList = () => {
  useTitle("All Toys")
	const navigate = useNavigate();

	const [toys, setToys] = useState();
	const { user } = useContext(myContext);

	useEffect(() => {
		fetch("https://toy-vortex.vercel.app/all")
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, []);

	const handleToySearch = (e) => {
		e.preventDefault();
		const searchText = e.target[0].value;

		fetch(`https://toy-vortex.vercel.app/search/${searchText}`)
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
				if (data.length === 0) {
					toast(`${searchText} Not Found`);
				}
				e.target.reset();
			})
		
	};

	return (
		<div className="container mx-auto">
			<div className="p-2">
				<div className="w-2/3 mx-auto">
					<form
						onSubmit={(e) => {
							handleToySearch(e);
						}}
						className="flex max-w-xl mx-auto items-center relative">
						<input
							className=" w-full rounded-md p-3 border border-black "
							type="search"
							name="search"
							required
							id=""
							placeholder="Search Toys ..."
						/>
						<button
							type="submit"
							className="absolute top-0 border border-black border-s-0 bottom-0 px-6 right-0 hover:bg-gray-400  rounded-e-md bg-base-200 bg-gray-300">
							<AiOutlineSearch size={35} />
						</button>
					</form>
				</div>
			</div>
			{/* 
      table =--------------------------------------------------------- */}

			<h3 className="text-center font-light tracking-wider text-4xl my-6">
				All Toys
			</h3>
			<div className="overflow-auto  my-10 border-4  shadow-xl h-[calc(100vh-500px)]">
				{toys?.length === 0 ? (
					<div className="text-center my-20">
						<p>No Toys Found By This Name. Search Again</p>
					</div>
				) : (
					<table className="min-w-full relative divide-y divide-gray-400">
						<thead className="bg-gray-50 p-4 sticky top-0">
							<tr>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
									no
								</th>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
									Toy Name
								</th>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
									Sub-category
								</th>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
									Price
								</th>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
									Available
								</th>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider ">
									Seller
								</th>
								<th className="py-3   text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="bg-white text-center divide-y divide-gray-200">
							{toys?.map(
								(
									{
										_id,
										name,
										sub_category,
										price,
										quantity,
										seller_name,
									},
									index
								) => (
									<tr
										key={_id}
										className="hover:bg-gray-200 ">
										<td className="py-4  ">{index + 1}</td>
										<td className="py-4  ">{name}</td>
										<td className="py-4  ">
											{sub_category}
										</td>
										<td className="py-4  ">${price}</td>
										<td className="py-4  ">
											{quantity} pc's
										</td>
										<td className="py-4  ">
											{seller_name}
										</td>
										<td className="py-4  ">
											<Link to={`/toy/${_id}`}>
												<button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
													Details
												</button>
											</Link>
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				)}
			</div>

			{/* d=========================================== */}
		</div>
	);
};

export default VolList;
