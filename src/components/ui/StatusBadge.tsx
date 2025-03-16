
interface StatusBadgeProps {
  status: string;
  type: 'claim' | 'quote' | 'transaction';
}

const StatusBadge = ({ status, type }: StatusBadgeProps) => {
  let colors = '';
  
  if (type === 'claim') {
    const claimColors = {
      'Open': 'bg-green-100 text-green-800',
      'In Review': 'bg-orange-100 text-orange-800',
      'Closed': 'bg-red-100 text-red-800'
    };
    colors = claimColors[status as keyof typeof claimColors];
  } else if (type === 'quote') {
    const quoteColors = {
      'Paid': 'bg-green-100 text-green-800',
      'Not Paid': 'bg-orange-100 text-orange-800'
    };
    colors = quoteColors[status as keyof typeof quoteColors];
  } else if (type === 'transaction') {
    const transactionColors = {
      'OK': 'bg-green-100 text-green-800',
      'Pending': 'bg-orange-100 text-orange-800',
      'Failed': 'bg-red-100 text-red-800'
    };
    colors = transactionColors[status as keyof typeof transactionColors];
  }
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
