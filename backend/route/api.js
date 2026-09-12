import userQuery from "../controller/userQuery.js";
import signup from "../controller/signupController.js";
import express  from 'express'
const router = express.Router();
router.post('/userQuery',userQuery);
router.post('/signup', signup);
export default router;