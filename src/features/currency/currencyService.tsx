import axios from "axios";

const API_URL = "http://api.nbp.pl/api/exchangerates/rates/a/gbp/";

const getCurrency = async () => {
  const config = {
    params: {
      format: "json",
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const currencyService = {
  getCurrency,
};

export default currencyService;
