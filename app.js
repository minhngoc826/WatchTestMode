const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const path = require("path")

const rootFolder = path.resolve(__dirname)

app.get("/watch", (req, res) => { res.sendFile(rootFolder + "/index.html"); });

app.get("/backup", (req, res) => { var action = req.query.action console.log("/backup: query = " + ", action = " + action); if (action != undefined) res.json({ "result": true, "body": "Start backup action: " + action, "status": 200 }); else res.json({ "result": false, "body": "query failed", "status": 200 }); });

app.get("/smartswitch/v8/testmode", (req, res) => { var serviceType = req.query.serviceType var hashAccount = req.query.hash console.log("/smartswitch/v8/testmode, serviceType=" + serviceType + ", hashAccount=" + hashAccount); if (serviceType && hashAccount) res.json({ "result": true, "body": "query successful", "status": 200 }); else res.json({ "result": false, "body": "query failed", "status": 200 }); });

// run webservice app.listen(PORT, () => { console.log("App is running on port: " + PORT); });
