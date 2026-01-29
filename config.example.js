const config = {
   apiKey: process.env.API_KEY || "YOUR_API_KEY_HERE",
   webhook: process.env.SLACK_WEBHOOK || "YOUR_WEBHOOK_HERE"
};
module.exports = config;
