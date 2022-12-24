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
    name: req.body.name,
    price: req.body.price,
    content: req.body.content,
    image: req.body.image,
    type: req.body.type,
    category1: req.body.category1,
    category2: req.body.category2,
  });

  Notice.update(notice, (err, data) => {
    if (err)
      res.state(500).json(data || "Some error occured while updating Notice");
    res.json(data);
  });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ data: "Content can not be empty" });
  }

  const id = req.params.id;
  Notice.delete(id, (err, data) => {
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
