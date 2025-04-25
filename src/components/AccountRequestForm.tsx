
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type FormData = {
  firstName: string;
  lastName: string;
  title: string;
  telephone: string;
  email: string;
  confirmEmail: string;
  company: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  oemAffiliation: string;
  ascListing: string;
  currentSupplier: string;
  interestedParts: string;
};

const AccountRequestForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Want an Account?</h2>
              <p className="text-gray-600 mb-4">
                First, we need to know how you are affiliated with a petroleum industry OEM.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Why do I need an OEM affiliation to get an account with Freedom?
                Certain products may require special training and tools that are
                only available to industry certified technicians.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Are you a C-Store Owner?</h2>
              <p className="text-gray-600 mb-4">Need the part right now?</p>
              <p className="text-gray-600 mb-4">
                Please shop our site at{" "}
                <a href="https://freedomelectronics.com/shop" className="text-blue-600 hover:underline">
                  freedomelectronics.com/shop
                </a>
              </p>
              <p className="text-gray-600">No account required to purchase.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register("firstName", { required: true })}
                  className={errors.firstName ? "border-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName", { required: true })}
                  className={errors.lastName ? "border-red-500" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title")} />
              </div>
              <div>
                <Label htmlFor="telephone">Telephone *</Label>
                <Input
                  id="telephone"
                  {...register("telephone", { required: true })}
                  className={errors.telephone ? "border-red-500" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className={errors.email ? "border-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="confirmEmail">Confirm Email *</Label>
                <Input
                  id="confirmEmail"
                  type="email"
                  {...register("confirmEmail", {
                    required: true,
                    validate: (value) => value === watch("email")
                  })}
                  className={errors.confirmEmail ? "border-red-500" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  {...register("company", { required: true })}
                  className={errors.company ? "border-red-500" : ""}
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  {...register("city", { required: true })}
                  className={errors.city ? "border-red-500" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="state">State</Label>
                <Select {...register("state")}>
                  <option value="">Please select...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  {/* Add all states */}
                </Select>
              </div>
              <div>
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" {...register("zipCode")} />
              </div>
            </div>

            <div>
              <Label htmlFor="oemAffiliation">OEM Affiliation *</Label>
              <Select
                {...register("oemAffiliation", { required: true })}
                className={errors.oemAffiliation ? "border-red-500" : ""}
              >
                <option value="">Please select...</option>
                <option value="gilbarco">Gilbarco</option>
                <option value="wayne">Wayne</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="currentSupplier">Where do you buy parts today? *</Label>
              <Input
                id="currentSupplier"
                {...register("currentSupplier", { required: true })}
                className={errors.currentSupplier ? "border-red-500" : ""}
              />
            </div>

            <div>
              <Label htmlFor="interestedParts">What parts are you interested in buying from us?</Label>
              <Input
                id="interestedParts"
                {...register("interestedParts")}
                className="h-24"
              />
            </div>

            <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountRequestForm;
