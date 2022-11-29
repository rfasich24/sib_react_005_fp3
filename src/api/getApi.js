import axios from 'axios';

const getLatLong = async (search) => {
  const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
    params: { query: search ? search : 'Bali' },
    headers: {
      'X-RapidAPI-Key': '017e71df30msha4568ac97fdb748p1f32abjsn5feb6dec1aef',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
    },
  };

  const res = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return await res;
};

const getHotel = async ({ latitude, longitude }) => {
  try {
    const res = await axios.get('https://hotels4.p.rapidapi.com/v2/get-meta-data', {
      params: { latitude: latitude ? latitude : '-8.36977497199996', longitude: longitude ? longitude : '115.13165412300009', limit: '14' },
      headers: {
        'X-RapidAPI-Key': '017e71df30msha4568ac97fdb748p1f32abjsn5feb6dec1aef',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      },
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export { getLatLong, getHotel };
