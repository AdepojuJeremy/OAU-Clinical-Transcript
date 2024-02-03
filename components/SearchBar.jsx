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
  const suggestions = useRef(null);
  const search = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [admissionDropOpen, setAdmissionDropOpen] = useState(false);
  const [graduationDropOpen, setGraduationDropOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);

  const filteredSearch = (e) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter the students based on the matric number or name
    const filteredList = students.filter(
      (student) =>
        student.matricNo.toLowerCase().includes(value.toLowerCase()) ||
        student.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredStudents(filteredList);
  };

  useEffect(() => {
    if (admissionDropOpen) setGraduationDropOpen(false);
  }, [admissionDropOpen]);
  useEffect(() => {
    if (graduationDropOpen) setAdmissionDropOpen(false);
  }, [graduationDropOpen]);

  const handleClickOutside = (e) => {
    if (search && !search.current.contains(e.target)) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
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
      } w-[40%] rounded-xl justify-between items-center px-4`}
    >
      <div
        className={`flex flex-row w-full justify-between items-center gap-6 ${
          searchOpen ? "border-b" : ""
        } `}
      >
        <CommandInput
          onClick={() => setSearchOpen(true)}
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
        <>
          {filterOpen ? (
            <div className="filter w-full flex justify-between items-center text-primaryBlue py-4">
              <div>Filter by</div>
              <div className="filter-tags flex-1 flex justify-between max-w-[65%]">
                <div className="graduation relative">
                  <button
                    className={`text-white px-2 py-1 rounded-lg text-[16px] ${
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
                        <li>119X/9X</li>
                        <li>119X/9X</li>
                        <li>119X/9X</li>
                        <li>2000/0X</li>
                        <li>2000/0X</li>
                        <li>2000/0X</li>
                        <li>2000/0X</li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="admission relative">
                  <button
                    className={`text-white px-2 py-1 rounded-lg text-[16px] ${
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
                        <li>119X/9X</li>
                        <li>119X/9X</li>
                        <li>119X/9X</li>
                        <li>2000/0X</li>
                        <li>2000/0X</li>
                        <li>2000/0X</li>
                        <li>2000/0X</li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="criterion filter-tag">Criterion X</div>
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
              {filteredStudents.map((item, i) => (
                <CommandItem key={i} className="flex justify-between">
                  <div className="flex gap-4">
                    <span></span> <span>Aboma Ciroma A.</span>
                  </div>{" "}
                  <div>
                    <Link className="text-oauOrange" href={""}>
                      View Results
                    </Link>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </>
      )}
    </Command>
  );
}

export default SearchBar;
