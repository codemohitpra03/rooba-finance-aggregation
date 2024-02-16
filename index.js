require('dotenv').config()
const express = require('express');

const {connectToMongoDB} = require('./connect.js');
const User = require('./models/User.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB

connectToMongoDB()

app.use(express.json());



// Route to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error retrieving users');
    }
});

// Route to get aggregated user data
app.get('/user-stats', async (req, res) => {
    try {
        const userStats = await User.aggregate([
            {
                $group: {
                    _id: null,
                    totalUsers: { $sum: 1 },
                    averageAge: { $avg: "$age" },
                    usersByCountry: {
                        $push: {
                            country: "$country",
                            count: 1
                        }
                    }
                }
            },
            {
                $unwind: "$usersByCountry"
            },
            {
                $group: {
                    _id: "$usersByCountry.country",
                    totalUsersByCountry: { $sum: "$usersByCountry.count" },
                    totalUsers: { $first: "$totalUsers" },
                    averageAge: { $first: "$averageAge" }
                }
            },
            {
                $project: {
                    _id: 0,
                    country: "$_id",
                    totalUsers: 1,
                    averageAge: 1,
                    totalUsersByCountry: 1
                }
            }
        ]);

        res.json(userStats);
    } catch (err) {
        res.status(500).send('Error retrieving user stats');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
