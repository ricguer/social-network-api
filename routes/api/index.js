                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

                                                                /* ===================== ROUTES ======================= */
router.use("/users", userRoutes);                              /* /api/users                                            */
router.use("/thoughts", thoughtRoutes);                        /* /api/thoughts                                         */


                                                                /* ==================== EXPORT ======================= */
module.exports = router;
