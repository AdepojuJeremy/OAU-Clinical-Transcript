import React from "react";
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

function SearchBar() {
  return (
    <Command className='-mt-[8%] w-[50%] rounded-full flex-row justify-between items-center '>
      <CommandInput className='italic text-primaryBlue placeholder:text-primaryBlue' placeholder="Search by Name or Matric No." />
      <img src="./mi_filter.png" alt="mi_filter" className="h-8 w-8 mr-10"/>
    </Command>
  );
}

export default SearchBar;
