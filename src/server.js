const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
const connnectionString = "mongodb://0.0.0.0:27017/todoapp";
mongoose.connect(connnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("database connected")
})
    .catch((e) => {
        console.log("error", e);
    });

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


const todoSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    isComplete: Boolean
});

const Card = mongoose.model('Card', todoSchema);

app.use(express.json());

app.post('/api/card', async (req, res) => {
    const { id, title, description, isComplete } = req.body;

    const newCard = new Card({
        id: id,
        title: title,
        description: description,
        isComplete: isComplete
    });

    await newCard.save()
        .then(() => {
            res.status(200).send('Card stored successfully');
        })
        .catch(error => {
            res.status(500).send('Error storing card');
        });
});

app.get('/api/card', async (req, res) => {
    try {
        const cards = await Card.find();
        console.log(cards);
        res.send(cards);

    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error fetching cards');
    }
})

app.delete('/api/card/:id', async (req, res) => {
    try {
        const deletedCard = await Card.findOneAndDelete({ id: req.params.id });

        if (deletedCard) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, error: "Card not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to delete the card" });
    }
});

app.put('/api/card/:id', async (req, res) => {
    try {
        const cardId = req.params.id;
        const updatedCard = req.body;

        // Find the card by ID and update the isComplete property
        const updated = await Card.findOneAndUpdate(
            { id: cardId },
            { $set: { isComplete: updatedCard.isComplete } },
        );

        if (updated) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, error: "Card not found" });
        }
    } catch (error) {
        console.error("Failed to update the card:", error);
        res.status(500).json({ success: false, error: "Failed to update the card" });
    }
});



