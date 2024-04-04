// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/Post'); // Import the Post model
const cors = require('cors'); 
// Create an instance of Express app
const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(cors());
// Define a route to handle POST requests to /api/posts
app.post('/api/posts', async (req, res) => {
    try {
        // Check if imageUrl and caption are present in the request body
        if (!req.body.imageUrl || !req.body.caption) {
          return res.status(400).json({ error: 'Both imageUrl and caption are required' });
        }
    const newPost = new Post({
      imageUrl: req.body.imageUrl,
      caption: req.body.caption
    });

    // Save the post to the database
    await newPost.save();

    // Respond with a success message
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
