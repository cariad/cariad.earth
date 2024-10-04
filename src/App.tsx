import ConferenceHistory from "./ConferenceHistory";
import Cv from "./Cv";
import EducationHistory from "./EducationHistory";
import EmploymentHistory from "./EmploymentHistory";
import Introduction from "./Introduction";
import Links from "./Links";
import OpenSourceHistory from "./OpenSourceHistory";
import PageTitle from "./PageTitle";
import SocialLinks from "./SocialLinks";
import { useEffect } from "react";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
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
        <SocialLinks />
        <Cv />
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
            {
              text: "Conferences",
              url: "#conferences",
            },
          ]}
        />

        <EmploymentHistory />
        <EducationHistory />
        <OpenSourceHistory />
        <ConferenceHistory />
      </Flex>
    </Container>
  );
}

export default App;
