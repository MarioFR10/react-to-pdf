const { readFileSync } = require("fs");

type Props = {
  data: any;
};

export function Header( { data }: Props) {
  const theHub = "./src/imgs/the-hub-logo.png";
  const headerCaption = "Recomendaciones de itinerario | 25 may - 4 jun 2023";

  return (
    <div className="custom-header">
      <img
        src={`data:image/png;base64,${readFileSync(theHub).toString("base64")}`}
        alt="the-hub-logo"
        className="header-img"
        width={114}
        height={22}
      />
      <p className="header-typo">{headerCaption}</p>
    </div>
  );
}
