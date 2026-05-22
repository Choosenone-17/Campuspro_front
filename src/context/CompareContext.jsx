import {
  createContext,
  useState
} from "react";
import toast from "react-hot-toast";
export const CompareContext =
  createContext();

export default function CompareProvider({
  children
}) {
  const [compare, setCompare] =
    useState([]);

  const toggleCompare = (
    college
  ) => {
    const exists = compare.find(
      (item) =>
        item._id === college._id
    );

    if (exists) {
      setCompare(
        compare.filter(
          (item) =>
            item._id !==
            college._id
        )
      );
    } else {

      if (compare.length >= 3) {
        toast.error(
          "Maximum 3 colleges allowed"
        );

        return;
      }

      setCompare([
        ...compare,
        college
      ]);
    }
  };

  return (
    <CompareContext.Provider
      value={{
        compare,
        toggleCompare
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}