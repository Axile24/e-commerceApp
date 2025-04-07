import  express  from "express";

const authRoutes = express.Router(); 
authRoutes.get("/ping", (req: any, res: any) => {
return res.status(200).json({ message: "pong" });
});

export default authRoutes;