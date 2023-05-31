import React from "react";
import { BsTagsFill, BsGiftFill } from "react-icons/bs";
import { FaDollarSign, FaShippingFast } from "react-icons/fa";
import { ImWink } from "react-icons/im";
const Work = () => {
	return (
		<section className="container mx-auto mt-20 mb-5">
			<h3 className=" text-4xl text-center tracking-[10px] my-10 font-light">
				Work with Us!
			</h3>
			<div className="grid md:grid-cols-3 md:grid-rows-2 gap-2">
				<div
					data-aos="fade-right"
					className="row-span-2  border flex flex-col justify-center gap-6 bg-gray-950 text-center p-4  rounded-md text-gray-500">
					<h4 className="text-gray-50 text-2xl ">
						Anime Action Lover? <br /> Let’s work together!
					</h4>
					<p className="w-2/3 mx-auto">
						We want to share our Passion all over the world! For
						that reason we need your help! We are looking for true
						anime lovers who can promote our products and became
						part of our Crew! <br /> <br /> Sounds like you?
					</p>
					<button className="rounded-2xl w-1/2 mx-auto bg-rose-600 text-white hover:scale-110 duration-150 px-4 py-2">
						Apply Now
					</button>
				</div>
				<div className="flex flex-col row-span-2 gap-2">
					<div data-aos="fade-down" className=" md:h-1/2">
						<img
							className="object-cover h-full w-full rounded-lg"
							src="https://i.ibb.co/zGYrFMc/luffyg5.jpg"
							alt=""
						/>
					</div>
					<div
						data-aos="fade-up"
						className="border md:h-1/2 bg-rose-300 rounded-lg p-4 flex flex-col justify-center">
						<h4 className="font-bold text-2xl tracking-wider">
							Your Benifits!
						</h4>
						<ul className="p-4">
							<li className="flex gap-2 items-center">
								<BsTagsFill /> Discount codes
							</li>
							<li className="flex gap-2 items-center">
								<BsGiftFill /> Free Products
							</li>
							<li className="flex gap-2 items-center">
								<FaDollarSign /> Sales Commision
							</li>
							<li className="flex gap-2 items-center">
								<FaShippingFast /> Free & Fast Shipping
							</li>
							<li className="flex gap-2 items-center">
								<ImWink /> Sneak Peek
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col row-span-2 gap-2">
					<div data-aos="fade-down" className="  md:h-1/2">
						<img
							className="object-cover h-full w-full rounded-lg"
							src="https://i.ibb.co/p4c1RWs/nakama.jpg"
							alt=""
						/>
					</div>
					<div data-aos="fade-down" className="border md:h-1/2">
						<img
							className="object-cover h-full w-full rounded-lg"
							src="https://i.ibb.co/1L75Zyv/aka.jpg"
							alt="Akatsuki"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
