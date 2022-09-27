import { Router } from "express";
import { persons } from "../util/db.mjs";

export default function () {
  const router = Router();

  router.get("/", (req, res) => {
    return res.json({
      persons: persons.length,
      now: new Date(),
    });
  });

  return router;
}
