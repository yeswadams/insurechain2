
// Mock data for insurance categories and policies

export interface InsuranceCategory {
  id: string;
  name: string;
  icon: string;
  policyCount: number;
}

export interface InsurancePolicy {
  id: string;
  categoryId: string;
  name: string;
  initiationDate: string;
  expiryDate: string;
  status: 'Active' | 'Expired' | 'Pending Renewal';
  policyNumber: string;
  premium: string;
  paymentDueDate?: string;
  renewalDate?: string;
  hasClaimsMade: boolean;
  supportContact?: string;
}

// Insurance categories
export const insuranceCategories: InsuranceCategory[] = [
  {
    id: 'motor',
    name: 'Motor Vehicle Insurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/3097/3097180.png',
    policyCount: 3
  },
  {
    id: 'life',
    name: 'Life Insurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png',
    policyCount: 1
  },
  {
    id: 'accident',
    name: 'Accident Insurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/2832/2832494.png',
    policyCount: 1
  },
  {
    id: 'investment',
    name: 'Investment Insurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/1522/1522139.png',
    policyCount: 2
  },
  {
    id: 'medical',
    name: 'Medical Insurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
    policyCount: 1
  },
  {
    id: 'agricultural',
    name: 'Agricultural Insurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/2454/2454410.png',
    policyCount: 0
  }
];

// Insurance policies
export const insurancePolicies: InsurancePolicy[] = [
  {
    id: 'policy1',
    categoryId: 'motor',
    name: 'Comprehensive Auto Insurance',
    initiationDate: '2023-01-15',
    expiryDate: '2024-01-14',
    status: 'Active',
    policyNumber: 'MOT-2023-0001',
    premium: '$1,200/year',
    renewalDate: '2024-01-14',
    hasClaimsMade: false,
    supportContact: '+1 (555) 123-4567'
  },
  {
    id: 'policy2',
    categoryId: 'motor',
    name: 'Third Party Auto Insurance',
    initiationDate: '2023-03-10',
    expiryDate: '2023-09-09',
    status: 'Expired',
    policyNumber: 'MOT-2023-0002',
    premium: '$600/year',
    hasClaimsMade: true,
    supportContact: '+1 (555) 123-4567'
  },
  {
    id: 'policy3',
    categoryId: 'motor',
    name: 'Motorcycle Insurance',
    initiationDate: '2023-05-22',
    expiryDate: '2024-05-21',
    status: 'Active',
    policyNumber: 'MOT-2023-0003',
    premium: '$800/year',
    renewalDate: '2024-05-21',
    hasClaimsMade: false,
    supportContact: '+1 (555) 123-4567'
  },
  {
    id: 'policy4',
    categoryId: 'life',
    name: 'Term Life Insurance',
    initiationDate: '2022-11-05',
    expiryDate: '2032-11-04',
    status: 'Active',
    policyNumber: 'LIF-2022-0001',
    premium: '$2,400/year',
    paymentDueDate: '2023-11-05',
    hasClaimsMade: false,
    supportContact: '+1 (555) 987-6543'
  },
  {
    id: 'policy5',
    categoryId: 'accident',
    name: 'Personal Accident Cover',
    initiationDate: '2023-02-18',
    expiryDate: '2024-02-17',
    status: 'Pending Renewal',
    policyNumber: 'ACC-2023-0001',
    premium: '$350/year',
    renewalDate: '2024-02-17',
    paymentDueDate: '2024-02-01',
    hasClaimsMade: true
  },
  {
    id: 'policy6',
    categoryId: 'investment',
    name: 'Retirement Plan',
    initiationDate: '2021-07-12',
    expiryDate: '2036-07-11',
    status: 'Active',
    policyNumber: 'INV-2021-0001',
    premium: '$3,600/year',
    paymentDueDate: '2023-07-12',
    hasClaimsMade: false,
    supportContact: '+1 (555) 456-7890'
  },
  {
    id: 'policy7',
    categoryId: 'investment',
    name: 'Child Education Plan',
    initiationDate: '2022-03-30',
    expiryDate: '2037-03-29',
    status: 'Active',
    policyNumber: 'INV-2022-0002',
    premium: '$1,800/year',
    paymentDueDate: '2023-03-30',
    hasClaimsMade: false,
    supportContact: '+1 (555) 456-7890'
  },
  {
    id: 'policy8',
    categoryId: 'medical',
    name: 'Family Health Insurance',
    initiationDate: '2023-04-08',
    expiryDate: '2024-04-07',
    status: 'Active',
    policyNumber: 'MED-2023-0001',
    premium: '$2,100/year',
    renewalDate: '2024-04-07',
    hasClaimsMade: true,
    supportContact: '+1 (555) 234-5678'
  }
];
