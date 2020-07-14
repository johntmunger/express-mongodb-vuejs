const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// add posts

// delete posts

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect('mongodb+srv://adminabcd:1234@fullstackapp.jnuvp.mongodb.net/fullstackApp?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });

  return client.db('fullstack-app').collection('posts');
}


module.exports = router;