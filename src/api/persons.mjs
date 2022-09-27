import { Router } from "express";
import { persons } from "../util/db.mjs";
import ERROR_CODES from "../util/error_codes.mjs";

/**
 * @return {Router}
 */
export default function () {
  const router = Router();

  router.get("/persons", async (req, res) => {
    return res.json(persons);
  });

  router.get("/persons/:id", (req, res) => {
    if (!req.params.id.match(/\d+/)) {
      return res.status(400).send({
        message: "ID must be a number",
        code: ERROR_CODES.ID_NOT_NUMBER,
      });
    }

    const id = parseInt(req.params.id);

    const person = persons.find((p) => p.id === id)

    if (!person) {
      return res.status(404).send({message: "Person not found. Check the ID and try again.", code: ERROR_CODES.NOT_FOUND})
    }

    return res.send(person);
  });

  return router;
}
