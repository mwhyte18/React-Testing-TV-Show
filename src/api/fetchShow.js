import axios from "axios";

const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      console.log("look here", res);
      return res;
    })
    .catch(err => {
      console.log("Error fetching data from API", err.message);
      return err;
    });
};

export default fetchShow;
