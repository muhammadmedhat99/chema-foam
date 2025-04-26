"use client";
import Image from "next/image";
import { ProductCard, ProductEmptyCard } from "@/components/global/ProductCard";
import { CalculatorIcon, DownloadIcon, VideoIcon } from "@/components/icons";
import { CustomAccordion } from "../about/Accordion";
import {
  BiBuildings,
  BiCategory,
  BiListUl,
  BiMessageSquareDots,
  BiRefresh,
  BiSolidCommentX,
  BiWrench,
} from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { ApplicationCard } from "@/components/global/ApplicationCard";
import { Sidebar } from "../applications/Sidebar";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
type ProductDetailsProps = {
  data: any;
  productData: any;
  related: any;
};

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
export const ProductDetails = ({
  data,
  productData,
  related,
}: ProductDetailsProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: productData?.coverage_rate_unite,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const t = useTranslations("Products");
  return (
    <>
      <Sidebar
        filterTitle={t("products")}
        filters={data?.sidebar}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        searchParamKey="product"
        singleSelection
        defaultCat="products"
      />

      <div className="lg:col-span-3">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <ProductEmptyCard item={productData} />

          <div className="relative col-span-2">
            <Image
              src={productData?.header_image?.image}
              alt={productData?.title}
              width={720}
              height={320}
              className="object-cover"
            />

            <div className="absolute left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 bg-primary/65">
              <h6 className="text-6xl font-semibold text-white">
                {productData?.coverage_rate}{" "}
                <span className="-ml-3 text-lg">
                  {productData?.coverage_rate_unite}
                </span>
              </h6>
              {/* <p className="font-semibold text-secondary">
                Two layers individual rate
              </p> */}
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex grow items-center justify-center gap-2 bg-paragraph px-5 py-3.5 font-bold text-secGray">
                <VideoIcon width={24} height={18} className="fill-secGray" />
                {t("watching_video")}
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  {productData?.title} {t("video")}
                </DialogTitle>
              </DialogHeader>
              <div className="">
                <iframe
                  src={productData?.videos[0]?.video_url}
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
              <button className="flex grow items-center justify-center gap-2 bg-paragraph px-5 py-3.5 font-bold text-secGray">
                <CalculatorIcon
                  width={24}
                  height={18}
                  className="fill-secGray"
                />
                {t("quantity_calculation")}
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  {productData?.title}
                </DialogTitle>
                <div className="flex items-center justify-center">
                  <div className="mx-auto flex size-20 items-center justify-center rounded border border-primary text-lg font-semibold text-primary">
                    {productData?.weight} {productData?.unit_of_measure}
                  </div>
                  <Image
                    src={productData?.card_image?.image}
                    alt={productData?.title}
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
                            {t("length")}{" "}
                            <span className="text-red-600">*</span>
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
                            {t("width")} <span className="text-red-600">*</span>
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
                          <FormLabel>{t("unit")}</FormLabel>
                          <FormControl>
                            <Input
                              disabled
                              {...field}
                              value={productData?.coverage_rate_unite}
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
                        {t("submit")}
                      </button>
                      <button
                        type="button"
                        className="rounded bg-primary px-10 py-3 font-medium text-white"
                        onClick={() => form.reset({ length: 0, width: 0 })}
                      >
                        {t("reset")}
                      </button>
                    </div>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="flex grow items-center justify-center gap-2 bg-paragraph px-5 py-3.5 font-bold text-secGray">
                <DownloadIcon width={24} height={18} className="fill-secGray" />
                {t("download_files")}
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[320px] overflow-y-auto sm:max-h-[450px] sm:max-w-[825px] md:max-h-[500px] xl:max-h-[540px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  {productData?.title}
                </DialogTitle>
                <div className="flex items-center justify-center">
                  <Image
                    src={productData?.card_image?.image}
                    alt={productData?.title}
                    width={1024}
                    height={1024}
                    className="mx-auto size-96 object-contain"
                  />
                </div>
              </DialogHeader>
              <div className="">
                <Link
                  target="_blank"
                  href={productData?.pdf[0]?.file_url}
                  className="flex items-center justify-center gap-2 bg-paragraph py-5 font-semibold text-primary"
                >
                  {productData?.pdf[0]?.title}
                  <DownloadIcon
                    width={16}
                    height={18}
                    className="fill-primary"
                  />
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-5">
          <CustomAccordion
            title={t("description")}
            icon={<FaBars size={36} />}
            content={
              <>
                <p className="mb-6 text-lg text-primary">
                  {productData?.description}
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    {/* <h4 className="font-medium">Advantages:</h4> */}
                    <ul className="list-disc space-y-2 pl-5">
                      {productData.description_advantages.map((item: any) => (
                        <li key={item.id}>{item.content}</li>
                      ))}
                    </ul>
                  </div>
                  {productData.desreption_image && (
                    <div className="relative aspect-video">
                      <Image
                        src={productData.desreption_image.image}
                        alt="Product description"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </>
            }
          />
        </div>

        <div className="mt-5">
          <CustomAccordion
            title={t("technical_characteristics")}
            icon={<BiListUl size={36} />}
            content={
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium">
                      {t("technical_characteristics")}:
                    </h4>
                    <ul className="list-disc space-y-2 pl-5">
                      {productData.technical__characteristic.map(
                        (item: any) => (
                          <li key={item.id}>{item.content}</li>
                        ),
                      )}
                    </ul>
                  </div>
                  {productData.technical__characteristic_image && (
                    <div className="relative aspect-video">
                      <Image
                        src={productData.technical__characteristic_image.image}
                        alt="Product description"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </>
            }
          />
        </div>

        <div className="mt-5">
          <CustomAccordion
            title={t("application_places")}
            icon={<BiBuildings size={36} />}
            content={
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {productData.places.map((place: any) => (
                  <div key={place.id} className="space-y-3">
                    <div className="flex items-center gap-3">
                      {place.icon && (
                        <div className="relative h-10 w-10">
                          <Image
                            src={place.icon}
                            alt={place.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <h4 className="font-medium">{place.title}</h4>
                    </div>
                    {place.image && (
                      <div className="relative aspect-video">
                        <Image
                          src={place.image}
                          alt={place.title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            }
          />
        </div>

        <div className="mt-5">
          <CustomAccordion
            title={t("mixing_instructions")}
            icon={<BiRefresh size={36} />}
            content={
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {productData.mixing.map((item: any) => (
                  <div key={item.id} className="flex flex-col gap-2 space-y-3">
                    {item.image && (
                      <div className="relative aspect-square">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="border border-secondary p-2 text-sm text-gray-600">
                      {item.required_quantity}
                    </p>
                  </div>
                ))}
              </div>
            }
          />
        </div>

        <div className="mt-5">
          <CustomAccordion
            title={t("installation_steps")}
            icon={<BiWrench size={36} />}
            content={
              <div className="space-y-6">
                <div className="space-y-8">
                  {productData.installtion
                    .sort((a: any, b: any) => a.install_step - b.install_step)
                    .map((step: any) => (
                      <div
                        key={step.id}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                      >
                        <div>
                          <h4 className="font-medium">
                            {t("step")} {step.install_step}: {step.title}
                          </h4>
                          <p className="mt-2 text-gray-600">
                            {step.descreption}
                          </p>
                        </div>
                        {step.image && (
                          <div className="relative aspect-video">
                            <Image
                              src={step.image}
                              alt={`Step ${step.install_step}`}
                              fill
                              className="rounded-lg object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                </div>

                {productData.install_notes.length > 0 && (
                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h4 className="mb-2 font-medium">
                      {t("important_notes")}:
                    </h4>
                    <ul className="list-disc space-y-2 pl-5">
                      {productData.install_notes.map((note: any) => (
                        <li key={note.id}>{note.content}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            }
          />
        </div>

        <div className="mt-5">
          <CustomAccordion
            title={t("related")}
            icon={<BiCategory size={36} />}
            content={
              <>
                <p className="text-2xl text-[#1EBAE5]">{t("related")}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {related?.map((item: any) => (
                    <ProductCard item={item} key={item?.id} />
                  ))}
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};
