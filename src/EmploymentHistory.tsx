import EmploymentLink from "./EmploymentLink";
import Freyda from "./employments/Freyda";
import NhsDigital from "./employments/NhsDigital";
import SectionHeading from "./SectionHeading";
import ThomsonReuters from "./employments/ThomsonReuters";
import { Flex } from "@radix-ui/themes";

function EmploymentHistory() {
  return (
    <Flex direction="column" gap="4">
      <SectionHeading>Employment</SectionHeading>

      <Flex
        direction={{
          initial: "column",
          sm: "row",
        }}
        gap="4"
      >
        <EmploymentLink id="freyda" name="Freyda" date="2020 - 2024" />
        <EmploymentLink id="nhs-digital" name="NHS Digital" date="2020" />

        <EmploymentLink
          date="2005 - 2019"
          id="thomson-reuters"
          name="Thomson Reuters"
        />
      </Flex>

      <Freyda />
      <NhsDigital />
      <ThomsonReuters />
    </Flex>
  );
}

export default EmploymentHistory;
