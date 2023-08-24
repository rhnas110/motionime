import "./NotFound.css";

export const NotFound = () => {
  return (
    <section className="section bg-primary">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>motion not found</h2>
        </div>
        <a href="/">Home</a>
      </div>
    </section>
  );
};
