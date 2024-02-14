const express = require("express")
const dataRouter = express.Router()
// import from controller
const {addChatbot,test,getChatbot,addRag,getRag,updateRag,getRagDetail, addRagAdded}= require("../controller/data.controller")

dataRouter.get("/kaiwa",test)
dataRouter.post("/kaiwa",addChatbot)
dataRouter.get("/chatbots",getChatbot)
dataRouter.post("/addrag",addRag)
dataRouter.get("/addrag",getRag)

dataRouter.post("/updaterag", updateRag);
dataRouter.post("/getrag",getRagDetail)
dataRouter.post("/ragadded",addRagAdded)


module.exports= dataRouter