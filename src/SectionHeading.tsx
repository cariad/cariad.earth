import { Heading } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SectionHeading({ children }: Props) {
  return (
    <Heading
      as="h2"
      size={{
        initial: "7",
        sm: "8",
      }}
    >
      {children}
    </Heading>
  );
}

export default SectionHeading;
