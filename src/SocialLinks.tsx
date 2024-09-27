import SocialLink from "./SocialLink";
import SocialLinkSeparator from "./SocialLinkSeparator";
import { Flex } from "@radix-ui/themes";

function SocialLinks() {
  return (
    <Flex
      align="center"
      direction={{
        initial: "column",
        sm: "row",
      }}
      gap={{
        initial: "3",
        sm: "4",
      }}
    >
      <SocialLink url="https://github.com/cariad" name="github.com/cariad" />
      <SocialLinkSeparator />

      <SocialLink
        url="https://www.linkedin.com/in/cariad"
        name="linkedin.com/in/cariad"
      />

      <SocialLinkSeparator />

      <SocialLink url="mailto:cariad@cariad.earth" name="cariad@cariad.earth" />
    </Flex>
  );
}

export default SocialLinks;
