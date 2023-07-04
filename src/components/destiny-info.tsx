type Props = {
  data: any;
};

export function DestinyInfo({ data }: Props) {
  const firstPara =
    'Nueva York, también conocida como la "Gran Manzana" y "Ciudad que Nunca Duerme", la Estatua de la Libertad, un símbolo de libertad y esperanza, se encuentra en la bahía de Nueva York. Times Square, conocido por sus anuncios luminosos y teatros de Broadway, es el corazón del distrito de entretenimiento.';
  const secondPara =
    "Central Park, un oasis de 843 acres en medio de Manhattan, ofrece un espacio verde para actividades recreativas. La ciudad es también un centro de arte y cultura, con instituciones como el Museo Metropolitano de Arte, el Museo de Arte Moderno y el Museo Americano de Historia Natural.";

  return (
    <div className="destiny-info-container">
      <p className="destiny-info-p">{firstPara}</p>
      <p className="destiny-info-p">{secondPara}</p>
    </div>
  );
}
