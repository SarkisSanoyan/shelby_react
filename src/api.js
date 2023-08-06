import axios from "./axios/index";


export const fetchHeader = async () => {
    const response = await axios.get('header_en');
    return response.data;
};

export const fetchCountries = async () => {
    const response = await axios.get('countries_en');
    return response.data;
};

export const fetchSelectedTours = async (country) => {
    const response = await axios.get('tours_en', {
        params: {
            country
        }
    });
    return response.data;
};

export const fetchTourById = async (id) => {
    const response = await axios.get('tours_en/' + id);
    return response.data;
};

export const fetchSliders = async () => {
    const response = await axios.get('sliders_en');
    return response.data;
};

export const fetchHotTours = async () => {
    const response = await axios.get('hotTours_en');
    return response.data;
};

export const fetchOurRating = async () => {
    const response = await axios.get('ourRating_en');
    return response.data;
};

export const fetchMainTours = async () => {
    const response = await axios.get('mainTours_en');
    return response.data;
};

export const fetchPopularTours = async () => {
    const response = await axios.get('popularTours_en');
    return response.data;
};

export const fetchFooter = async () => {
    const response = await axios.get('footer_en');
    return response.data;
};

export const fetchOrder = async () => {
    const response = await axios.get('orders');
    return response.data;
};

