
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import TabNavigation from '../components/navigation/TabNavigation';
import PageFooter from '../components/layout/PageFooter';
import { Search, Grid, List, Bell, Filter, User, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { insurancePolicies, insuranceCategories } from '../data/insuranceData';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter active policies for Current Insurances section
  const activePolicies = insurancePolicies.filter(
    policy => policy.status === 'Active' || policy.status === 'Pending Renewal'
  );
  
  // Filter policies based on search query
  const filteredActivePolicies = activePolicies.filter(policy =>
    policy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    policy.policyNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  // Status color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      case 'Pending Renewal':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
      <PageHeader 
        userName="John Kaura" 
        policyNumber="INS293847" 
        phoneNumber="(555) 123-4567"
        userEmail='kaurajohn@gmail.com' 
      />


       <TabNavigation />   
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Dashboard</h1>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Search policies..."
                className="pl-10 pr-4 py-2 w-full md:w-60 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-insurBlue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="relative" title="Notifications">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <Button variant="outline" size="sm" title="Filter">
                <Filter className="h-4 w-4" />
              </Button>
              
              <div className="border rounded-md p-0.5 flex bg-gray-100">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'ghost'} 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" size="sm" title="Profile">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        

        {/* Current Insurances Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Insurances</h2>
          
          {filteredActivePolicies.length === 0 ? (
            <p className="text-gray-500">No active policies found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Renewal Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredActivePolicies.map((policy) => (
                    <tr key={policy.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{policy.name}</div>
                        <div className="text-sm text-gray-500">{policy.policyNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(policy.status)}`}>
                          {policy.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {policy.renewalDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {policy.premium}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-1 text-insurBlue-600"
                          onClick={() => navigate(`/policy/${policy.id}`)}
                        >
                          View Details
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Insurance Categories Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Insurance Categories</h2>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {insuranceCategories.map((category) => (
                <div 
                  key={category.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="h-32 p-4 flex items-center justify-center bg-insurBlue-50">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{category.policyCount} policies</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {insuranceCategories.map((category, index) => (
                <div 
                  key={category.id}
                  className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${
                    index !== insuranceCategories.length - 1 ? 'border-b' : ''
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="h-12 w-12 rounded-full bg-insurBlue-50 flex items-center justify-center mr-4">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.policyCount} policies</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default Dashboard;
