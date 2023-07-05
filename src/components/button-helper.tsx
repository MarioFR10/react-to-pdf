import { readFileSync } from "fs";

type Props = {
  data: any;
};

export function ButtonHelper({ data }: Props) {
  const message = "Hablar con un asesor";
  const iconImg = "src/imgs/chat.png";

  return (
    <div className="button-container">
      <button className="button-helper">
        <img
          src={`data:image/png;base64,${readFileSync(iconImg).toString(
            "base64"
          )}`}
          alt="icon"
        />
        <p className="button-message">{message}</p>
      </button>
    </div>
  );
}
