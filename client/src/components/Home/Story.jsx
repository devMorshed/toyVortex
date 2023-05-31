import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Story = () => {
	return (
		<div
			className="relative bg-cover bg-center bg-fixed rounded-lg"
			style={{
				backgroundImage: `url('https://i.ibb.co/dQ6sskG/sunny.jpg')`,
			}}>
			<div className="max-w-4xl mx-auto py-24 px-4">
				<div className="flex items-center justify-between">
					<div className="sm:w-1/2">
						<h1
							className="text-4xl text-white font-mono mb-4"
							data-aos="fade-up">
							Get To Know Us
						</h1>
						<h2
							className="text-xl text-white mb-8"
							data-aos="fade-up"
							data-aos-delay="200"></h2>
						<p
							className="text-white font-light mb-8"
							data-aos="fade-up"
							data-aos-delay="400">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Itaque modi ullam temporibus est sed provident
							beatae reiciendis, quibusdam nostrum autem iure fuga
							mollitia alias obcaecati perspiciatis earum veniam
							nemo quae!
						</p>
						<button
							className="bg-rose-300 text-black rounded-md px-6 py-3 text-lg font-bold shadow-md hover:bg-blue-100 transition-colors duration-300 flex items-center relative"
							data-aos="fade-up"
							data-aos-delay="600">
							Our Story
							<span className="ml-2 opacity-0 absolute right-0 transition-opacity duration-300 group-hover:opacity-100">
								<RiArrowRightSLine />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
