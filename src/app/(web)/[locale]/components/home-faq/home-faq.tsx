"use client";

import { useTranslations } from "next-intl";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { SectionTitle } from "../section-title";
import { SectionContainer } from "../section-container";

export const HomeFAQ = () => {
  const t = useTranslations("home.faq");
  const tQuestions = useTranslations("home.faq.questions");

  const faqList = [
    { title: tQuestions("01.question"), content: tQuestions("01.answer"), startContent: "🕒" },
    { title: tQuestions("02.question"), content: tQuestions("02.answer"), startContent: "🤔" },
    { title: tQuestions("03.question"), content: tQuestions("03.answer"), startContent: "⏳" },
    { title: tQuestions("04.question"), content: tQuestions("04.answer"), startContent: "✂️" },
    { title: tQuestions("05.question"), content: tQuestions("05.answer"), startContent: "👶" },
    { title: tQuestions("06.question"), content: tQuestions("06.answer"), startContent: "🎁" },
    { title: tQuestions("07.question"), content: tQuestions("07.answer"), startContent: "💳" },
  ];

  return (
    <SectionContainer id="faq" isBlackBg>
      <div className="flex flex-col gap-4 lg:gap-6 dark">
        <SectionTitle title={t("title")}></SectionTitle>

        <Accordion variant="splitted" defaultExpandedKeys={['0']}>
          {faqList.map((faq, i) => (
            <AccordionItem
              key={i}
              aria-label={faq.title}
              startContent={faq.startContent}
              title={<h3 className="text-xl font-semibold">{faq.title}</h3>}
            >
              <p dangerouslySetInnerHTML={{ __html: faq.content }}></p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
};
