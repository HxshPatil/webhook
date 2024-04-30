const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const WebhookPayload = require('./models/payload'); // Import the WebhookPayload model
const cors = require('cors');

const app = express();
// app.use(cors());
app.use(bodyParser.json());
const port = 6000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://harsh01top:yamsVHt4ic7V1Ay2@cluster0.alm5xbp.mongodb.net/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Webhook endpoint
app.post('/cart/update', async (req, res) => {
  console.log('Received webhook payload:', req.body);
  
  try {
    // Create a new document using the WebhookPayload model
    const newPayload = new WebhookPayload({
      payload_id: req.body.id, // Assuming the ID from the payload is used as payload_id
      line_items: req.body.line_items
    });

    // Save the document to the database
    await newPayload.save();
    
    console.log('Payload saved to the database');
    res.sendStatus(200); // Respond with a success status
  } catch (error) {
    console.error('Error saving payload:', error);
    res.sendStatus(500); // Respond with an error status
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
