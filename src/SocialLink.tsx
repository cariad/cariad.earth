import { ReactNode } from "react";
import { Flex, Link } from "@radix-ui/themes";

interface Props {
  icon: ReactNode;
  name: string;
  url: string;
}

function SocialLink({ icon, name, url }: Props) {
  return (
    <Flex align="center" gap="1">
      {icon}
      <Link href={url} weight="medium">
        {name}
      </Link>
    </Flex>
  );
}

export default SocialLink;
