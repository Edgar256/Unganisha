const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const io = require("socket.io");
require("dotenv/config");

//Environment variables
const API_URL = process.env.API_URL;
const PORT = process.env.PORT || 4400;
const MONGOOSE_CONNECTION_URI = process.env.CONNECTION_STRING;

//enabling Cross Site Origin Requests
app.use(cors());
app.use("*", cors());

//Logging middleware
app.use(morgan("tiny"));

//Middleware for parsing incoming requests with JSON payloads
app.use(express.json());

//Route imports
// const adminRoutes = require("./routes/admins");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

//Routes middleware
// app.use(`${API_URL}/admins`, adminRoutes);
app.use(`${API_URL}/users`, userRoutes);
app.use(`${API_URL}/posts`, postRoutes);
app.use(`${API_URL}/comments`, commentRoutes);

//Database connection
mongoose
	.connect(MONGOOSE_CONNECTION_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connection ready...");

		io.on("connection", (socket) => {
			let chat = collection("chats");

			// Create function to send status
			sendStatus = function (s) {
				socket.emit("status", s);
			};

			// Get chats from mongo collection
			chat
				.find()
				.limit(100)
				.sort({ _id: 1 })
				.toArray(function (err, res) {
					if (err) {
						throw err;
					}

					// Emit the messages
					socket.emit("output", res);
				});

			// Handle input events
			socket.on("input", function (data) {
				let name = data.name;
				let message = data.message;

				// Check for name and message
				if (name == "" || message == "") {
					// Send error status
					sendStatus("Please enter a name and message");
				} else {
					// Insert message
					chat.insert({ name: name, message: message }, function () {
						io.emit("output", [data]);

						// Send status object
						sendStatus({
							message: "Message sent",
							clear: true,
						});
					});
				}
			});

			// Handle clear
			socket.on("clear", function (data) {
				// Remove all chats from collection
				chat.remove({}, function () {
					// Emit cleared
					socket.emit("cleared");
				});
			});
		});
	})
	.catch((error) => {
		console.log(error.message);
	});

//Default route
app.get(`${API_URL}`, (req, res) => {
	res.send("Server started");
});

//Booting Server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}${API_URL}`);
});
