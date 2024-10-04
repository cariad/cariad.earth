import { ReactElement } from "react";
import { Flex, Link, Separator } from "@radix-ui/themes";

interface LinkItem {
  text: string;
  url: string;
}

interface Props {
  icon: ReactElement;
  links: LinkItem[];
}

function Links({ icon, links }: Props) {
  const elements: ReactElement[] = [];

  for (let i = 0; i < links.length; i++) {
    const link: LinkItem = links[i];

    if (i > 0)
      elements.push(
        <Separator
          key={link.url + "separator"}
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

    elements.push(
      <Link href={link.url} key={link.url} rel="me" weight="medium">
        {link.text}
      </Link>
    );
  }

  return (
    <nav>
      <Flex
        align={{
          initial: "start",
          sm: "center",
        }}
        direction={{
          initial: "column",
          sm: "row",
        }}
        gap="3"
        wrap="wrap"
      >
        {icon}
        {elements}
      </Flex>
    </nav>
  );
}

export default Links;
