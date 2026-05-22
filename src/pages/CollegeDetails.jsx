import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import { motion } from "framer-motion";

export default function CollegeDetail() {
  const { id } = useParams();

  const [college, setCollege] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchCollege();
  }, []);

  const fetchCollege = async () => {
    try {
      const { data } =
        await axios.get(
          `https://campuspro-back.onrender.com/api/colleges/${id}`
        );

      setCollege(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <main className="page">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="detail-hero glass"
        >

          <img
            src={college.image}
            alt={college.name}
            className="detail-image"
          />

          <div className="detail-content">

            <div className="detail-top">

              <div>

                <p className="detail-location">
                  📍 {college.location}
                </p>

                <h1>
                  {college.name}
                </h1>

              </div>

              <div className="detail-rating">
                ⭐ {college.rating}
              </div>

            </div>

            <p className="detail-description">
              {college.description}
            </p>

            <div className="stats-grid">

              <div className="stat-card glass">
                <small>Annual Fees</small>

                <h2>
                  ₹
                  {college.fees.toLocaleString()}
                </h2>
              </div>

              <div className="stat-card glass">
                <small>Highest Package</small>

                <h2>
                  {college.placements}
                </h2>
              </div>

              <div className="stat-card glass">
                <small>Campus Rating</small>

                <h2>
                  {college.rating}/5
                </h2>
              </div>

            </div>

          </div>

        </motion.div>

        <div className="detail-grid">

          <div className="glass info-card">

            <h2>
              Overview
            </h2>

            <p>
              {college.name} is one of the
              leading institutions in India,
              known for strong academics,
              placements, infrastructure,
              and industry exposure.
            </p>

          </div>

          <div className="glass info-card">

            <h2>
              Top Courses
            </h2>

            <ul>
              <li>
                Computer Science
              </li>

              <li>
                Artificial Intelligence
              </li>

              <li>
                Electronics
              </li>

              <li>
                Mechanical Engineering
              </li>
            </ul>

          </div>

          <div className="glass info-card">

            <h2>
              Placements
            </h2>

            <p>
              Top recruiters include:
            </p>

            <div className="tags">

              <span>Google</span>
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Adobe</span>
              <span>Flipkart</span>

            </div>

          </div>

          <div className="glass info-card">

            <h2>
              Student Reviews
            </h2>

            <div className="review">

              <h4>
                Rahul Sharma
              </h4>

              <p>
                Amazing campus life and
                strong placement support.
              </p>

            </div>

            <div className="review">

              <h4>
                Priya Mehta
              </h4>

              <p>
                Faculty and infrastructure
                are excellent.
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}