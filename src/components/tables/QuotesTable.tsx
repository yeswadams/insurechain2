
import React from 'react';
import { Edit } from 'lucide-react';
import { Button } from '../ui/button';
import StatusBadge from '../ui/StatusBadge';

interface Quote {
  id: string;
  date: string;
  particulars: string;
  amount: number;
  paid: number;
  balance: number;
  status: 'Paid' | 'Not Paid';
}

interface QuotesTableProps {
  quotes: Quote[];
}

const QuotesTable = ({ quotes }: QuotesTableProps) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Particulars
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Paid
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Balance
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {quotes.map((quote, index) => (
          <tr 
            key={quote.id} 
            className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {quote.id}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {quote.date}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500">
              {quote.particulars}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {quote.amount.toLocaleString()}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {quote.paid.toLocaleString()}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {quote.balance.toLocaleString()}
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <StatusBadge status={quote.status} type="quote" />
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Edit">
                <Edit className="h-4 w-4" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuotesTable;
