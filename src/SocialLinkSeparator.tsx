import { Separator } from "@radix-ui/themes";

function SocialLinkSeparator() {
  return (
    <Separator
      orientation={{
        initial: "horizontal",
        sm: "vertical",
      }}
      size={{
        initial: "3",
        sm: "1",
      }}
    />
  );
}

export default SocialLinkSeparator;
