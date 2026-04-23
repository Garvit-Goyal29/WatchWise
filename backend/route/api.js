import userQuery from "../controller/userQuery.js";
import express  from 'express'
const router = express.Router();
router.post('/userQuery',userQuery);
export default router;