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
  return (
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

      {links.map((value: LinkItem, index: number) => {
        return (
          <>
            {index > 0 ? (
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
            ) : null}

            <Link href={value.url} weight="medium">
              {value.text}
            </Link>
          </>
        );
      })}
    </Flex>
  );
}

export default Links;
