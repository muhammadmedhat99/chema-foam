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
import Link from "next/link";
type Props = {};

export const Faq = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionWrapper>
        <PageHeader title="Frequently asked questions" />
        <Accordion type="single" collapsible className="py-10">
          <AccordionItem className="border-b-0" value="item-1">
            <AccordionTrigger className="text-[#5a5a5a]">
              <div className="flex gap-1">
                <QuestionMark className="size-6 stroke-[#5a5a5a]" />
                Where can i access my projects?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-svg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda omnis non facere quis laborum voluptate, commodi,
              excepturi vero quidem, totam labore veniam! Facere beatae rerum
              possimus ipsa voluptates reiciendis commodi hic, laboriosam quia
              eaque ducimus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-2">
            <AccordionTrigger className="text-[#5a5a5a]">
              <div className="flex gap-1">
                <QuestionMark className="size-6 stroke-[#5a5a5a]" />
                Where can i access my projects?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-svg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda omnis non facere quis laborum voluptate, commodi,
              excepturi vero quidem, totam labore veniam! Facere beatae rerum
              possimus ipsa voluptates reiciendis commodi hic, laboriosam quia
              eaque ducimus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-3">
            <AccordionTrigger className="text-[#5a5a5a]">
              <div className="flex gap-1">
                <QuestionMark className="size-6 stroke-[#5a5a5a]" />
                Where can i access my projects?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-svg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda omnis non facere quis laborum voluptate, commodi,
              excepturi vero quidem, totam labore veniam! Facere beatae rerum
              possimus ipsa voluptates reiciendis commodi hic, laboriosam quia
              eaque ducimus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-4">
            <AccordionTrigger className="text-[#5a5a5a]">
              <div className="flex gap-1">
                <QuestionMark className="size-6 stroke-[#5a5a5a]" />
                Where can i access my projects?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-svg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda omnis non facere quis laborum voluptate, commodi,
              excepturi vero quidem, totam labore veniam! Facere beatae rerum
              possimus ipsa voluptates reiciendis commodi hic, laboriosam quia
              eaque ducimus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          href="/faq"
          className="flex items-center justify-center gap-1 text-xl font-semibold text-primary"
        >
          <span>View More</span>
          <ChevronDown className="mt-1" />
        </Link>
      </SectionWrapper>
    </div>
  );
};
