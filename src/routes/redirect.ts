import express from "express";

const redirectRouter = express.Router();

redirectRouter.get("/", (_request, response) => {
  const repoLink = `https://github.com/UltiRequiem/express-random-number-api`;

  response.redirect(repoLink);
});

export default redirectRouter;
