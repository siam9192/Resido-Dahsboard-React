const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

app.listen(PORT)

app.get('/video',async(req,res)=>{

  try{
   const {url} = req.query;
   console.log(url)
   if(!ytdl.validateURL(url)){
    return res.status(400).json({error:'Invalid video url'})
   }

   const info = await ytdl.getInfo(url);

  
   const format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
  
  // res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`);
    ytdl(url, { format }).pipe(res);
  } catch (error) {
   
    res.status(500).json({ error: 'Internal Server Error' });
  }
})