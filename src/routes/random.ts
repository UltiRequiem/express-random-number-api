import express from "express";

import is from "@sindresorhus/is";
import randomInteger from "random-int";

const randomRouter = express.Router();

randomRouter.get("/", (request, response) => {
  const min = is.numericString(request.query.min) ? +request.query.min : 1;
  const max = is.numericString(request.query.max) ? +request.query.max : 100;

  if (min >= max) {
    return response.json({
      error: "Minimum value must be less than maximum value.",
    });
  }

  response.json({ result: randomInteger(min, max) });
});

randomRouter.get("/:length", (request, response) => {
  const length = is.numericString(request.params.length)
    ? +request.params.length
    : false;

  if (!length) {
    return response.json({ error: "List length must be a number." });
  }

  const min = is.numericString(request.query.min) ? +request.query.min : 1;
  const max = is.numericString(request.query.max) ? +request.query.max : 100;

  if (min >= max) {
    return response.json({
      error: "Minimum value must be less than maximum value.",
    });
  }

  const result = Array.from({ length }).map(() => randomInteger(min, max));

  response.json({ result });
});

export default randomRouter;
