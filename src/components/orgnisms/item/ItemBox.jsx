export const ItemBox = (props) => {
  const { oneitem } = { props };
  return (
    <div className="item">
      <img src={oneitem.image} className="pic" alt="" />
      <div className="explain">
        <p className="title">{oneitem.name}</p>
        <p>{oneitem.price}</p>
      </div>
    </div>
  );
};
