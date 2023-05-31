const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Toy CRUD LOADING");
});

const verifyJWT = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (!authorization) {
		return res
			.status(401)
			.send({ error: true, message: "unauthorized access" });
	}
	const token = authorization.split(" ")[1];
	jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
		if (err) {
			return res
				.status(401)
				.send({ error: true, message: "unauthorized access" });
		}
		req.decoded = decoded;
		next();
	});
};

const uri = process.env.DB_ACCESS_SECRET;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	client.connect();
	client.db("admin").command({ ping: 1 });
	console.log("Ahoy Admin! Welocome Onboard!");

	const toysCollection = client.db("ToyVortex").collection("toys");

	const indexKeys = { name: 1 };
	const indexOptions = { name: "titleCategory" };
	const result = toysCollection.createIndex(indexKeys, indexOptions);

	app.post("/jwt", (req, res) => {
		const user = req.body;
		const token = jwt.sign(user, process.env.TOKEN_SECRET, {
			expiresIn: "1h",
		});
		res.send({ token });
	});

	app.post("/addtoy", async (req, res) => {
		const doc = req.body;
		doc.price = parseInt(doc.price);
		console.log(doc);
		const result = await toysCollection.insertOne(doc);
		res.send(result);
	});

	app.get("/all", async (req, res) => {
		const result = await toysCollection.find({}).limit(20).toArray();
		res.send(result);
	});

	app.get("/search/:text", async (req, res) => {
		const toyName = req.params.text;
		const result = await toysCollection
			.find({
				name: { $regex: toyName, $options: "i" },
			})
			.limit(20)
			.toArray();

		res.send(result);
	});

	app.get("/toy/:id", async (req, res) => {
		const id = new ObjectId(req.params.id);
		const query = { _id: id };
		const result = await toysCollection.findOne(query);
		res.send(result);
	});

	app.get("/category/:category", async (req, res) => {
		const category = req.params.category;
		const query = { sub_category: category };
		const result = await toysCollection.find(query).toArray();
		res.send(result);
	});

	app.get("/mytoys", verifyJWT, async (req, res) => {
		const decoded = req.decoded;

		let sortValue = {};
		if (req.query.sort === "asc") {
			sortValue = { price: 1 };
		}
		if (req.query.sort === "desc") {
			sortValue = { price: -1 };
		}

		if (decoded.email !== req.query.email) {
			return res
				.status(403)
				.send({ error: 1, message: "forbidden access" });
		}

		let query = {};
		if (req.query?.email) {
			query = { seller_email: req.query.email };
		}
		let priceSort = {};
		const result = await toysCollection
			.find(query)
			.sort(sortValue)
			.toArray();
		res.send(result);
	});

	app.delete("/delete/:id", async (req, res) => {
		const id = req.params.id;
		const query = { _id: new ObjectId(id) };
		const result = await toysCollection.deleteOne(query);
		res.send(result);
	});

	app.put("/update", async (req, res) => {
		const {
			_id,
			name,
			sub_category,
			seller_name,
			seller_email,
			price,
			ratings,
			details,
			photo,
			quantity,
		} = req.body;

		const newData = {
			$set: {
				name,
				sub_category,
				seller_name,
				seller_email,
				price,
				ratings,
				details,
				photo,
				quantity,
			},
		};

		const filter = {
			_id: new ObjectId(_id),
		};
		const options = { upsert: false };
		const result = await toysCollection.updateOne(filter, newData, options);
		res.send(result);
	});
}
run().catch(console.dir);

app.listen(port, () => {
	console.log("my server is running bruh, its on - ", port);
});
