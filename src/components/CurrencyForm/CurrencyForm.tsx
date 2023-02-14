import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  currencyToSend: yup.string().required("The field must not be empty ;("),
  currencyToReceive: yup.string().required("The field must not be empty ;("),
});

const CurrencyForm = () => {
  const formik = useFormik({
    initialValues: {
      currencyToSend: "",
      currencyToReceive: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        select
        id="currencyToSend"
        name="currencyToSend"
        label="You send"
        value={formik.values.currencyToSend}
        onChange={formik.handleChange}
        error={
          formik.touched.currencyToSend && Boolean(formik.errors.currencyToSend)
        }
        helperText={
          formik.touched.currencyToSend && formik.errors.currencyToSend
        }
      />
      <TextField
        fullWidth
        select
        id="currencyToReceive"
        name="currencyToReceive"
        label="They receive"
        value={formik.values.currencyToReceive}
        onChange={formik.handleChange}
        error={
          formik.touched.currencyToReceive &&
          Boolean(formik.errors.currencyToReceive)
        }
        helperText={
          formik.touched.currencyToReceive && formik.errors.currencyToReceive
        }
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Oblicz
      </Button>
    </form>
  );
};

export default CurrencyForm;
