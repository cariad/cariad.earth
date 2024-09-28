import EmploymentLink from "./EmploymentLink";
import Freyda from "./employments/Freyda";
import NhsDigital from "./employments/NhsDigital";
import { Flex, Heading } from "@radix-ui/themes";

function EmploymentHistory() {
  return (
    <Flex direction="column" gap="4">
      <Heading
        as="h2"
        size={{
          initial: "7",
          sm: "8",
        }}
      >
        Employment
      </Heading>

      <Flex gap="6">
        <EmploymentLink id="freyda" name="Freyda" date="2020 - 2024" />
        <EmploymentLink id="nhs-digital" name="NHS Digital" date="2020" />
      </Flex>

      <Freyda />
      <NhsDigital />
    </Flex>
  );
}

export default EmploymentHistory;
