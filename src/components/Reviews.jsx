import "../styles/Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Mark",
    text: "Best fade I’ve had in Utrecht. Clean, relaxed and very professional.",
  },
  {
    id: 2,
    name: "David",
    text: "Beautiful studio, great attention to detail and a premium experience from start to finish.",
  },
  {
    id: 3,
    name: "Sam",
    text: "Finally a barber that takes time and really listens. Highly recommended.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <div className="reviews__header">
          <span className="reviews__label">Client reviews</span>

          <h2 className="reviews__title">What our clients say</h2>

          <p className="reviews__description">
            Real words from clients who value precision, style and a calm
            grooming experience.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <article className="reviews__card" key={review.id}>
              <div className="reviews__stars" aria-label="Five star review">
                ★★★★★
              </div>

              <p className="reviews__text">“{review.text}”</p>

              <p className="reviews__name">— {review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;