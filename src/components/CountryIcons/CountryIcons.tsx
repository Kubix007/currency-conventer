import * as Types from "./CountryIcons.types";
import * as Styles from "./CountryIcons.styles";

const CountryIcons = ({ countryIso }: Types.ICountryIconsProps) => {
  const flagSource = `https://flagcdn.com/${countryIso}.svg`;
  return <Styles.FlagImage src={flagSource} alt="flag" />;
};

export default CountryIcons;
