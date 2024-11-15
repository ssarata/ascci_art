
import express from "express";
import dotenv from "dotenv";
import registrateRouter from "./router.js";
dotenv.config();

const app = new express();
const PORT = process.env.PORT || 4001;
//const route=new RouteArtWork()
app.use(express.json())
//app.use('/artworks',route.registrateRouter())
registrateRouter(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
});

export default app; 

