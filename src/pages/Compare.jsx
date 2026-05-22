import {
  useContext
} from "react";

import {
  CompareContext
} from "../context/CompareContext";

export default function Compare() {

  const { compare } =
    useContext(CompareContext);

  return (
    <main className="page">

      <div className="container">

        <div className="compare-wrap glass">

          <h1>
            Compare Colleges
          </h1>

          {compare.length === 0 ? (

            <div className="empty-state">

              <h2>
                No colleges selected
              </h2>

              <p>
                Add colleges to compare.
              </p>

            </div>

          ) : (

            <table>

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Fees</th>
                  <th>Rating</th>
                  <th>Placements</th>
                </tr>
              </thead>

              <tbody>

                {compare.map(
                  (college) => (
                    <tr
                      key={college._id}
                    >
                      <td>
                        {college.name}
                      </td>

                      <td>
                        {college.location}
                      </td>

                      <td>
                        ₹
                        {college.fees.toLocaleString()}
                      </td>

                      <td>
                        ⭐
                        {college.rating}
                      </td>

                      <td>
                        {
                          college.placements
                        }
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </main>
  );
}