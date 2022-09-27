import { Router } from "express";
import info from "./info.mjs";

import persons from "./persons.mjs";

const router = Router();

router.use("/api", persons());
router.use("/info", info());

export default router;
