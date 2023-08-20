                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require("../../controllers/thoughtController");


                                                                /* ===================== ROUTES ======================= */
router.route("/").get(getAllThoughts).post(createThought);      /* /api/thoughts                                        */
router.route("/:thoughtId").get(getThoughtById);                /* /api/thoughts/:thoughtId                             */
router.route("/:thoughtId").put(updateThought);                 /* /api/thoughts/:thoughtId                             */
router.route("/:thoughtId").delete(deleteThought);              /* /api/thoughts/:thoughtId                             */
router.route("/:thoughtId/reactions").post(addReaction);        /* /api/thoughts/:thoughtId/reactions                   */

                                                                /* /api/thoughts/:thoughtId/reactions/:reactionId       */
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);


                                                                /* ==================== EXPORT ======================= */
module.exports = router;
