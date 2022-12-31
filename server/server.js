const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.static(path.join(__dirname, "front/build")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

require("./routes/user.routes")(app);
require("./routes/product.routes")(app);
require("./routes/cart.routes")(app);
require("./routes/order.routes")(app);
require("./routes/review.routes")(app);
require("./routes/notice.routes")(app);
require("./routes/event.routes")(app);

const port = 7777;
app.listen(port, function () {
  console.log(`listening on ${port}`);
});
