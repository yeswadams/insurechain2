
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import PageFooter from '../components/layout/PageFooter';
import { ArrowLeft, Calendar, DollarSign, Phone, Clock, FileText, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { insurancePolicies, insuranceCategories } from '../data/insuranceData';

const PolicyDetail = () => {
  const { policyId } = useParams<{ policyId: string }>();
  const navigate = useNavigate();

  // Find the policy details
  const policy = insurancePolicies.find(p => p.id === policyId);
  
  // If policy not found, show error
  if (!policy) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Policy Not Found</h1>
        <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </div>
    );
  }
  
  // Find the category
  const category = insuranceCategories.find(c => c.id === policy.categoryId);
  
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageHeader 
        userName="John Doe" 
        policyNumber="INS293847" 
        phoneNumber="(555) 123-4567" 
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-4 text-gray-600 hover:text-gray-900 -ml-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                {category && (
                  <div className="h-12 w-12 rounded-full bg-insurBlue-50 flex items-center justify-center mr-4">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{policy.name}</h1>
                  <p className="text-sm text-gray-500">Policy #{policy.policyNumber}</p>
                </div>
              </div>
              
              <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColor(policy.status)}`}>
                {policy.status}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Initiation Date
                </h3>
                <p className="text-lg font-semibold">{policy.initiationDate}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Expiry Date
                </h3>
                <p className="text-lg font-semibold">{policy.expiryDate}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Premium Amount
                </h3>
                <p className="text-lg font-semibold">{policy.premium}</p>
              </div>
              
              {policy.paymentDueDate && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Payment Due Date
                  </h3>
                  <p className="text-lg font-semibold">{policy.paymentDueDate}</p>
                </div>
              )}
              
              {policy.renewalDate && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Renewal Date
                  </h3>
                  <p className="text-lg font-semibold">{policy.renewalDate}</p>
                </div>
              )}
              
              {policy.supportContact && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Support Contact
                  </h3>
                  <p className="text-lg font-semibold">{policy.supportContact}</p>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Policy Details
              </h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  This policy provides coverage for {policy.name.toLowerCase()} with a premium of {policy.premium}.
                  The policy is currently {policy.status.toLowerCase()} and is valid from {policy.initiationDate} until {policy.expiryDate}.
                </p>
              </div>
              
              {policy.hasClaimsMade && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Claims History
                  </h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {Math.random() > 0.5 ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">
                          Claim #{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                        </h4>
                        <p className="mt-1 text-sm text-gray-700">
                          Claim filed on {new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {policy.status === 'Pending Renewal' && (
                <Button className="bg-insurBlue-600 hover:bg-insurBlue-700">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Renew Policy
                </Button>
              )}
              
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Download Policy Document
              </Button>
              
              {policy.supportContact && (
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default PolicyDetail;
