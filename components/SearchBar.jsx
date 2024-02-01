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
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      
    </Command>
  );
}

export default SearchBar;
