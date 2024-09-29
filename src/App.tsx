import EducationHistory from "./EducationHistory";
import EmploymentHistory from "./EmploymentHistory";
import Introduction from "./Introduction";
import Links from "./Links";
import OpenSourceHistory from "./OpenSourceHistory";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { DoubleArrowDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { Container, Flex } from "@radix-ui/themes";

const STORAGE_KEY_SCROLL: string = "scrollPosition";

function App() {
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem(STORAGE_KEY_SCROLL);

    if (scrollPosition)
      window.scrollTo({
        behavior: "instant",
        top: parseInt(scrollPosition),
      });

    const saveScrollPosition = () =>
      sessionStorage.setItem(STORAGE_KEY_SCROLL, window.scrollY.toString());

    window.addEventListener("scroll", saveScrollPosition);

    return () => {
      saveScrollPosition();
      window.removeEventListener("scroll", saveScrollPosition);
    };
  });

  return (
    <Container
      mb="9"
      ml="3"
      mr="3"
      mt="9"
      size={{
        initial: "1",
        sm: "2",
      }}
    >
      <Flex direction="column" gap="9">
        <PageTitle />

        <Links
          icon={<ExternalLinkIcon />}
          links={[
            {
              text: "github.com/cariad",
              url: "https://github.com/cariad",
            },
            {
              text: "linkedin.com/in/cariad",
              url: "https://www.linkedin.com/in/cariad",
            },
            {
              text: "cariad@cariad.earth",
              url: "mailto:cariad@cariad.earth",
            },
          ]}
        />

        <Introduction />

        <Links
          icon={<DoubleArrowDownIcon />}
          links={[
            {
              text: "Employment",
              url: "#employment",
            },
            {
              text: "Education",
              url: "#education",
            },
            {
              text: "Open Source",
              url: "#open-source",
            },
          ]}
        />

        <EmploymentHistory />
        <EducationHistory />
        <OpenSourceHistory />
      </Flex>
    </Container>
  );
}

export default App;
