import BscHonoursComputerScience from "./educations/BscHonoursComputerScience";
import IbmAiDeveloperProfessionalCertificate from "./educations/IbmAiDeveloperProfessionalCertificate";
import IbmFullStackDeveloperProfessionalCertificate from "./educations/IbmFullStackDeveloperProfessionalCertificate";
import Lfs250KubernetesAndCloudNativeEssentials from "./educations/Lfs250KubernetesAndCloudNativeEssentials";
import MetaFrontendDeveloperProfessionalCertificate from "./educations/MetaFrontendDeveloperProfessionalCertificate";
import SectionHeading from "./SectionHeading";
import UniversityAtBuffaloBlockchainSpecialisation from "./educations/UniversityAtBuffaloBlockchainSpecialisation";
import { Flex } from "@radix-ui/themes";

function EducationHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="education">Education</SectionHeading>
      <UniversityAtBuffaloBlockchainSpecialisation />
      <Lfs250KubernetesAndCloudNativeEssentials />
      <IbmFullStackDeveloperProfessionalCertificate />
      <IbmAiDeveloperProfessionalCertificate />
      <MetaFrontendDeveloperProfessionalCertificate />
      <BscHonoursComputerScience />
    </Flex>
  );
}

export default EducationHistory;
