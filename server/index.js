const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// invoke instance of express
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, () => console.log(`Server started on port ${port}`));


// //////////////////////////////////////////
// BELOW IS FROM ANOTHER SET OF ROUTES

// app.get('/', (req, res) => {
//   res.sendFile('./views/index.html', { root: __dirname });
// });

// app.get('/about', (req, res) => {
//   res.sendFile('./views/about.html', { root: __dirname });
// });

// // redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

// // 404 page
// app.use((req, res) => {
//   res.status(404).sendFile('./views/404.html', { root: __dirname })
// });
