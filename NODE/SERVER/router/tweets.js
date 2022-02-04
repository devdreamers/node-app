import express from 'express';
import 'express-async-errors';

const router = express.Router();

const tweets = [
    {
        id: '1',
        text: '드림코더분들 화이팅!',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
];

// GET /tweets
// GET /tweets?username=:username
// GET /tweets/:id
// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id
export default router;  