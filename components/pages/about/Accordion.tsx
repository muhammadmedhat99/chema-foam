import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "lucide-react";

type CustomAccordionProps = {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  content?: React.ReactNode;
};
export function CustomAccordion({
  title,
  icon,
  content,
}: CustomAccordionProps) {
  return (
    <div className="mx-auto max-w-7xl px-2">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="mb-4 border-b-0">
          <AccordionTrigger className="bg-[#5A5A5A1A] px-1 py-4 text-primary lg:px-12">
            <div className="flex items-center gap-4">
              {icon}
              <span className="text-xl">{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-2 py-6 lg:px-14">
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
