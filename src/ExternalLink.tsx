import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Flex, Link } from "@radix-ui/themes";

interface Props {
  text: string;
  url: string;
}

function ExternalLink({ text, url }: Props) {
  return (
    <Link href={url} color="blue">
      <Flex align="center" gap="1">
        {text} <ExternalLinkIcon />
      </Flex>
    </Link>
  );
}

export default ExternalLink;
