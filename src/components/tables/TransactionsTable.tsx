
import React from 'react';
import { Edit } from 'lucide-react';
import { Button } from '../ui/button';
import StatusBadge from '../ui/StatusBadge';

interface Transaction {
  id: string;
  date: string;
  quoteId: string;
  type: string;
  reference: string;
  amount: number;
  status: 'OK' | 'Pending' | 'Failed';
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
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
            Quote #
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Transaction Type
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Reference
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
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
        {transactions.map((transaction, index) => (
          <tr 
            key={transaction.id} 
            className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {transaction.id}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {transaction.date}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {transaction.quoteId}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500">
              {transaction.type}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {transaction.reference}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {transaction.amount.toLocaleString()}
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              <StatusBadge status={transaction.status} type="transaction" />
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

export default TransactionsTable;
