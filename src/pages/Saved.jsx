import { useContext } from "react";
import { SavedContext } from "../context/SavedContext";
import CollegeCard from "../components/CollegeCard";

export default function Saved() {
  const { saved } = useContext(SavedContext);

  return (
    <main className="page">
      <div className="container">

        <div className="glass compare-wrap">
          <h1>Saved Colleges ❤️</h1>

          {saved.length === 0 ? (
            <p>No saved colleges yet.</p>
          ) : (
            <div className="grid">
              {saved.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}