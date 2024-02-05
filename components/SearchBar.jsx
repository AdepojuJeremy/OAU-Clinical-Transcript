"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import students from "@/schem.json";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SearchBar() {
  // States
  const suggestions = useRef(null);
  const search = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [admissionDropOpen, setAdmissionDropOpen] = useState(false);
  const [graduationDropOpen, setGraduationDropOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdmission, setSelectedAdmission] = useState("");
  const [selectedGraduation, setSelectedGraduation] = useState("");
  const [inputFiltrate, setInputFiltrate] = useState(students);
  const [filteredStudents, setFilteredStudents] = useState(students);

  // Ref
  const graduationDropRef = useRef(null);
  const admissionDropRef = useRef(null);

  // functions
  const filteredSearch = (value) => {
    setSearchTerm(value);

    // Filter the students based on the matric number or name
    const filteredList = students.filter(
      (student) =>
        student.matricNo.toLowerCase().includes(value.toLowerCase()) ||
        student.name.toLowerCase().includes(value.toLowerCase())
    );
    setInputFiltrate(filteredList);
    setFilteredStudents(filteredList);
  };

  const filterGraduation = (value) => {
    setFilteredStudents(
      inputFiltrate.filter((student) => student.graduationYear == value)
    );
    setSelectedGraduation(value);
  };
  const filterAdmission = (value) => {
    setFilteredStudents(
      inputFiltrate.filter((student) => student.admissionYear == value)
    );
    setSelectedAdmission(value);
  };
  const removeCriterion = () => {
    const filteredList = students.filter(
      (student) =>
        student.matricNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filteredList);
    setSelectedGraduation("");
    setSelectedAdmission("");
  };

  // useEffects
  useEffect(() => {
    if (admissionDropOpen) setGraduationDropOpen(false);
  }, [admissionDropOpen]);
  useEffect(() => {
    if (graduationDropOpen) setAdmissionDropOpen(false);
  }, [graduationDropOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        graduationDropRef.current &&
        !graduationDropRef.current.contains(event.target) &&
        admissionDropRef.current &&
        !admissionDropRef.current.contains(event.target)
      ) {
        // Clicked outside both dropdowns, close them
        setGraduationDropOpen(false);
        setAdmissionDropOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (search && !search.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Command
      ref={search}
      className={`${
        !searchOpen ? "" : "mt-[10%]"
      } w-[40%] rounded-xl justify-between items-center px-4 `}
    >
      <div
        className={`flex flex-row w-full justify-between items-center gap-6 ${
          searchOpen ? "border-b" : ""
        } `}
      >
        <CommandInput
          onClick={() => setSearchOpen(true)}
          onChange={(e) => filteredSearch(e.target.value)}
          className="placeholder:italic text-primaryBlue placeholder:text-primaryBlue border-none"
          placeholder="Search by Name or Matric No."
        />
        <img
          src="./mi_filter.svg"
          alt="mi_filter"
          className="h-8 w-8 "
          onClick={() => setFilterOpen(!filterOpen)}
        />
      </div>

      {searchOpen && (
        <div className="min-h-[22rem] w-full">
          <>
            {filterOpen ? (
              <div className="filter w-full flex justify-between items-center text-primaryBlue py-4">
                <div>Filter by</div>
                <div className="filter-tags flex-1 flex justify-between max-w-[65%]">
                  <div className="graduation relative" ref={graduationDropRef}>
                    <button
                      className={`text-white px-2 py-1 rounded-lg  ${
                        graduationDropOpen ? "bg-primaryBlue" : "bg-primaryGray"
                      }`}
                      onClick={() => setGraduationDropOpen(!graduationDropOpen)}
                    >
                      Graduation Year
                    </button>
                    {graduationDropOpen ? (
                      <div className="admission-dropdown absolute top-[110%] left-[50%] -translate-x-[50%] w-[120%] text-center z-10 opacity-100 visible bg-white shadow-md p-2 rounded-2xl">
                        <ul className="text-primaryBlue admission-dropdown-list max-h-[20rem] overflow-y-auto">
                          <li className="font-bold">Graduation Year</li>
                          {Array.from(
                            { length: 7 },
                            (_, index) => 2015 + index
                          ).map((year, i, arr) => {
                            return (
                              <li
                                key={i}
                                className={`${
                                  selectedGraduation == year
                                    ? "bg-primaryGray/20"
                                    : ""
                                }`}
                              >
                                <button
                                  onClick={(e) =>
                                    filterGraduation(e.target.textContent)
                                  }
                                >
                                  {year}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="admission relative" ref={admissionDropRef}>
                    <button
                      className={`text-white px-2 py-1 rounded-lg ${
                        admissionDropOpen ? "bg-primaryBlue" : "bg-primaryGray"
                      }`}
                      onClick={() => setAdmissionDropOpen(!admissionDropOpen)}
                    >
                      Admission Year
                    </button>
                    {admissionDropOpen ? (
                      <div className="admission-dropdown absolute top-[110%] left-[50%] -translate-x-[50%] w-[120%] text-center z-10 opacity-100 visible bg-white shadow-md p-2 rounded-2xl">
                        <ul className="text-primaryBlue admission-dropdown-list max-h-[20rem] overflow-y-auto">
                          <li className="font-bold">Admission Year</li>
                          {Array.from(
                            { length: 7 },
                            (_, index) => 2003 + index
                          ).map((year, i, arr) => {
                            return (
                              <li
                                key={i}
                                className={`${
                                  selectedAdmission == year
                                    ? "bg-primaryGray/20"
                                    : ""
                                }`}
                              >
                                <button
                                  onClick={(e) =>
                                    filterAdmission(e.target.textContent)
                                  }
                                >
                                  {year}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="criterion filter-tag">
                    <button onClick={() => removeCriterion()}>
                      Criterion X
                    </button>
                  </div>
                </div>
                <div className="filter-icon">
                  <img src="./typcn_filter.svg" alt="typcn_filter" />
                </div>
              </div>
            ) : (
              <></>
            )}
            <CommandList ref={suggestions} className="w-full">
              <CommandGroup>
                {filteredStudents.map((item, i, arr) => {
                  const { name, matricNo } = item;
                  return (
                    <CommandItem
                      key={i}
                      className={`flex justify-between bg-none font-medium py-2 text-base ${
                        i != arr.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div className="flex gap-4 text-primaryGray">
                        <span>{matricNo}</span> <span>{name}</span>
                      </div>{" "}
                      <div>
                        <Link href={'/results'} className="text-oauOrange">
                          View Results
                        </Link>
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </>
        </div>
      )}
    </Command>
  );
}

export default SearchBar;
