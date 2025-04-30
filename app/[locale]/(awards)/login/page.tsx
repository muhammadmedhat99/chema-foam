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

import { setCookie } from "cookies-next";

interface IFormInput {
  national_id: string;
}
const loginSchema = yup.object({
  national_id: yup
    .string()
    .required("رقم البطاقة الشخصية مطلوب")
    .length(14, "يجب أن يتكون من 14 رقمًا"),
});
export default function LoginPage() {
  const form = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      national_id: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: IFormInput) => {
      const response = await axios.post(
        "https://web.chema-foam.com/api/Awards/login",
        data,
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("تم التسجيل بنجاح", {
        description: "تم تسجيل بياناتك بنجاح في المسابقة",
      });
      setCookie("token", data?.user?.token);
      form.reset();
    },
    onError: (error: any) => {
      toast.error("خطأ في التسجيل", {
        description: error.response?.data?.message || "حدث خطأ أثناء التسجيل",
      });
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginMutation.mutate(data);
  };
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 px-40 py-10">
      <div className="my-5 self-center text-center">
        <span className="mb-[2rem] text-center">
          <div className="border-b-[0.3rem] border-solid border-[#FBAD4A] pb-[0.5rem]">
            <span className="leading-13 !text-sm text-xl font-semibold text-[#1C4585] lg:!text-2xl">
              تسجيل الدخول
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

          <div className="self-center text-xs font-bold text-[#5A5A5A] md:self-auto md:text-base">
            الحقول التي بها علامة النجمة (*) هي حقول مطلوبة يجب ملؤها.
          </div>

          <div className="flex items-center justify-end gap-3 lg:col-span-2">
            <Link
              href="/register"
              className="flex h-12 items-center rounded-none bg-paragraph px-6 text-lg font-bold text-svg hover:bg-paragraph/45 lg:h-[60px] lg:px-10 lg:text-2xl"
            >
              التسجيل في البرنامج
            </Link>
            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="h-12 rounded-none bg-secondary px-6 text-lg font-bold text-primary hover:bg-secondary/65 lg:h-[60px] lg:px-10 lg:text-2xl"
            >
              {loginMutation.isPending ? "جاري الإرسال..." : "تسجيل دخول"}
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
