import { Heading } from "@radix-ui/themes";

interface Props {
  children: string;
}

function PageTitle({ children }: Props) {
  return (
    <Heading
      // Font size (9 is largest): https://www.radix-ui.com/themes/docs/components/heading
      size={{
        initial: "8",
        sm: "9",
      }}
    >
      {children}
    </Heading>
  );
}

export default PageTitle;
