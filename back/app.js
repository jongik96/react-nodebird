const express = require("express");
const app = express();
const dotenv = require("dotenv");
const postsRouter = require("./routes/posts");
dotenv.config();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");
const path = require("path");
const db = require("./models");

const cors = require("cors");
const passportConfig = require("./passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const morgan = require("morgan");
const hpp = require("hpp");
const helmet = require("helmet");

passportConfig();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "http://whddlr.com",
    credentials: true,
  })
);

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === "production" && ".whddlr.com",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

app.get("/", (req, res) => {
  res.send("Server Run~");
});

app.listen(80, () => {
  console.log(" 서버 실행 중 ");
});
