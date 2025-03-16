
import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import TabNavigation from '../components/navigation/TabNavigation';
import PageFooter from '../components/layout/PageFooter';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Policy {
  id: string;
  date: string;
  policyType: string;
  description: string;
  policyDate: string;
  status: string;
}

const Policies = () => {
  const { toast } = useToast();
  const [policies, setPolicies] = useState<Policy[]>([
    {
      id: 'POL001',
      date: '2024/12',
      policyType: 'Auto Insurance',
      description: 'Full coverage auto policy',
      policyDate: '2024/11',
      status: 'Active'
    },
    {
      id: 'POL002',
      date: '2024/10',
      policyType: 'Home Insurance',
      description: 'Homeowners policy with flood coverage',
      policyDate: '2024/09',
      status: 'Active'
    },
    {
      id: 'POL003',
      date: '2024/08',
      policyType: 'Life Insurance',
      description: 'Term life policy - 30 years',
      policyDate: '2024/07',
      status: 'Pending'
    },
  ]);

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState<Policy | null>(null);
  const [formData, setFormData] = useState<Policy>({
    id: '',
    date: '',
    policyType: '',
    description: '',
    policyDate: '',
    status: 'Active'
  });

  // Generate a unique ID for new policies
  const generatePolicyId = () => {
    const nextId = policies.length > 0 
      ? String(Number(policies[policies.length - 1].id.replace('POL', '')) + 1).padStart(3, '0')
      : '001';
    return `POL${nextId}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddPolicy = () => {
    const newPolicy = {
      ...formData,
      id: generatePolicyId()
    };
    
    setPolicies([...policies, newPolicy]);
    setIsAddOpen(false);
    
    toast({
      title: "Success",
      description: "New policy has been added.",
    });
    
    // Reset form
    setFormData({
      id: '',
      date: '',
      policyType: '',
      description: '',
      policyDate: '',
      status: 'Active'
    });
  };

  const handleViewPolicy = (policy: Policy) => {
    setCurrentPolicy(policy);
    setIsViewOpen(true);
  };

  const handleEditClick = (policy: Policy) => {
    setCurrentPolicy(policy);
    setFormData(policy);
    setIsEditOpen(true);
  };

  const handleUpdatePolicy = () => {
    if (!currentPolicy) return;
    
    const updatedPolicies = policies.map(p => 
      p.id === currentPolicy.id ? formData : p
    );
    
    setPolicies(updatedPolicies);
    setIsEditOpen(false);
    
    toast({
      title: "Success",
      description: "Policy has been updated.",
    });
  };

  const handleDeleteClick = (policy: Policy) => {
    setCurrentPolicy(policy);
    setIsDeleteOpen(true);
  };

  const handleDeletePolicy = () => {
    if (!currentPolicy) return;
    
    const updatedPolicies = policies.filter(p => p.id !== currentPolicy.id);
    setPolicies(updatedPolicies);
    setIsDeleteOpen(false);
    
    toast({
      title: "Success",
      description: "Policy has been deleted.",
    });
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Policies</h1>
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button className="bg-insurTeal-500 hover:bg-insurTeal-600">
                <Plus className="mr-2 h-4 w-4" />
                Add New Policy
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Policy</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="policyType" className="text-right">
                    Policy Type
                  </Label>
                  <Input
                    id="policyType"
                    name="policyType"
                    value={formData.policyType}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="policyDate" className="text-right">
                    Policy Date
                  </Label>
                  <Input
                    id="policyDate"
                    name="policyDate"
                    value={formData.policyDate}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select 
                    value={formData.status} 
                    onValueChange={(value) => handleSelectChange('status', value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Expired">Expired</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddPolicy}>
                  Save Policy
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="overflow-x-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {policies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{policy.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{policy.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{policy.policyType}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{policy.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{policy.policyDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${policy.status === 'Active' ? 'bg-green-100 text-green-800' : 
                          policy.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          policy.status === 'Expired' ? 'bg-gray-100 text-gray-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {policy.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleViewPolicy(policy)}
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditClick(policy)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteClick(policy)}
                          title="Delete"
                          className="text-red-600 hover:text-red-900 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* View Policy Dialog */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Policy Details</DialogTitle>
          </DialogHeader>
          {currentPolicy && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-medium">ID</Label>
                <div className="col-span-3">{currentPolicy.id}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-medium">Date</Label>
                <div className="col-span-3">{currentPolicy.date}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-medium">Policy Type</Label>
                <div className="col-span-3">{currentPolicy.policyType}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-medium">Description</Label>
                <div className="col-span-3">{currentPolicy.description}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-medium">Policy Date</Label>
                <div className="col-span-3">{currentPolicy.policyDate}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-medium">Status</Label>
                <div className="col-span-3">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${currentPolicy.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    currentPolicy.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                    currentPolicy.status === 'Expired' ? 'bg-gray-100 text-gray-800' : 
                    'bg-red-100 text-red-800'}`}>
                    {currentPolicy.status}
                  </span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsViewOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Policy Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Policy</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-date" className="text-right">
                Date
              </Label>
              <Input
                id="edit-date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-policyType" className="text-right">
                Policy Type
              </Label>
              <Input
                id="edit-policyType"
                name="policyType"
                value={formData.policyType}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-description" className="text-right">
                Description
              </Label>
              <Input
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-policyDate" className="text-right">
                Policy Date
              </Label>
              <Input
                id="edit-policyDate"
                name="policyDate"
                value={formData.policyDate}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-status" className="text-right">
                Status
              </Label>
              <Select 
                value={formData.status} 
                onValueChange={(value) => handleSelectChange('status', value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Expired">Expired</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdatePolicy}>
              Update Policy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this policy? This action cannot be undone.</p>
            {currentPolicy && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p><span className="font-medium">ID:</span> {currentPolicy.id}</p>
                <p><span className="font-medium">Type:</span> {currentPolicy.policyType}</p>
                <p><span className="font-medium">Description:</span> {currentPolicy.description}</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeletePolicy}
            >
              Delete Policy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <PageFooter />
    </div>
  );
};

export default Policies;
