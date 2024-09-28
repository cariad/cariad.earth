import IbmAiDeveloperProfessionalCertificate from "./educations/IbmAiDeveloperProfessionalCertificate";
import MetaFrontendDeveloperProfessionalCertificate from "./educations/MetaFrontendDeveloperProfessionalCertificate";
import SectionHeading from "./SectionHeading";
import { Flex } from "@radix-ui/themes";

function EducationHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="education">Education</SectionHeading>
      <IbmAiDeveloperProfessionalCertificate />
      <MetaFrontendDeveloperProfessionalCertificate />
    </Flex>
  );
}

export default EducationHistory;
