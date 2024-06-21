interface com {
  top_HEADLINES: any;
}
export const serviceEndPoints = {
  top_HEADLINES: process.env.REACT_APP_BASE_URL,
};
console.log("ENDPOINT URL ", serviceEndPoints);
