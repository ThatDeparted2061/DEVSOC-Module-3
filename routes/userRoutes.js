import { Router } from "express"
import bodyParser from "body-parser"

const router=Router()

router.get("/", (req,res) =>{
    res.render("user.ejs")
})

export default router;