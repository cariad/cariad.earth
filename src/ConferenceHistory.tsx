import PrismExeter from "./conferences/PrismExeter";
import SectionHeading from "./SectionHeading";
import { Flex } from "@radix-ui/themes";

function ConferenceHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading id="conferences">Conferences</SectionHeading>
      <PrismExeter />
    </Flex>
  );
}

export default ConferenceHistory;
