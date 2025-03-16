
import React, { useState } from 'react';
import { quotesData } from '../data/mockData';
import PageHeader from '../components/layout/PageHeader';
import TabNavigation from '../components/navigation/TabNavigation';
import SearchFilter from '../components/ui/SearchFilter';
import QuotesTable from '../components/tables/QuotesTable';
import PageFooter from '../components/layout/PageFooter';
import Pagination from '../components/ui/pagination';

const Quotes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter data based on search query
  const filteredData = quotesData.filter(quote => 
    quote.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quote.particulars.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quote.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  // Handle search query change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  // Handle new quote button click
  const handleNewItemClick = () => {
    console.log('Creating new quote');
    // Add modal or navigation to create form here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader 
        userName="John Doe" 
        policyNumber="INS293847" 
        phoneNumber="(555) 123-4567" 
      />

      {/* Tabs */}
      <TabNavigation />

      {/* Main content */}
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Search and filter */}
          <SearchFilter 
            activeTab="quotes" 
            searchQuery={searchQuery} 
            onSearchChange={handleSearchChange}
            onNewItemClick={handleNewItemClick}
          />

          {/* Table */}
          <div className="overflow-x-auto">
            <QuotesTable quotes={currentItems} />
          </div>

          {/* Pagination */}
          <div className="py-4 px-6 border-t">
            {totalPages > 0 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Quotes;
