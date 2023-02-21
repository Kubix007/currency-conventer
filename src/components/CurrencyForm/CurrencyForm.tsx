import { Button, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { currencies } from "../../data/currencies";
import * as yup from "yup";
import * as Styles from "./CurrencyForm.styles";

const validationSchema = yup.object().shape({
  currencyToSendSelect: yup.string().required("This field is required."),
  currencyToReceiveSelect: yup.string().required("This field is required."),
  currencyToSendTextField: yup
    .string()
    .test(
      "oneOfRequired",
      "'Send amount' or 'Receive amount' must be entered",
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
    .string()
    .test(
      "oneOfRequired",
      "'Send amount' or 'Receive amount' must be entered",
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
  const formik = useFormik({
    initialValues: {
      currencyToSendTextField: "",
      currencyToReceiveTextField: "",
      currencyToSendSelect: "",
      currencyToReceiveSelect: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
