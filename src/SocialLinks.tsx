import { Flex } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import SocialLink from "./SocialLink";

function SocialLinks() {
  return (
    <Flex gap="4">
      <SocialLink
        icon={<LinkedInLogoIcon />}
        name="linkedin.com/in/cariad"
        url="https://www.linkedin.com/in/cariad"
      />

      <SocialLink
        icon={<GitHubLogoIcon />}
        name="github.com/cariad"
        url="https://github.com/cariad"
      />
    </Flex>
  );
}

export default SocialLinks;
