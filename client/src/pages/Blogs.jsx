import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";
import useTitle from "../hooks/useTitle";
import { AiOutlineDown } from "react-icons/ai";
import { refresh } from "aos";

const Blogs = () => {
	useTitle("Blogs ");

	const items = [
		{
			title: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
			content:
				"An access token is a credential used by a client application to access specific resources or APIs on behalf of a user. It is obtained after successful user authentication to secure the api and something like authorization. Access tokens may have an customize expiration time. From the client end each data fetching request includes the access token to prove its identity and if the user have permissions to access the data or not.  On the other hand Refresh token are the uppers stage of user authorization. Its works when the access token is expired or invalided. It is issued alongside the access token during authentication and securely stored on the client side. Though storing both access token and retfresh token is critical and may lead to immense security issues. In general these tokens are stored in http-only cookies or localstorage(which is second best option)  ",
		},
		{
			title: "Compare SQL and NoSQL databases?",
			content: `SQL databases are based on a structured relational model with predefined schemas and strong data integrity. They support complex queries and transactions. SQL databases are vertically scalable and examples include MySQL and PostgreSQL. 
        
        On the other hand NoSQL databases use various data models like "key-value" and document model which makes it more simple and flexible.
         Its also schema-less, and provide flexibility in handling unstructured and evolving data. NoSQL prioritize scalability and performance over strong consistency, and do not support joins between tables. NoSQL databases are horizontally scalable. One of the most popular NoSQL database is MongoDB`,
		},
		{
			title: "What is express js? What is Nest JS?",
			content:
				" Express.js is a framework for Node.js. It provides a set of tools and features that simplify the process of building web applications and APIs. It offers a lightweight and flexible approach to handle HTTP requests, routing, middleware, and managing server-side logic. Express.js is widely used and has a large ecosystem of plugins and extensions available. Without expressJS writting code for nodejs is more time consuming. Thought expressJS works much simpler and greate for learning backend while coding. On the other hand nestJS is a typeScript based framework which is used to build scalable and efficient server-side applications.  ",
		},
		{
			title: "What is MongoDB aggregate and how does it work?",
			content:
				"We often require to analyze the data we get from databases. MongoDB aggregate makes developers life simpler by performing advanced data analysis and manipulation operations on collections of documents. It allows you to perform complex computations, transformations, and aggregations using a pipeline of stages. In example if we need the avarage job success rate of Programming Hero graduates theb MongoDB aggregate can help us by analyzing the learners data groups of the documents by the jobholder 'heros' field and calculates the average success rate using the $avg aggregation operator.",
		},
	];
	return (
		<div className="my-10 mx-auto md:w-9/12">
			<Accordion className="p-10 rounded-xl text-xl" allowZeroExpanded>
				<div
					className="absolute z-[-1] opacity-10 top-0 left-0 right-0 bottom-0"
					style={{
						backgroundImage:
							'url("https://i.ibb.co/G0cD1kX/q.png")',
						backgroundSize: "5%",
					}}
				/>
				{items.map((item, index) => (
					<AccordionItem className="" key={index}>
						<AccordionItemHeading className="my-2">
							<AccordionItemButton className="flex items-center justify-between gap-2 bg-slate-300 py-4 px-3 rounded-sm">
								<span className="w-11/12">{item.title}</span>
								<AiOutlineDown size={25} />
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className="p-4 rounded bg-gray-50 font-light text-justify ">
							{item?.content}
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Blogs;
