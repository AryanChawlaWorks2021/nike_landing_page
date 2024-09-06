import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
     <h3 className="font-bold font-palanquin text-center text-4xl">
      What Our
      <span className="text-coral-red"> Customers </span>
      Say?
     </h3>
     <p className="info-text text-center mt-4 m-auto max-w-lg">
      Hear genuine stories from our satisfied customers about their exceptional experiences with us.
     </p>
     <div className="mt-24 flex-1 flex justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review) => (
        <ReviewCard 
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        feedback={review.feedback}
        rating={review.rating}
        />
      ))}
     </div>
    </section>
  )
}

export default CustomerReviews
