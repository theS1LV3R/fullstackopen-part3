import { Router } from "express";

import persons from "./persons.mjs";

const router = Router();

router.use("/api", persons());

export default router;
