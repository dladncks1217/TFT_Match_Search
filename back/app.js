const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const cookieParser = require('cookie-parser');
// const session = require('express-session');

require("dotenv").config();

const indexRouter = require("./routes/index");
const APIRequestRouter = require("./routes/APIRequest");

// const { sequelize } = require("./models");
const app = express();

// sequelize.sync();
app.set("port", process.env.PORT);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SECRET));

//passport

app.use("/", indexRouter);
app.use("/", APIRequestRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 대기중");
});
