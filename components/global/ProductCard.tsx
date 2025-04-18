"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { CalculatorIcon, DownloadIcon, EyeIcon, VideoIcon } from "../icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "@/i18n/navigation";
type ProductCardProps = { item: any };

const formSchema = z.object({
  length: z.number({
    required_error: "length is required",
    invalid_type_error: "length must be a number",
  }),
  width: z.number({
    required_error: "width is required",
    invalid_type_error: "width must be a number",
  }),
  unit: z.string(),
});

export const ProductCard = ({ item }: ProductCardProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: item?.coverage_rate_unite,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="group relative h-[386px] w-[273px] overflow-hidden border border-secondary">
      <Image
        src={item?.card_image?.image}
        width={1024}
        height={1024}
        alt="application image"
        className="h-[244px] w-[273px] object-contain p-7 duration-300"
      />

      <div className="absolute left-6 top-9 z-50 flex flex-col gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex size-8 items-center justify-center bg-paragraph">
              <EyeIcon width={19} height={11} className="fill-secGray" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
            <DialogHeader>
              <DialogTitle className="text-center">{item?.title}</DialogTitle>
              <Image
                src={item?.card_image?.image}
                alt={item?.title}
                width={1024}
                height={1024}
                className="mx-auto size-96 object-contain"
              />
            </DialogHeader>
            <div className="">
              <div
                dangerouslySetInnerHTML={{ __html: item?.subtitle }}
                className="mb-3"
              />
              <div
                dangerouslySetInnerHTML={{ __html: item?.description }}
                className="mb-3"
              />
              <ul className="mb-3 ms-5">
                {item?.description_advantages.map((desc: any) => (
                  <li
                    key={desc?.id}
                    className="list-disc font-semibold text-primary"
                  >
                    {desc?.content}
                  </li>
                ))}
              </ul>
              <div dangerouslySetInnerHTML={{ __html: item?.how_to_apply }} />

              <div className="my-3 flex flex-wrap justify-between gap-5">
                {item?.places?.map((place: any) => (
                  <div className="flex flex-col items-center gap-1.5">
                    <Image
                      src={place?.image}
                      alt={place?.title}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                    <p className="max-w-36 text-xs font-medium text-secGray">
                      {place?.title}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                text="View Product"
                isLink={true}
                href="/product"
                className="h-16 w-[200px] overflow-hidden text-sm"
              >
                <FaArrowRightLong />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex size-8 items-center justify-center bg-paragraph">
              <VideoIcon width={18} height={14} className="fill-secGray" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
            <DialogHeader>
              <DialogTitle className="text-center">
                {item?.title} Video
              </DialogTitle>
            </DialogHeader>
            <div className="">
              <iframe
                src={item?.videos[0]?.video_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-[331px] w-full"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex size-8 items-center justify-center bg-paragraph">
              <CalculatorIcon width={17} height={18} className="fill-secGray" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
            <DialogHeader>
              <DialogTitle className="text-center">{item?.title}</DialogTitle>
              <div className="flex items-center justify-center">
                <div className="mx-auto flex size-20 items-center justify-center rounded border border-primary text-lg font-semibold text-primary">
                  {item?.weight} {item?.unit_of_measure}
                </div>
                <Image
                  src={item?.card_image?.image}
                  alt={item?.title}
                  width={1024}
                  height={1024}
                  className="mx-auto size-96 object-contain"
                />
              </div>
            </DialogHeader>
            <div className="">
              <Image
                src="/imgs/1.svg"
                alt="dimensions image"
                width={320}
                height={120}
                className="mx-auto"
              />

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-5 flex gap-3"
                >
                  <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Length <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter The Length"
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Width <span className="text-red-600">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter The Width"
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="unit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit</FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            {...field}
                            value={item?.coverage_rate_unite}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex h-16 flex-1 items-end gap-3">
                    <button
                      type="submit"
                      className="rounded bg-secondary px-10 py-3 font-medium text-white"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="rounded bg-primary px-10 py-3 font-medium text-white"
                      onClick={() => form.reset({ length: 0, width: 0 })}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex size-8 items-center justify-center bg-paragraph">
              <DownloadIcon width={16} height={18} className="fill-secGray" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
            <DialogHeader>
              <DialogTitle className="text-center">{item?.title}</DialogTitle>
              <div className="flex items-center justify-center">
                <Image
                  src={item?.card_image?.image}
                  alt={item?.title}
                  width={1024}
                  height={1024}
                  className="mx-auto size-96 object-contain"
                />
              </div>
            </DialogHeader>
            <div className="">
              <Link
                target="_blank"
                href={item?.pdf[0]?.file_url}
                className="flex items-center justify-center gap-2 bg-paragraph py-5 font-semibold text-primary"
              >
                {item?.pdf[0]?.title}
                <DownloadIcon width={16} height={18} className="fill-primary" />
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="absolute bottom-0 top-[284px] flex flex-col justify-center gap-2 px-2 py-3 text-center duration-300 group-hover:bottom-0 group-hover:left-0 group-hover:right-0 group-hover:top-0 group-hover:h-[386px] group-hover:bg-primary/65">
        <h3 className="max-h-[90px] text-xl font-bold text-primary group-hover:pl-[52px] group-hover:text-white">
          {item?.title}
        </h3>
        <p className="text-primary group-hover:pl-[52px] group-hover:text-white">
          {item?.subtitle}
        </p>
        <p
          className="max-h-[161px] overflow-y-hidden px-2 pb-4 text-xs text-white opacity-0 group-hover:pl-[52px] group-hover:opacity-100"
          dangerouslySetInnerHTML={{ __html: item?.description }}
        />

        <Button
          text="View Product"
          isLink={true}
          href="/product"
          className="mx-auto h-16 w-[200px] overflow-hidden text-sm opacity-0 group-hover:opacity-100"
        >
          <FaArrowRightLong />
        </Button>
      </div>

      <div className="absolute bottom-0 right-0 flex h-[43px] w-[74px] items-center justify-center bg-secondary font-bold text-primary group-hover:hidden">
        {item?.weight} {item?.unit_of_measure}
      </div>
    </div>
  );
};

export const ProductEmptyCard = ({ item }: ProductCardProps) => {
  return (
    <div className="relative flex w-full flex-col gap-1.5 border border-secondary">
      <Image
        src={item?.card_image?.image}
        width={1024}
        height={1024}
        alt={item?.title}
        className="h-[244px] w-[273px] object-contain p-7 duration-300"
      />

      <h6 className="text-center text-2xl font-bold text-primary">
        {item?.title}
      </h6>

      <div className="absolute bottom-0 right-0 flex h-[43px] w-[74px] items-center justify-center bg-secondary font-bold text-primary">
        {item?.weight} {item?.unit_of_measure}
      </div>
    </div>
  );
};
