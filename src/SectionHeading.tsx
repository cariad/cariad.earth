import { Heading } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}

function SectionHeading({ children, id }: Props) {
  return (
    <>
      <a id={id} />
      <Heading
        as="h2"
        size={{
          initial: "7",
          sm: "8",
        }}
      >
        {children}
      </Heading>
    </>
  );
}

export default SectionHeading;
