const Event = require("../models/event.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  Event.get((err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while getting Event");
    res.json(data);
  });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Event.findOne(id, (err, data) => {
    if (err)
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Event with id ${req.params.id}.`,
          findOneEventSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not findOne Event with id " + id,
          findOneEventSuccess: false,
        });
      }
    res.json(data);
  });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  //uuid 생성?
  const event = new Event({
    id: req.body.id,
    user_name: req.body.user_name,
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  });

  Event.create(event, (err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while creating Event");
    res.json(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const event = new Event({
    id: req.body.id,
    user_name: req.body.user_name,
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  });

  Event.update(event, (err, data) => {
    if (err)
      res.status(500).json(data || "Some error occured while updating Event");
    res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  console.log("🚀 ~ file: event.controller.js:86 ~ exports.delete ~ id", id);

  Event.delete(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteEventSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Event with id " + id,
          deleteEventSuccess: false,
        });
      }
    } else res.send({ deleteEventSuccess: true });
  });
};
