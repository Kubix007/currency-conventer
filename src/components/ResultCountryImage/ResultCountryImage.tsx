import * as Types from "./ResultCountryImage.types";
import * as Styles from "./ResultCountryImage.styles";

const ResultCountryImage = ({ countryIso }: Types.IResultCountryImageProps) => {
  const flagSource = `https://flagcdn.com/${countryIso}.svg`;
  return (
    <Styles.FlagImage
      data-testid={countryIso}
      src={flagSource}
      alt={countryIso}
    />
  );
};

export default ResultCountryImage;
