import axios from "axios";
import * as SharedTypes from "../../shared/types";

const getCurrency = async (data: SharedTypes.IRequestData) => {
  const config = {
    params: {
      format: "json",
    },
  };

  const response = await axios.get(
    `https://api.nbp.pl/api/exchangerates/rates/${data.table}/${data.code}/`,
    config
  );

  return response.data;
};

const currencyService = {
  getCurrency,
};

export default currencyService;
