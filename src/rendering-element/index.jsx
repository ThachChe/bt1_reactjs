export default function RenderingElement() {
  const username = "Vy";
  const title = "Zero O'clock";
  const description = "And you gonna be happy";

  const renderSong = () => {
    return (
      <div>
        <h1>Name Song: {title}</h1>
        <p>Description: {description}</p>
      </div>
    );
  };
  return (
    <div>
      <h1>Rendering Element</h1>
      <div>{username}</div>
      {renderSong()}
      {/* cach goi bien hoac ham {bien hoac ham} */}
    </div>
  );
}
