import axios from 'axios';

const BaseUrl = process.env.BASE_URL;

const fetchData = async (endpoint: string, language: "en" | "ar", token?: string) => {
  try {
    const url = `${BaseUrl}${endpoint}`;
    console.log("Fetching from URL:", url);

    const response = await axios.get(url, {
      headers: {
        'lang': language,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
