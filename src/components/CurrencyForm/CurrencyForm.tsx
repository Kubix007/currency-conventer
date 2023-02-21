import { Button, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { currencies } from "../../data/currencies";
import * as yup from "yup";
import * as Styles from "./CurrencyForm.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  getCurrencyToReceive,
  getCurrencyToSend,
} from "../../features/currency/currencySlice";

const validationSchema = yup.object().shape({
  currencyToSendSelect: yup.string().required("This field is required."),
  currencyToReceiveSelect: yup.string().required("This field is required."),
  currencyToSendTextField: yup
    .number()
    .typeError("The value must be a number")
    .test(
      "oneOfRequired",
      "Enter only 'Send amount' or 'Receive amount'",
      function () {
        return (
          (this.parent.currencyToSendTextField ||
            this.parent.currencyToReceiveTextField) &&
          (this.parent.currencyToSendTextField &&
          this.parent.currencyToReceiveTextField
            ? false
            : true)
        );
      }
    ),
  currencyToReceiveTextField: yup
    .number()
    .typeError("The value must be a number")
    .test(
      "oneOfRequired",
      "Enter only 'Send amount' or 'Receive amount'",
      function () {
        return (
          (this.parent.currencyToSendTextField ||
            this.parent.currencyToReceiveTextField) &&
          (this.parent.currencyToSendTextField &&
          this.parent.currencyToReceiveTextField
            ? false
            : true)
        );
      }
    ),
});

const CurrencyForm = () => {
  const dispatch: AppDispatch = useDispatch();
  //const { currency } = useSelector((state: RootState) => state.currency);

  const formik = useFormik({
    initialValues: {
      currencyToSendTextField: "",
      currencyToReceiveTextField: "",
      currencyToSendSelect: "",
      currencyToReceiveSelect: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const currencyToSend = currencies.find(
        (item) => item.code === values.currencyToSendSelect
      );
      const currencyToReceive = currencies.find(
        (item) => item.code === values.currencyToReceiveSelect
      );
      dispatch(
        getCurrencyToReceive({
          table: currencyToReceive!.table,
          code: currencyToReceive!.code,
        })
      );
      dispatch(
        getCurrencyToSend({
          table: currencyToSend!.table,
          code: currencyToSend!.code,
        })
      );
    },
  });

  currencies.sort((a, b) => {
    const nameA = a.currency.toUpperCase(); // ignore upper and lowercase
    const nameB = b.currency.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Styles.SelectCurrency
        fullWidth
        select
        id="currencyToSendSelect"
        name="currencyToSendSelect"
        label="You send"
        value={formik.values.currencyToSendSelect}
        onChange={formik.handleChange}
        error={
          formik.touched.currencyToSendSelect &&
          Boolean(formik.errors.currencyToSendSelect)
        }
        helperText={
          formik.touched.currencyToSendSelect &&
          formik.errors.currencyToSendSelect
        }
      >
        {currencies.map((option: any) => (
          <MenuItem key={option.code} value={option.code}>
            {option.currency}
          </MenuItem>
        ))}
      </Styles.SelectCurrency>
      <Styles.TextFieldCurrency
        fullWidth
        id="currencyToSendTextField"
        name="currencyToSendTextField"
        label="Send amount"
        variant="outlined"
        value={formik.values.currencyToSendTextField}
        onChange={formik.handleChange}
        error={
          formik.touched.currencyToSendTextField &&
          Boolean(formik.errors.currencyToSendTextField)
        }
        helperText={
          formik.touched.currencyToSendTextField &&
          formik.errors.currencyToSendTextField
        }
      />
      <Styles.SelectCurrency
        fullWidth
        select
        id="currencyToReceiveSelect"
        name="currencyToReceiveSelect"
        label="They receive"
        value={formik.values.currencyToReceiveSelect}
        onChange={formik.handleChange}
        error={
          formik.touched.currencyToReceiveSelect &&
          Boolean(formik.errors.currencyToReceiveSelect)
        }
        helperText={
          formik.touched.currencyToReceiveSelect &&
          formik.errors.currencyToReceiveSelect
        }
      >
        {currencies.map((option: any) => (
          <MenuItem key={option.code} value={option.code}>
            {option.currency}
          </MenuItem>
        ))}
      </Styles.SelectCurrency>
      <Styles.TextFieldCurrency
        fullWidth
        id="currencyToReceiveTextField"
        name="currencyToReceiveTextField"
        label="Receive amount"
        variant="outlined"
        value={formik.values.currencyToReceiveTextField}
        onChange={formik.handleChange}
        error={
          formik.touched.currencyToReceiveTextField &&
          Boolean(formik.errors.currencyToReceiveTextField)
        }
        helperText={
          formik.touched.currencyToReceiveTextField &&
          formik.errors.currencyToReceiveTextField
        }
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Calculate
      </Button>
    </form>
  );
};

export default CurrencyForm;
