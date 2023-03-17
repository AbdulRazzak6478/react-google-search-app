import axios from "axios";
const BASE_URL="https://www.googleapis.com/customsearch/v1";

const params={
    key:"AIzaSyCvq2mcTOPGcVCb9fvORocFcg6Mcnw6dTE",
    cx:"65c160a10ff394dc1",
}


export const fetchDataFromApi = async(payload) => {
    const {data}=await axios.get(BASE_URL, {
        params:{...params,...payload}
    })
    return data;
};
