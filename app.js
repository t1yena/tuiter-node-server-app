import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";

import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";

// mongoose.connect('mongodb://localhost:27017/webdev_tuiter');

const app = express()
app.use(cors())
app.use(express.json());

const CONNECTION_STRING = `${process.env.DB_CONNECTION_STRING}`;
mongoose.connect(CONNECTION_STRING);

TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);