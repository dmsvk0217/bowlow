const Notice = require("../models/Notice.model");

exports.get = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  Notice.get((err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while getting Notice");
    res.json(data);
  });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;

  Notice.findOne(id, (err, data) => {
    if (err)
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Notice with id ${req.params.id}.`,
          findOneNoticeSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not findOne Notice with id " + id,
          findOneNoticeSuccess: false,
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
  const notice = new Notice({
    user_name: req.body.user_name,
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  });

  Notice.create(notice, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while creating Notice");
    res.json(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const notice = new Notice({
    user_name: req.body.user_name,
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
  });

  Notice.update(notice, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while updating Notice");
    res.json(data);
  });
};

exports.delete = (req, res) => {
  console.log("🚀 ~ file: notice.controller.js:79 ~ exports.delete ~ req");
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  console.log("🚀 ~ file: notice.controller.js:84 ~ exports.delete ~ id", id);

  Notice.delete(id, (err, data) => {
    console.log(
      "🚀 ~ file: notice.controller.js:88 ~ Notice.delete ~ data",
      data
    );
    console.log(
      "🚀 ~ file: notice.controller.js:88 ~ Notice.delete ~ err",
      err
    );
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found list with id ${req.params.id}.`,
          deleteNoticeSuccess: false,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Notice with id " + id,
          deleteNoticeSuccess: false,
        });
      }
    } else res.send({ deleteNoticeSuccess: true });
  });
};
