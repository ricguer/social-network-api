                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../../controllers/userController");


                                                                /* ===================== ROUTES ======================= */
router.route("/").get(getAllUsers).post(createUser);            /* /api/users                                           */
router.route("/:userId").get(getUserById);                      /* /api/users/:userId                                   */
router.route("/:userId").put(updateUser);                       /* /api/users/:userId/friends/:friendId                 */
router.route("/:userId").delete(deleteUser);                    /* /api/users/:userId/friends/:friendId                 */

                                                                /* /api/users/:userId/friends/:friendId                 */
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);


                                                                /* ==================== EXPORT ======================= */
module.exports = router;
