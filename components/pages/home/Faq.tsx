import { PageHeader } from "@/components/global/PageHeader";
import { SectionWrapper } from "@/components/global/SectionWrapper";
import { QuestionMark } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
type Props = { data: any };

export const Faq = ({ data }: Props) => {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionWrapper>
        <PageHeader title="Frequently asked questions" />
        <Accordion type="single" collapsible className="py-10">
          {data?.map((item: any) => (
            <AccordionItem
              className="border-b-0"
              value={`item-${item?.id}`}
              key={item?.id}
            >
              <AccordionTrigger className="text-secGray">
                <div className="flex gap-1">
                  <QuestionMark className="size-6 stroke-secGray" />
                  {item?.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-svg">
                {item?.awnser}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* <Link
          href="/faq"
          className="flex items-center justify-center gap-1 text-xl font-semibold text-primary"
        >
          <span>View More</span>
          <ChevronDown className="mt-1" />
        </Link> */}
      </SectionWrapper>
    </div>
  );
};
