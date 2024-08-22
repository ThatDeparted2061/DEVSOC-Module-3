import { Router } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
import fs from "fs";
import path from "path"

const router = Router();

router.get("/", (req, res) => {
  
  fs.readFile(__dirname+'/data.json',"UTF-8", function (err, data) {
    if (err) {
      console.error(err);
    }
    
    
    const list = JSON.parse(data);
    console.log(list);
    res.render("../views/admin.ejs",{movieList:list});
  });

  
});

export default router;
