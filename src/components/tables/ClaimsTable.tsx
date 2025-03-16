
import React from 'react';
import { Edit, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import StatusBadge from '../ui/StatusBadge';

interface Claim {
  id: string;
  date: string;
  type: string;
  description: string;
  probability: number;
  probableDate: string;
  status: 'Open' | 'In Review' | 'Closed';
}

interface ClaimsTableProps {
  claims: Claim[];
}

const ClaimsTable = ({ claims }: ClaimsTableProps) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            # ID
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Type
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Probability
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Probable Date
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {claims.map((claim, index) => (
          <tr 
            key={claim.id} 
            className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {claim.id}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(claim.date).toLocaleDateString()}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {claim.type}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 max-w-xs truncate">
              {claim.description}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {claim.probability}%
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(claim.probableDate).toLocaleDateString()}
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <StatusBadge status={claim.status} type="claim" />
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="View">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Edit">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClaimsTable;
