const express = require("express");
const cors = require("cors");

const contactRouter = require("./routes/contact");
const scanUrlRouter = require("./routes/scanUrl");
const chatRouter = require("./routes/chat");

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://netrasecure-ai.vercel.app";

app.use(cors({ 
  origin: FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Server is running...." });
});

app.use("/contact", contactRouter);
app.use("/scan-url", scanUrlRouter);
app.use("/chat", chatRouter);

// Default Error handle
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Internal server error." });
});

// Routes not found handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
