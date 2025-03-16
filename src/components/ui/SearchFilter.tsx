
import React from 'react';
import { Filter, Plus, Search } from 'lucide-react';
import { Button } from './button';

interface SearchFilterProps {
  activeTab: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNewItemClick?: () => void;
}

const SearchFilter = ({ 
  activeTab, 
  searchQuery, 
  onSearchChange,
  onNewItemClick 
}: SearchFilterProps) => {
  return (
    <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-800">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h1>
      <div className="flex gap-2 w-full sm:w-auto">
        <div className="relative flex-grow sm:flex-grow-0">
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-insurBlue-500"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        {(activeTab === 'quotes' || activeTab === 'transactions') && (
          <Button 
            variant="default" 
            size="sm" 
            className="bg-insurTeal-500 hover:bg-insurTeal-600 flex items-center gap-1"
            onClick={onNewItemClick}
          >
            <Plus className="h-4 w-4" />
            New {activeTab === 'quotes' ? 'Quote' : 'Transaction'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
