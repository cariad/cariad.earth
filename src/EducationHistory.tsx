import BscHonoursComputerScience from "./educations/BscHonoursComputerScience";
import IbmAiDeveloperProfessionalCertificate from "./educations/IbmAiDeveloperProfessionalCertificate";
import IbmFullStackDeveloperProfessionalCertificate from "./educations/IbmFullStackDeveloperProfessionalCertificate";
import MetaFrontendDeveloperProfessionalCertificate from "./educations/MetaFrontendDeveloperProfessionalCertificate";
import SectionHeading from "./SectionHeading";
import { Flex } from "@radix-ui/themes";

function EducationHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="education">Education</SectionHeading>
      <IbmFullStackDeveloperProfessionalCertificate />
      <IbmAiDeveloperProfessionalCertificate />
      <MetaFrontendDeveloperProfessionalCertificate />
      <BscHonoursComputerScience />
    </Flex>
  );
}

export default EducationHistory;
