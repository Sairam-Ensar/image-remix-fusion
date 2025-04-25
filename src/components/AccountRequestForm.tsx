import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  Want an Account?
                </CardTitle>
                <CardDescription className="text-gray-600">
                  First, we need to know how you are affiliated with a petroleum industry OEM.
                </CardDescription>
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  Are you a C-Store Owner?
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Need the part right now? Please shop our site at{" "}
                  <a href="https://freedomelectronics.com/shop" 
                     className="text-blue-600 hover:text-blue-700 underline">
                    freedomelectronics.com/shop
                  </a>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Who is requesting this account?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register("firstName", { required: true })}
                      className={`bg-gray-50 border ${errors.firstName ? "border-red-500" : "border-gray-200"} rounded-lg`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register("lastName", { required: true })}
                      className={`bg-gray-50 border ${errors.lastName ? "border-red-500" : "border-gray-200"} rounded-lg`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700">Title</Label>
                  <Input
                    id="title"
                    {...register("title")}
                    className="bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-gray-700">Telephone *</Label>
                    <Input
                      id="telephone"
                      {...register("telephone", { required: true })}
                      className={`bg-gray-50 border ${errors.telephone ? "border-red-500" : "border-gray-200"} rounded-lg`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-lg`}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Company Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Company Name *</Label>
                  <Input
                    id="company"
                    {...register("company", { required: true })}
                    className={`bg-gray-50 border ${errors.company ? "border-red-500" : "border-gray-200"} rounded-lg`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">City *</Label>
                    <Input
                      id="city"
                      {...register("city", { required: true })}
                      className={`bg-gray-50 border ${errors.city ? "border-red-500" : "border-gray-200"} rounded-lg`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-gray-700">State</Label>
                    <Controller
                      control={control}
                      name="state"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className={`bg-gray-50 ${errors.state ? "border-red-500" : "border-gray-200"}`}>
                            <SelectValue placeholder="Select state..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AL">Alabama</SelectItem>
                            <SelectItem value="AK">Alaska</SelectItem>
                            {/* Add all states */}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-gray-700">Zip Code</Label>
                    <Input
                      id="zipCode"
                      {...register("zipCode")}
                      className="bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="oemAffiliation" className="text-gray-700">OEM Affiliation *</Label>
                  <Controller
                    control={control}
                    name="oemAffiliation"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className={`bg-gray-50 ${errors.oemAffiliation ? "border-red-500" : "border-gray-200"}`}>
                          <SelectValue placeholder="Select affiliation..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gilbarco">Gilbarco</SelectItem>
                          <SelectItem value="wayne">Wayne</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentSupplier" className="text-gray-700">Where do you buy parts today? *</Label>
                  <Input
                    id="currentSupplier"
                    {...register("currentSupplier", { required: true })}
                    className={`bg-gray-50 border ${errors.currentSupplier ? "border-red-500" : "border-gray-200"} rounded-lg`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestedParts" className="text-gray-700">What parts are you interested in buying from us?</Label>
                  <Input
                    id="interestedParts"
                    {...register("interestedParts")}
                    className="bg-gray-50 border border-gray-200 rounded-lg min-h-[100px]"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountRequestForm;
