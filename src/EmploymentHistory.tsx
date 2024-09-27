import Freyda from "./employments/Freyda";
import { Heading, Section } from "@radix-ui/themes";

function EmploymentHistory() {
  return (
    <Section size="1">
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
    </Section>
  );
}

export default EmploymentHistory;
