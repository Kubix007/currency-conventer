export interface ICurrenciesState {
  currencies: {
    currencyToSend: {
      table: string;
      currency: string;
      code: string;
      rates: [
        {
          no: string;
          effectiveDate: string;
          mid: number;
        }
      ];
    };
    currencyToReceive: {
      table: string;
      currency: string;
      code: string;
      rates: [
        {
          no: string;
          effectiveDate: string;
          mid: number;
        }
      ];
    };
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IRequestData {
  table: any;
  code: string;
}
