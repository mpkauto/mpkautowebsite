import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, { message: "Invalid phone number format." }), // Basic phone regex
  carModel: z.string().min(2, { message: "Car Model must be at least 2 characters." }),
});

type EstimateFormValues = z.infer<typeof formSchema>;

export function EstimateModal() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<EstimateFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      carModel: "",
    },
  });

  const onSubmit = (values: EstimateFormValues) => {
    console.log("Estimate Request Submitted:", values);
    // TODO: Implement actual submission logic (API call, etc.)
    setIsOpen(false); // Close modal on successful submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Your AC Estimate</DialogTitle>
          <DialogDescription>
            Fill out the details below and we'll get back to you with an estimate.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input id="phone" className="col-span-3" {...form.register("phone")} />
             {form.formState.errors.phone && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="carModel" className="text-right">
              Car Model
            </Label>
            <Input id="carModel" className="col-span-3" {...form.register("carModel")} />
             {form.formState.errors.carModel && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.carModel.message}</p>
            )}
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)} className="bg-blue-500 hover:bg-blue-600">Get Estimate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 