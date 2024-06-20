interface com {
  top_HEADLINES: any;
}
export const serviceEndPoints = {
  top_HEADLINES: process.env.REACT_APP_BASE_URL,
};
console.log("ENDPOINT URL ", serviceEndPoints);

// https://newsapi.org/v2/everything?apiKey=7a0f8b1185874346af74f7e2f51deb1e&q=top-headlines
