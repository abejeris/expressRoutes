const express = require("express");

const router = express.Router();

const posts = [
	{
		title: "pirmas_pavadinimas",
		id: 1,
		body: "Cia yra pirmo pavadinimo ir pirmo aidy vidinis bodis",
	},
	{
		title: "antras_pavadinimas",
		id: 2,
		body: "Kazkoks stringas antram irasui sukurti",
	},
	{
		title: "trecias_pavadinimas",
		id: 3,
		body: "Ir galiausias pats paskutinis irasas kad veiktu ir paskutinio posto id su numeriu 3",
	},
	{
		title: "ketvirtas_pavadinimas",
		id: 4,
		body: "Ir dar pats paskutinis irasas kad veiktu ir paskutinio posto id su numeriu 4",
	},
];

router.get("/", (req, res) => {
	const { title } = req.query;
	const postByTitle = posts.filter((post) => post.title.includes(title));
	if (title) {
		res.send(postByTitle);
	} else res.send(posts);
});

router.get("/:id", (req, res) => {
	const postId = parseInt(req.params.id);
	const postIndex = posts.findIndex((post) => post.id === postId);

	if (postIndex !== -1) {
		res.send(posts.find((post) => post.id === parseInt(req.params.id)));
	} else {
		res.status(404).send(`such index ${postId} was not found`);
	}
});

router.post("/", (req, res) => {
	posts.push(req.body);
	res.send(`Post with title ${req.body.title} has been added`);
});

router.put("/:id", (req, res) => {
	const postId = parseInt(req.params.id);
	const { title, body } = req.body;

	const postIndex = posts.findIndex((post) => post.id === postId);

	if (postIndex !== -1) {
		posts[postIndex] = { id: postId, title, body };
		res.send(`post ${postId} was replaced successfully.`);
	} else {
		res.status(404).send(`Post ${postId} not found`);
	}
});

router.delete("/:id", (req, res) => {
	const postId = parseInt(req.params.id);
	const postIndex = posts.findIndex((post) => post.id === postId);

	if (postIndex !== -1) {
		posts.splice(postIndex, 1);
		res.send(`Post with number ${postId} id was deleted successfully`);
	} else {
		res
			.status(404)
			.send(`Post with number ${postId} was not found in the database`);
	}
});
module.exports = router;
