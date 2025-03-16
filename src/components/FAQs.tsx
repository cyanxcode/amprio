import { faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface Props {
  number: number;
}

export default function FAQs({ number }: Props) {
  return (
    <>
      <div className="mt-10 flex w-full flex-col items-center" id="FAQs">
        <h2 className="w-full text-center text-3xl md:text-6xl font-italiana mb-5 text-[#023235]">
          FAQs
        </h2>
        <div className=" w-[80vw] lg:w-[40vw]">
          {faqs.slice(0, number).map((x) => (
            <Accordion type="single" key={x.Question} collapsible>
              <AccordionItem value={x.Question}>
                <AccordionTrigger>Q. {x.Question}</AccordionTrigger>
                <AccordionContent>{x.Answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
