const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req, res) {
  const shortID = shortid();
  const body = req.body;
  if (!body.url) return req.status(400).json({ error: "url is required" });
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.render("home", { id: shortID });
  // return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
