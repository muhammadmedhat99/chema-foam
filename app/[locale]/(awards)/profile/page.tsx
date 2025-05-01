"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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

const userProfileSchema = yup.object({
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

export default function UserProfile() {
  const router = useRouter();
  async function fetchLocalizedData() {
    const token = getCookie("token");
    if (!token) {
      router.push("/login");
    }
    const response = await axios.get(
      "https://web.chema-foam.com/api/Awards/get-auth-user",
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  }

  const { data } = useQuery({
    queryKey: ["UserInformation"],
    queryFn: () => fetchLocalizedData(),
  });

  const form = useForm<IFormInput>({
    resolver: yupResolver(userProfileSchema),
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateProfile.mutate(data);
  };

  const updateProfile = useMutation({
    mutationFn: async (data: Omit<IFormInput, "confirm_national_id">) => {
      const response = await axios.post(
        "https://web.chema-foam.com/api/Awards/update-profile",
        data,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        },
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

  useEffect(() => {
    form.reset({
      national_id: data?.data?.user?.national_id,
      confirm_national_id: data?.data?.user?.national_id,
      name: data?.data?.user?.name,
      job: data?.data?.user?.job,
      phone_1: data?.data?.user?.phone_1,
      phone_2: data?.data?.user?.phone_2,
      state: data?.data?.user?.state,
      address: data?.data?.user?.address,
    });
  }, [data]);

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-40 py-10">
      <div className="my-5 self-center text-center">
        <span className="mb-[2rem] text-center">
          <div className="border-b-[0.3rem] border-solid border-[#FBAD4A] pb-[0.5rem]">
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              تعديل بيانات الملف الشخصي
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

          <div className="self-center text-xs font-bold text-[#5A5A5A] md:self-auto md:text-base">
            الحقول التي بها علامة النجمة (*) هي حقول مطلوبة يجب ملؤها.
          </div>

          <div className="flex items-center justify-end gap-3 lg:col-span-2">
            <Button
              type="submit"
              disabled={updateProfile.isPending}
              className="h-12 rounded-none bg-secondary px-6 text-lg font-bold text-primary hover:bg-secondary/65 lg:h-[60px] lg:px-10 lg:text-2xl"
            >
              {updateProfile.isPending ? "جاري الإرسال..." : "تأكيد"}
            </Button>
          </div>
        </form>
      </Form>
      <img
        src="/imgs/ChemaGroupBlueIcon.svg"
        alt="Chema Group"
        className="my-[2rem] mb-[6rem] h-[3.25rem] w-[9.98625rem] self-center lg:mb-0 lg:mt-[7rem]"
      />
    </div>
  );
}
