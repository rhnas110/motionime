import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionTrigger,
} from "../../../Elements/Accordion";

import { otherFAQ } from "../../../../data";

export const TabOther = () => {
  return (
    <>
      <Accordion.Root type="single" collapsible>
        {otherFAQ?.map((item, index) => {
          return (
            <Accordion.Item className="p-2" value={index + 1} key={index}>
              <AccordionTrigger>{item?.question}</AccordionTrigger>
              <AccordionContent>{item?.answer}</AccordionContent>
              <hr className="my-4 border rounded" />
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </>
  );
};
