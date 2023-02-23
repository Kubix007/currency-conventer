import * as Types from "./CountryIcons.types";

const CountryIcons = ({ countryIso }: Types.ICountryIconsProps) => {
  const flagSource = `https://flagcdn.com/${countryIso}.svg`;
  return <img src={flagSource} width="30" alt="flag" />;
};

export default CountryIcons;
