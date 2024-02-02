"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
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
        !searchOpen ? "-mt-[15%]" : ""
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
        <img src="./mi_filter.svg" alt="mi_filter" className="h-8 w-8 " />
      </div>

      {searchOpen && (
        <>
          <div className="filter w-full flex justify-between items-center text-primaryBlue py-4">
            <div>Filter by</div>
            <div className="filter-tags flex-1 flex justify-between max-w-[65%]">
              
              <div className="graduation filter-tag">Graduation</div>
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="admission filter-tag">Admission Year</div>
              <div className="criterion filter-tag">Criterion X</div>
            </div>
            <div className="filter-icon">
              <img src="./typcn_filter.svg" alt="typcn_filter" />
            </div>
          </div>
          <CommandList ref={suggestions} className="w-full">
            <CommandGroup>
              {Array.from({ length: 9 }, (_, index) => 1 + index).map(
                (num, i) => (
                  <CommandItem key={i} className="flex justify-between">
                    <div className="flex gap-4">
                      <span>CLI/2013/00{num}</span> <span>Aboma Ciroma A.</span>
                    </div>{" "}
                    <div>
                      <Link className="text-oauOrange" href={""}>
                        View Results
                      </Link>
                    </div>
                  </CommandItem>
                )
              )}
            </CommandGroup>
          </CommandList>
        </>
      )}
    </Command>
  );
}

export default SearchBar;
