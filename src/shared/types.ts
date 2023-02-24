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

export interface IAutocompleteState {
  currencyToSend: ICountryType;
  currencyToReceive: ICountryType;
}

export interface ITextFieldState {
  currencyToSend: string;
  currencyToReceive: string;
}

export interface IRequestData {
  table: any;
  code: string;
}

export interface ICountryType {
  currencyCode: string;
  currencyName: string;
  countryCode: string;
  countryName: string;
  table: string;
}

export interface ExchangeFunctionParameters {
  currencies: ICurrenciesState;
  toSendValue: string;
  toReceiveValue: string;
  targetId: string;
}
