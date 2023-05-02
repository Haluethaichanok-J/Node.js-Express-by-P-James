import express from "express";
const webServer = express();

// code down below
/* สร้าง path กับ application code */
webServer.get("/",(req,res)=>{
res.send("This is Root Route")
});
webServer.get("/news",(req,res)=>{
    const news = [{name:"news 1", detail:"detail 1"},
{name:"news 2", detail:"detail 2"},
{name:"news 3", detail:"detail 3"}]
res.json(news)
});
webServer.get("/users",(req,res)=>{
const users= [
    {userId: "mock-id-1"},
    {name: "mock-id-2"},
    {name: "mock-id-3"}
]
res.json(users)
});
webServer.get("/me",(req,res)=>{
    const me=[{
        name:"mock-name",
        role: "user",
        picture: "https://shorturl.at/qtFJM"
    }]
res.json(me)
});
webServer.get("/health-check",(req,res)=>{
res.send("Server is fine!")
});

/* สร้าง server */
webServer.listen(3001, "127.0.0.1",()=>{
console.log("Sever is working!!!")
});