import Links from "./Links";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

function SocialLinks() {
  return (
    <Links
      icon={<ExternalLinkIcon />}
      links={[
        {
          text: "GitHub",
          url: "https://github.com/cariad",
        },
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/cariad",
        },
        {
          text: "queer.garden/@cariad",
          url: "https://queer.garden/@cariad",
        },
        {
          text: "cariad@cariad.earth",
          url: "mailto:cariad@cariad.earth",
        },
      ]}
    />
  );
}

export default SocialLinks;
