import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
// Quotes array
const quotes = [
    { id: 1, by: "Socrates", quote: "The only true wisdom is in knowing you know nothing." },
    { id: 2, by: "Aristotle", quote: "Knowing yourself is the beginning of all wisdom." },
    { id: 3, by: "Plato", quote: "Wise men speak because they have something to say; fools because they have to say something." },
    { id: 4, by: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
    { id: 5, by: "Sigmund Freud", quote: "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways." },
    { id: 6, by: "Carl Jung", quote: "Who looks outside, dreams; who looks inside, awakes." },
    { id: 7, by: "Albert Einstein", quote: "Imagination is more important than knowledge." },
    { id: 8, by: "Friedrich Nietzsche", quote: "He who has a why to live can bear almost any how." },
    { id: 9, by: "Marcus Aurelius", quote: "You have power over your mind - not outside events. Realize this, and you will find strength." },
    { id: 10, by: "Lao Tzu", quote: "A journey of a thousand miles begins with a single step." },
    { id: 11, by: "Immanuel Kant", quote: "Science is organized knowledge. Wisdom is organized life." },
    { id: 12, by: "Rene Descartes", quote: "I think, therefore I am." },
    { id: 13, by: "Epictetus", quote: "It's not what happens to you, but how you react to it that matters." },
    { id: 14, by: "Jean-Paul Sartre", quote: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does." },
    { id: 15, by: "John Locke", quote: "The only fence against the world is a thorough knowledge of it." },
];

// Default route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Route to get all quotes or a random quote
app.get('/api/quotes', (req, res) => {
    const random = req.query.random;

    // If the `random` query parameter is set, return a random quote
    if (random === 'true') {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(randomQuote);
        res.send(randomQuote)
    } else {
        // Otherwise, return all quotes
        res.json(quotes);
        res.send(quotes)
    }
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log("Listening on Port:: http://localhost:", port);
});
