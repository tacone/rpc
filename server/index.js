// server/index.ts
import express from "express";
import { rpcHandler } from "typed-rpc/lib/express.js";
import { myService } from "./myService.js";
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    // console.log(req.headers)
    // console.log(req.body)
    // console.log(req.query)
    next();
});
app.post("/api", rpcHandler(myService));
app.listen(3000);
console.log("Server started on port 3000");
