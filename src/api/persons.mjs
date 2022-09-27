import { Router } from "express";
import { persons } from "../util/db.mjs";

/**
 * @return {Router}
 */
export default function () {
  const router = Router();

  router.get("/persons", async (req, res) => {
    return res.json(persons);
  });

  return router;
}
