import IbmAiSpecialisation from "./educations/IbmAiSpecialisation";
import SectionHeading from "./SectionHeading";
import { Flex } from "@radix-ui/themes";

function EducationHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="education">Education</SectionHeading>
      <IbmAiSpecialisation />
    </Flex>
  );
}

export default EducationHistory;
