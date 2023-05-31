
const Banner = () => {
	return (
		<div className="bg-indigo-400 py-20 rounded-lg ">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between flex-col  md:flex-row gap-10">
					<div
						data-aos="fade-right"
						className="md:w-1/2 text-center ">
						<h1 className="text-4xl text-white font-bold mb-6">
							Welcome to Toy Vortex!
						</h1>
						<p className="text-white text-lg mb-8">
							Explore our amazing collection of Action Figures.
						</p>
						<button className="bg-white  shadow-lg   text-blue-500 rounded-md px-6 py-3 text-lg font-bold  hover:bg-blue-100 transition-colors duration-300">
							Shop Now
						</button>
					</div>
					<div className="md:w-1/2">
						<img
							src="https://i.ibb.co/BjcLT6J/luffy-smile.gif"
							alt="Toy World"
							className="w-full rounded-xl "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
