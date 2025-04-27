"use client";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface IFormInput {
  first_name: string;
  last_name: string;
  message: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  street: string;
  postal?: string | undefined;
  city?: string | undefined;
  fax?: string | undefined;
}

const schema = yup
  .object({
    first_name: yup.string().required("This Input Is Required"),
    last_name: yup.string().required("This Input Is Required"),
    message: yup.string().required("This Input Is Required"),
    company: yup.string().required("This Input Is Required"),
    email: yup.string().required("This Input Is Required"),
    phone: yup.string().required("This Input Is Required"),
    country: yup.string().required("This Input Is Required"),
    street: yup.string().required("This Input Is Required"),
    postal: yup.string().notRequired().nonNullable(),
    city: yup.string().notRequired().nonNullable(),
    fax: yup.string().notRequired().nonNullable(),
  })
  .required();

const submitContactForm = async (formData: IFormInput) => {
  const response = await axios.post(
    "https://web.chema-foam.com/api/ContactUs/forms/Products-solutions",
    formData,
  );
  return response.data;
};

export const ContactForm = () => {
  const form = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      console.log("Form submitted successfully");
      toast.success("Form submitted successfully");
      handleReset();
    },
    onError: (error) => {
      toast.error(error.message as string);
      console.error("Form submission failed:", error);
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutation.mutate(data);
  };

  const handleReset = () => {
    form.reset({
      first_name: "",
      last_name: "",
      message: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      street: "",
      postal: "",
      city: "",
      fax: "",
    });
  };
  const t = useTranslations("Contact");
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-3 lg:grid-cols-3 lg:gap-9"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">
                {t("your_message")} *
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  {...field}
                  cols={30}
                  rows={15}
                  className="rounded-none border-0 bg-[#5A5A5A1A]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-3 lg:col-span-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel className="text-xl text-primary">
                  {t("company")} *
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
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  {t("first_name")} *
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
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-primary">
                  {t("last_name")} *
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
            name="street"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel className="text-xl text-primary">
                  {t("street_number")}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-none border-0 bg-[#5A5A5A1A]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="postal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">
                {t("postal_code")}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="rounded-none border-0 bg-[#5A5A5A1A]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">
                {t("city")}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="rounded-none border-0 bg-[#5A5A5A1A]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">
                {t("country")} *
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">
                {t("phone")} *
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
          name="fax"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">{t("fax")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="rounded-none border-0 bg-[#5A5A5A1A]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl text-primary">
                {t("email")} *
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
        <div className="flex items-center justify-end gap-3 lg:col-span-3">
          <Button
            type="button"
            onClick={handleReset}
            className="h-12 rounded-none bg-paragraph px-6 text-lg font-bold text-svg hover:bg-paragraph/45 lg:h-[60px] lg:px-10 lg:text-2xl"
          >
            {t("reset")}
          </Button>
          <Button
            type="submit"
            className="h-12 rounded-none bg-secondary px-6 text-lg font-bold text-primary hover:bg-secondary/65 lg:h-[60px] lg:px-10 lg:text-2xl"
          >
            {t("submit_form")}
          </Button>
        </div>
      </form>
    </Form>
  );
};
