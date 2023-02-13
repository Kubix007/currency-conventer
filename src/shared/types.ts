export interface ICurrencyState {
  currency: {
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
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
