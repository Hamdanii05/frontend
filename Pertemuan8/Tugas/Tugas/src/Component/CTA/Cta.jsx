import "./Cta.css"
const Cta = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Luxury car rental</h2>
        <p>Find your dream car here!</p>
        <button>See All</button>
      </div>

      <div className="cta-image">
        <img src="../../../public/image/CTA.png" alt="CTA" />
      </div>
    </section>
  );
};

export default Cta;
