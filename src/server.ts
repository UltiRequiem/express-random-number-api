import express from "express";
import randomRouter from "./routes/random";
import redirectRouter from "./routes/redirect";

const app = express();

app.get("/", redirectRouter);
app.use("/random", randomRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
