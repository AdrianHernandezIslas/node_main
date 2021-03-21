const router = require("express").Router();
const { addNumber,subNumber} = require("../controllers/NumbersController");

router.get("/add/:numberA/:numberB", addNumber);
router.get("/sub", subNumber);

module.exports = router;
