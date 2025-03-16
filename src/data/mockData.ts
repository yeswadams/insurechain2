
// Types
export interface Claim {
  id: string;
  date: string;
  type: string;
  description: string;
  probability: number;
  probableDate: string;
  status: 'Open' | 'In Review' | 'Closed';
}

export interface Quote {
  id: string;
  date: string;
  particulars: string;
  amount: number;
  paid: number;
  balance: number;
  status: 'Paid' | 'Not Paid';
}

export interface Transaction {
  id: string;
  date: string;
  quoteId: string;
  type: string;
  reference: string;
  amount: number;
  status: 'OK' | 'Pending' | 'Failed';
}

// Sample claims data
export const claimsData: Claim[] = [
  {
    id: 'CLM001',
    date: '2023-10-15',
    type: 'Auto',
    description: 'Collision damage to front bumper',
    probability: 85,
    probableDate: '2023-11-10',
    status: 'Open'
  },
  {
    id: 'CLM002',
    date: '2023-09-22',
    type: 'Home',
    description: 'Water damage from roof leak',
    probability: 92,
    probableDate: '2023-10-30',
    status: 'In Review'
  },
  {
    id: 'CLM003',
    date: '2023-08-05',
    type: 'Health',
    description: 'Emergency room visit',
    probability: 78,
    probableDate: '2023-09-15',
    status: 'Closed'
  },
  {
    id: 'CLM004',
    date: '2023-09-10',
    type: 'AOC',
    description: 'Valuable item insurance claim',
    probability: 65,
    probableDate: '2023-10-25',
    status: 'Open'
  },
  {
    id: 'CLM005',
    date: '2023-10-02',
    type: 'Auto',
    description: 'Wind damage to vehicle',
    probability: 88,
    probableDate: '2023-11-05',
    status: 'In Review'
  },
  {
    id: 'CLM006',
    date: '2023-08-15',
    type: 'Home',
    description: 'Theft of personal property',
    probability: 79,
    probableDate: '2023-09-20',
    status: 'Closed'
  },
  {
    id: 'CLM007',
    date: '2023-10-10',
    type: 'Health',
    description: 'Prescription medication',
    probability: 95,
    probableDate: '2023-10-30',
    status: 'Open'
  },
  {
    id: 'CLM008',
    date: '2023-09-05',
    type: 'AOC',
    description: 'Travel insurance claim',
    probability: 70,
    probableDate: '2023-10-15',
    status: 'In Review'
  },
  {
    id: 'CLM009',
    date: '2023-08-28',
    type: 'Auto',
    description: 'Hit and run damage',
    probability: 82,
    probableDate: '2023-10-01',
    status: 'Closed'
  },
  {
    id: 'CLM010',
    date: '2023-10-05',
    type: 'Home',
    description: 'Fire damage to kitchen',
    probability: 90,
    probableDate: '2023-11-15',
    status: 'Open'
  },
];

// Sample quotes data
export const quotesData: Quote[] = [
  {
    id: '123',
    date: '2020/11',
    particulars: 'Motor Private',
    amount: 10000,
    paid: 10000,
    balance: 0,
    status: 'Paid'
  },
  {
    id: '124',
    date: '--',
    particulars: '--',
    amount: 0,
    paid: 0,
    balance: 0,
    status: 'Not Paid'
  },
  {
    id: '125',
    date: '2021/01',
    particulars: 'Home Insurance',
    amount: 8500,
    paid: 4250,
    balance: 4250,
    status: 'Not Paid'
  },
  {
    id: '126',
    date: '2021/02',
    particulars: 'Health Insurance',
    amount: 12000,
    paid: 12000,
    balance: 0,
    status: 'Paid'
  },
  {
    id: '127',
    date: '2021/03',
    particulars: 'Travel Insurance',
    amount: 3500,
    paid: 0,
    balance: 3500,
    status: 'Not Paid'
  },
  {
    id: '128',
    date: '2021/04',
    particulars: 'Business Insurance',
    amount: 15000,
    paid: 15000,
    balance: 0,
    status: 'Paid'
  }
];

// Sample transactions data
export const transactionsData: Transaction[] = [
  {
    id: '141',
    date: '2020/11',
    quoteId: '123',
    type: 'MPESA',
    reference: 'X14121',
    amount: 5000,
    status: 'OK'
  },
  {
    id: '142',
    date: '2020/11',
    quoteId: '123',
    type: 'MPESA',
    reference: 'X14122',
    amount: 5000,
    status: 'OK'
  },
  {
    id: '143',
    date: '2021/01',
    quoteId: '125',
    type: 'Bank Transfer',
    reference: 'BT4321',
    amount: 4250,
    status: 'OK'
  },
  {
    id: '144',
    date: '2021/02',
    quoteId: '126',
    type: 'Credit Card',
    reference: 'CC7890',
    amount: 12000,
    status: 'OK'
  },
  {
    id: '145',
    date: '2021/03',
    quoteId: '127',
    type: 'MPESA',
    reference: 'X14123',
    amount: 3500,
    status: 'Pending'
  },
  {
    id: '146',
    date: '2021/04',
    quoteId: '128',
    type: 'Bank Transfer',
    reference: 'BT4322',
    amount: 7500,
    status: 'Failed'
  },
  {
    id: '147',
    date: '2021/04',
    quoteId: '128',
    type: 'Bank Transfer',
    reference: 'BT4323',
    amount: 7500,
    status: 'OK'
  }
];
