import React, { useRef, useState, useEffect, useCallback } from "react";
import axios, { CancelToken, isAxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setStudents } from "@/app/GlobalRedux/slices/AppSlice";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

function SearchBar({ linkText, currPage }) {
  const dispatch = useDispatch();
  const { students } = useSelector((st) => st.app);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const abortControllerRef = useRef(null);

  const filteredSearch = useCallback(async (value) => {
    setSearchTerm(value);

    // Cancel any previous requests before sending a new one
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const cancelToken = new CancelToken(cancel => {
      abortControllerRef.current = cancel;
    });

    console.log("Search term:", value); // Log search term for testing

    try {
      console.log("request made")
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/transcript/allStudents?key=${value}`,
        { cancelToken }
      );

      console.log("API response:", response.data); // Log API response for testing
      dispatch(setStudents(response.data));
      setFilteredStudents(response.data);
    } catch (error) {
      if (!isAxiosError(error)) {
        throw error; // Re-throw non-axios errors
      }
      console.error("Error:", error.message); // Log errors gracefully
    }
  }, [dispatch]);

  useEffect(() => {
    // Cleanup function to clear the abort controller on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    filteredSearch(searchTerm); // Perform initial search
  }, [searchTerm, filteredSearch]);

  const removeCriterion = () => {
    setFilteredStudents(students);
    setSearchTerm("");
  };

  return (
    <Command className={`${!searchTerm ? "" : "mt-[10%]"} w-[40%] rounded-xl justify-between items-center px-4`}>
      <div className={`flex flex-row w-full justify-between items-center gap-6 ${searchTerm ? "border-b" : ""}`}>
        <CommandInput
          value={searchTerm}
          onChange={(e) => filteredSearch(e.target.value)}
          className="placeholder:italic text-primaryBlue placeholder:text-primaryBlue border-none"
          placeholder="Search by Name or Matric No."
        />
        <img src="./mi_filter.svg" alt="mi_filter" className="h-8 w-8" onClick={() => setFilterOpen(!filterOpen)} />
      </div>

      {searchTerm && (
        <CommandList>
          <CommandGroup>
            {filteredStudents.map((item, i, arr) => {
              const { name, matricNo, _id } = item;
              return (
                <CommandItem
                  key={i}
                  className={`flex justify-between bg-none font-medium py-2 text-base ${i !== arr.length - 1 ? "border-b" : ""}`}
                >
                  <div className="flex gap-4 text-primaryGray">
                    <span>{matricNo}</span> <span>{name}</span>
                  </div>
                  <div>
                    <Link href={`${currPage}/${_id}`} className="text-oauOrange">
                      {linkText}
                    </Link>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
}

export default SearchBar;
