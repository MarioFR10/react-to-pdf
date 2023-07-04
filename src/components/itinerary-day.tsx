const { readFileSync } = require("fs");

type Props = {
  data: any;
};

export function ItineraryDay({ data }: Props) {
  const activity1 =
    "Llegada al aeropuerto de Nueva York (JFK, LaGuardia o Newark)";
  const activity2 = "Traslado al hotel en taxi, Uber, Lyft, transporte público";
  const activity3 = "Alojamiento en un hotel en Manhattan o en Brooklyn";

  const dayImg = "./src/imgs/day-1.png";
  const iconImg = "./src/imgs/arrival.png";
  const helper = "Llegada a New York";

  return (
    <div className="itinerary-container">
      <img
        src={`data:image/png;base64,${readFileSync(dayImg).toString("base64")}`}
        alt="day"
        width={218}
        height={120}
      />
      <p className="day-image-helper">{helper}</p>

      <hr className="hr-image" />

      <div className="activity-container">
        <div className="activity-icon-text">
          <img
            src={`data:image/png;base64,${readFileSync(iconImg).toString(
              "base64"
            )}`}
            alt="icon"
          />
          <p>{activity1}</p>
        </div>
        <div className="activity-icon-text">
          <img
            src={`data:image/png;base64,${readFileSync(iconImg).toString(
              "base64"
            )}`}
            alt="icon"
          />
          <p>{activity2}</p>
        </div>
        <div className="activity-icon-text">
          <img
            src={`data:image/png;base64,${readFileSync(iconImg).toString(
              "base64"
            )}`}
            alt="icon"
          />
          <p>{activity3}</p>
        </div>
      </div>
    </div>
  );
}
