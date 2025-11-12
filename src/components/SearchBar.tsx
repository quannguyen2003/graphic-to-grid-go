import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
      <Input 
        placeholder="Search" 
        className="pl-10 bg-card border-border"
      />
    </div>
  );
};

export default SearchBar;
