import { Link } from "@radix-ui/themes";

interface Props {
  name: string;
  url: string;
}

function SocialLink({ name, url }: Props) {
  return <Link href={url}>{name}</Link>;
}

export default SocialLink;
