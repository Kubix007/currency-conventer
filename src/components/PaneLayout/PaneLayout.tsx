import CurrencyForm from "../CurrencyForm";
import * as Styles from "./PaneLayout.styles";

const PaneLayout = () => {
  return (
    <Styles.BoxContainer>
      <Styles.StackContainer>
        <CurrencyForm />
      </Styles.StackContainer>
    </Styles.BoxContainer>
  );
};

export default PaneLayout;
