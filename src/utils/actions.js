import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = ` https://api.spoonacular.com/recipes/`;
//Fetch recipe by name
export const fetchRecipeByName = async (query) => {
  try {
    const result = await axios.get(
      `${URL}complexSearch?query=${query}&number=5&instructionsRequired=true&addRecipeInformation=true&apiKey=${API_KEY}`
    );
    if (result.status === 200) {
      return { result, status: "ok" };
    } else {
      return {
        result:
          "Please try again later, most likely you reached out the daily limits of requests - 150!",
        status: "not-ok",
      };
    }
  } catch (error) {
    return { msg: error.message, code: error.response };
  }
};

