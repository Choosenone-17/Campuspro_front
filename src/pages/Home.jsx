import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import CollegeCard from "../components/CollegeCard";

import SkeletonCard from "../components/SkeletonCard";

export default function Home() {
  const [colleges, setColleges] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [location, setLocation] =
    useState("All");

  const [rating, setRating] =
    useState("All");

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/colleges"
      );

      setColleges(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredColleges =
    useMemo(() => {
      return colleges.filter(
        (college) => {
          const matchesSearch =
            college.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesLocation =
            location === "All" ||
            college.location ===
            location;

          const matchesRating =
            rating === "All" ||
            college.rating >=
            Number(rating);

          return (
            matchesSearch &&
            matchesLocation &&
            matchesRating
          );
        }
      );
    }, [
      colleges,
      search,
      location,
      rating
    ]);

  const locations = [
    "All",
    ...new Set(
      colleges.map(
        (college) =>
          college.location
      )
    )
  ];

  if (loading) {
    return (
      <main className="page">
        <div className="container">

          <div className="grid">
            {[...Array(6)].map(
              (_, index) => (
                <SkeletonCard
                  key={index}
                />
              )
            )}
          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">

        <div className="hero glass">

          <p className="tag">
            COLLEGE DISCOVERY PLATFORM
          </p>

          <h1>
            Discover Your
            <span> Dream College</span>
          </h1>

          <p className="subtitle">
            Search and compare top colleges.
          </p>

          <div className="filters">

            <input
              type="text"
              placeholder="Search colleges..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

            <select
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value
                )
              }
            >
              {locations.map((loc) => (
                <option key={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <select
              value={rating}
              onChange={(e) =>
                setRating(
                  e.target.value
                )
              }
            >
              <option>
                All
              </option>

              <option value="4">
                4+ Rating
              </option>

              <option value="4.5">
                4.5+ Rating
              </option>

            </select>

          </div>

        </div>

        <div className="grid">

          {filteredColleges.length > 0 ? (

            filteredColleges.map(
              (college) => (
                <CollegeCard
                  key={college._id}
                  college={college}
                />
              )
            )

          ) : (

            <div className="empty-state glass">

              <h2>
                No colleges found
              </h2>

              <p>
                Try changing filters or
                search query.
              </p>

            </div>

          )}

        </div>

      </div>
    </main>
  );
}