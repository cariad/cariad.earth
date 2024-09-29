import AwsUserGroups from "./conferences/AwsUserGroups";
import PrismExeter from "./conferences/PrismExeter";
import SectionHeading from "./SectionHeading";
import TechExeter from "./conferences/TechExeter";
import { Flex } from "@radix-ui/themes";

function ConferenceHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="conferences">Conferences</SectionHeading>
      <PrismExeter />
      <TechExeter />
      <AwsUserGroups />
    </Flex>
  );
}

export default ConferenceHistory;
