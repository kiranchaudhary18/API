const express = require('express');
// import express from './express';
const app = express();
const cors= require('cors');

app.use(cors())
app.use(express.json());



const grid=[
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: '1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true", title:'Infinix Note 12:             AMOLED    HelloG88 Soc!' , subtitle1: 'ATC Android ToTo C..',subtitle2: ' 4.2M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true", title:'My first UX Design case study - This got me my first job.' , subtitle1: 'Saptrashi prakash',subtitle2: ' 4.8k views . 1 year ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'My mix' , subtitle1: 'Lopamudra Mitra  ',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true", title:'UX Design-What is it?(From AJ&Smart)' , subtitle1: 'AJ&Smar',subtitle2: ' 150kM views . 3 years ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Mix-Mombati|Mohon Sharif | Dhakaiya Dose|Mahib Ahsan' , subtitle1: 'Mohon Sharif, Odd Signature,Shayan',subtitle2: ' ' , subtitleimg:""},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true", title:'48 Visa Free' , subtitle1: 'Nadir On the Go',subtitle2: ' 1.7M views . 1 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true", title:'14 Advanced Tip To Design FASTER in Figma' , subtitle1: 'Mizko',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
  {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
]

// let studentsdata = {
//     "Rahul Sharma": {
//       email: "rahul.sharma@codinggita.com",
//       websites: [
//         "http://rahuls-portfolio.com",
//         "http://rahulblogs.com",
//         "http://rahulprojects.com"
//       ]
//     },
//     "Anjali Mehta": {
//       email: "anjali.mehta@codinggita.com",
//       websites: [
//         "http://anjalisdesigns.com",
//         "http://anjalitech.com",
//         "http://anjalicode.com"
//       ]
//     }
//   };

  app.get("/grid",(req,res) => {
    res.json(grid);
  });

  app.get("/grid/:img",(req,res) => {
    const student = grid[req.params.img];
    console.log(student)
        if(student){
            res.json(student);
        }
        else{
            res.status(404).send("images not fount");
        }
  });
  app.get("/gird/:img/smallimg",(req,res) => {
    const student = grid[req.params.img];
    console.log(grid.smallimg)
        if(student){
            res.json({ student:student.smallimg});
        }
        else{
            res.status(404).send("images not fount");
        }
  });

  // app.post("/grid",(req,res) => {
  //   const student = grid[req.params.name];
  //   if(student){
  //       return res.status(400).send("name already exists");
  //   }
  //   else{
  //   studentsdata[req.params.name] = req.body
  //   res.status(201).send("student ${name} created");
  //   };
  // });
  // app.post("/studentsdata/:name/website",(req,res) => {
  //   const student = studentsdata[req.params.name];
  //   const website = req.body.website;
  //   if(!student){
  //       return res.status(400).send("student not found");
  //   }
  //   else{
  //       student.websites.push(website);
  //       res.send("new website added");
  //   };
  // });


app.get("/grid")
  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port $ {PORT}`);
});
