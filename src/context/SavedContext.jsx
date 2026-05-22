import {
  createContext,
  useEffect,
  useState
} from "react";
import toast from "react-hot-toast";
export const SavedContext =
  createContext();

export default function SavedProvider({
  children
}) {

  const [saved, setSaved] =
    useState(() => {

      const stored =
        localStorage.getItem(
          "savedColleges"
        );

      return stored
        ? JSON.parse(stored)
        : [];
    });

  useEffect(() => {

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(saved)
    );

  }, [saved]);

  const toggleSave = (college) => {

    const exists = saved.find(
      (item) =>
        item._id === college._id
    );

    if (exists) {

      setSaved(
        saved.filter(
          (item) =>
            item._id !==
            college._id
        )
      );

    } else {

      setSaved([
        ...saved,
        college
      ]);

    }
  };

  return (
    <SavedContext.Provider
      value={{
        saved,
        toggleSave
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}