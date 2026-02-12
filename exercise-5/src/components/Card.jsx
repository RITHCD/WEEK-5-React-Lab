function Card({ item }) {
  return (
    <div className="card">
        <img src={item.image.src} alt={item.name} />
        <h2>{item.name}</h2>
        <p>Age: {item.age}</p>
    </div>
  );
}
export default Card;