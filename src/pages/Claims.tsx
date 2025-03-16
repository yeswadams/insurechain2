import React, { useState } from 'react';
import { claimsData } from '../data/mockData';
import PageHeader from '../components/layout/PageHeader';
import TabNavigation from '../components/navigation/TabNavigation';
import SearchFilter from '../components/ui/SearchFilter';
import ClaimsTable from '../components/tables/ClaimsTable';
import PageFooter from '../components/layout/PageFooter';
import Pagination from '../components/ui/pagination';

const Claims = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = claimsData.filter(claim => 
    claim.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    claim.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    claim.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    claim.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        userName="John Doe" 
        policyNumber="INS293847" 
        phoneNumber="(555) 123-4567" 
      />

      <TabNavigation />

      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <SearchFilter 
            activeTab="claims" 
            searchQuery={searchQuery} 
            onSearchChange={handleSearchChange}
          />

          <div className="overflow-x-auto">
            <ClaimsTable claims={currentItems} />
          </div>

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

      <PageFooter />
    </div>
  );
};

export default Claims;
