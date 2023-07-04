const { readFileSync } = require("fs");

type Props = {
  data: any;
};

export function TitleComponent({ data }: Props) {
  const titleCaption = "Nueva York, E.E.U.U.";
  const titleHelper = "10 días | Viaje en Familia";
  const titleDate = "25 may - 4 jun 2023";

  return (
    <div className="title-container">
      <img
        src={`data:image/png;base64,${readFileSync(
          "./src/imgs/title-background.png"
        ).toString("base64")}`}
        alt="title"
      />
      <div className="title-overlay">
        <p className="title-caption">{titleCaption}</p>
        <p className="title-helper">{titleHelper}</p>
        <p className="title-date">{titleDate}</p>
      </div>
    </div>
  );
}
