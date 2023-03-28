const express = require("express");

const server = express();

// SİHRİNİZİ GÖSTERİN
server.use(express.json());

const userCars = require("./cars/cars-router");

server.use("/api/cars", userCars);

server.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Server is up and running!",
  });
});

module.exports = server;
