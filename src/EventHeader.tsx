import { Flex, Heading, Text } from "@radix-ui/themes";

interface Props {
  date: string;
  name: string;
  position: string;
}

function EventHeader({ date, name, position }: Props) {
  return (
    <>
      <Heading as="h3">{name}</Heading>

      <Flex justify="between">
        <Text color="gray">{position}</Text>
        <Text color="gray">{date}</Text>
      </Flex>
    </>
  );
}

export default EventHeader;
