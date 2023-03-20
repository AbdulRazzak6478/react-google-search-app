import axios from "axios";
const BASE_URL="https://www.googleapis.com/customsearch/v1";

const params={
    Key:process.env.REACT_APP_GOOGLE_API_KEY,
    cx:process.env.REACT_APP_GOOGLE_CX
}


export const fetchDataFromApi = async(payload) => {
    // console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    const {data}=await axios.get(BASE_URL, {
        params:{...params,...payload}
    })
    return data;
};
