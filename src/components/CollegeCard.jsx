import { Link } from "react-router-dom";
import { useContext } from "react";

import { motion } from "framer-motion";

import { SavedContext } from "../context/SavedContext";
import { CompareContext } from "../context/CompareContext";

export default function CollegeCard({
  college
}) {
  const { saved, toggleSave } =
    useContext(SavedContext);

  const { compare, toggleCompare } =
    useContext(CompareContext);

  const isSaved = saved.find(
  (item) => item._id === college._id
);

const isCompared = compare.find(
  (item) => item._id === college._id
);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02
      }}
      transition={{
        duration: 0.2
      }}
      className="glass card"
    >

      <img
        src={college.image}
        alt={college.name}
        className="college-image"
      />

      <div className="card-content">

        <div className="top">
          <div>
            <h2>{college.name}</h2>
            <p>{college.location}</p>
          </div>

          <div className="rating">
            ⭐ {college.rating}
          </div>
        </div>

        <p className="description">
          {college.description}
        </p>

        <div className="bottom">

          <div>
            <small>Annual Fees</small>

            <h3>
              ₹{college.fees.toLocaleString()}
            </h3>
          </div>

          <div className="actions">

            <button
              className="save-btn"
              onClick={() =>
                toggleSave(college)
              }
            >
              {isSaved ? "❤️" : "🤍"}
            </button>

            <button
              className="compare-btn"
              onClick={() =>
                toggleCompare(college)
              }
            >
              {isCompared
                ? "✓"
                : "Compare"}
            </button>

            <Link
              to={`/college/${college._id}`}
            >
              <button>
                Details
              </button>
            </Link>

          </div>

        </div>
      </div>

    </motion.div>
  );
}