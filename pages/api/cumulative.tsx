import axios from "axios";
export default (req, res) => {
  res.setHeader(
    "Cache-Control",
    "max-age=10800 s-maxage=10800 stale-while-revalidate"
  );
  axios.get("https://api.covid19api.com/summary").then((response) => {
    res.status(200).json(response.data);
  });
};
