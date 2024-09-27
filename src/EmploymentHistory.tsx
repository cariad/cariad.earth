import Freyda from "./employments/Freyda";
import { Flex, Heading } from "@radix-ui/themes";

function EmploymentHistory() {
  return (
    <Flex direction="column" gap="6">
      <Heading
        as="h2"
        size={{
          initial: "7",
          sm: "8",
        }}
      >
        Employment
      </Heading>
      <Freyda />
    </Flex>
  );
}

export default EmploymentHistory;
