import { SectionSelector } from "../enums";

export const scrollTo = (
  selector: SectionSelector,
  yOffset: number = 0
): void => {
  const element = document.querySelector(selector);

  if (element) {
    const bodyReact = document.body.getBoundingClientRect();
    const elementReact = element.getBoundingClientRect();

    const offset = elementReact.top - bodyReact.top + yOffset;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};
