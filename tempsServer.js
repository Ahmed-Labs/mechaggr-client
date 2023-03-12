const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

app.get('/album/:id', async (req, res) => {
  const albumId = req.params.id;
  try {
    const images = await getAlbumImages(albumId);
    res.json(images);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

async function getAlbumImages(albumId) {
  console.log(`https://api.imgur.com/3/album/${albumId}/images`);

  const response = await axios.get(
    `https://api.imgur.com/3/album/${albumId}/images`,
    {
      headers: {
        Authorization: 'Client-ID c4d4e58a7665d1d',
      },
    }
  );
  const images = response.data.data.map((image) => ({
    id: image.id,
    link: image.link,
    width: image.width,
    height: image.height,
  }));
  return images;
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});