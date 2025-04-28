"use client";

import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

// Define the form input interface
interface IFormInput {
  national_id: string;
  confirm_national_id: string;
  job: string;
  name: string;
  phone_1: string;
  phone_2?: string | undefined;
  state: string;
  address: string;
}

// Create Yup validation schema
const registerSchema = yup.object({
  national_id: yup
    .string()
    .required("رقم البطاقة الشخصية مطلوب")
    .length(14, "يجب أن يتكون من 14 رقمًا"),
  confirm_national_id: yup
    .string()
    .required("تأكيد رقم البطاقة الشخصية مطلوب")
    .oneOf([yup.ref("national_id")], "أرقام البطاقة غير متطابقة"),
  name: yup.string().required("الإسم مطلوب"),
  job: yup.string().required("المهنة مطلوبة"),
  phone_1: yup.string().required("رقم الهاتف 1 مطلوب"),
  phone_2: yup.string().optional(),
  state: yup.string().required("المحافظة مطلوبة"),
  address: yup.string().required("العنوان مطلوب"),
});

export default function RegisterPage() {
  // Initialize the form with validation schema
  const form = useForm<IFormInput>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      national_id: "",
      confirm_national_id: "",
      name: "",
      job: "",
      phone_1: "",
      phone_2: "",
      state: "",
      address: "",
    },
  });

  // Create mutation for API call
  const registerMutation = useMutation({
    mutationFn: async (data: Omit<IFormInput, "confirm_national_id">) => {
      const response = await axios.post(
        "https://web.chema-foam.com/api/Awards/register",
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("تم التسجيل بنجاح", {
        description: "تم تسجيل بياناتك بنجاح في المسابقة",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast.error("خطأ في التسجيل", {
        description: error.response?.data?.message || "حدث خطأ أثناء التسجيل",
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { confirm_national_id, ...apiData } = data;
    registerMutation.mutate(apiData);
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-40 py-10">
      <div className="my-5 self-center text-center">
        <span className="mb-[2rem] text-center">
          <div className="border-b-[0.3rem] border-solid border-[#FBAD4A] pb-[0.5rem]">
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              تسجيل بيانات المشترك للمرة الأولى
            </span>
          </div>
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full grid-cols-2 gap-3 lg:gap-9"
        >
          <FormField
            control={form.control}
            name="national_id"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl text-primary">
                  رقم البطاقة الشخصية *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_national_id"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl text-primary">
                  تأكيد رقم البطاقة الشخصية *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  الإسم كما في البطاقة الشخصية *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">المهنة *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  رقم الهاتف 1 *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  رقم الهاتف 2 (اختياري)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  العنوان *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  المحافظة *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end gap-3 lg:col-span-2">
            <Link
              href="/login"
              className="flex h-12 items-center rounded-none bg-paragraph px-6 text-lg font-bold text-svg hover:bg-paragraph/45 lg:h-[60px] lg:px-10 lg:text-2xl"
            >
              تسجيل الدخول
            </Link>
            <Button
              type="submit"
              disabled={registerMutation.isPending}
              className="h-12 rounded-none bg-secondary px-6 text-lg font-bold text-primary hover:bg-secondary/65 lg:h-[60px] lg:px-10 lg:text-2xl"
            >
              {registerMutation.isPending
                ? "جاري الإرسال..."
                : "الإشتراك في المسابقة"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
