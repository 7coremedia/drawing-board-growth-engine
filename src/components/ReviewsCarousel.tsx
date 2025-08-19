import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Review {
  rating: number;
  text: string;
  author: string;
  verified: boolean;
}

const ReviewsCarousel = () => {
  const topRowReviews: Review[] = [
    {
      rating: 5,
      text: "I consume all of Alex's work immediately. It is some of the BEST business advice in the world. SO SO grateful for him and his contribution to marketers and entrepreneurs.",
      author: "Toni Williams",
      verified: true
    },
    {
      rating: 5,
      text: "Following this second book is going to be even more game changing. Alex takes distills complex subjects, makes them simple and immediately actionable!",
      author: "Luke Gifford",
      verified: true
    },
    {
      rating: 5,
      text: "This book boils down practical actions you can take to get engaged leads every step of the way. I'm always blown away by the knowledge!",
      author: "J. Bailey",
      verified: true
    }
  ];

  const bottomRowReviews: Review[] = [
    {
      rating: 5,
      text: "I've read over 20 self help/business books in the past as an 18 y/o. None have inspired me to take action until I've gotten to this one.",
      author: "Sarah Chen",
      verified: true
    },
    {
      rating: 5,
      text: "The strategies in this book have completely transformed how I approach customer acquisition. Worth every penny!",
      author: "Michael Roberts",
      verified: true
    },
    {
      rating: 5,
      text: "Finally, a practical guide that delivers real results. My business has seen a 3x increase in leads since implementing these strategies.",
      author: "David Thompson",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          AVG. RATING OF 4.9 / 5.0 STARS ON AMAZON!
        </h2>
        <h3 className="text-4xl lg:text-6xl font-black text-gray-900 mt-8 mb-16">
          THOUSANDS OF AMAZON REVIEWS
        </h3>
      </div>

      <div className="relative">
        {/* Top row - moving left */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 mb-8 w-[200%]"
        >
          {[...topRowReviews, ...topRowReviews].map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 w-[400px] flex-shrink-0"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 line-clamp-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{review.author}</span>
                {review.verified && (
                  <span className="text-sm text-yellow-600">Verified Buyer</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom row - moving right */}
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 w-[200%]"
        >
          {[...bottomRowReviews, ...bottomRowReviews].map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 w-[400px] flex-shrink-0"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 line-clamp-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{review.author}</span>
                {review.verified && (
                  <span className="text-sm text-yellow-600">Verified Buyer</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsCarousel; 