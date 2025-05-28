import express from "express";

const chatRoutes = express.Router();

chatRoutes.post('/', async (req, res) => {
  const { message } = req.body;
  res.json({
    reply: `You asked: "${message}". Gemini response will appear here.`,
  });
});

export default chatRoutes;