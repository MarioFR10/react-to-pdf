import { ButtonHelper } from "./components/button-helper";
import { DestinyInfo } from "./components/destiny-info";
import { Header } from "./components/header";
import { ItineraryDay } from "./components/itinerary-day";
import { TitleComponent } from "./components/title-component";

type Props = {
  data: any;
};

export function App({ data }: Props) {
  const pocName = "POC React to pdf";

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pocName}</title>
        <link rel="stylesheet" href="src/styles.css" />
      </head>
      <body>
        <Header data={data} />
        <main>
          <div>
            <TitleComponent data={data} />
            <DestinyInfo data={data} />
          </div>
          <ButtonHelper data={data} />
          <div className="itinerary-day-group">
            <ItineraryDay data={data} />
            <ItineraryDay data={data} />
          </div>
        </main>
      </body>
    </html>
  );
}
