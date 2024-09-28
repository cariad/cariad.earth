import { Box, Flex, Heading, Text } from "@radix-ui/themes";

interface Props {
  id: string;
  date: string;
  location?: string;
  name: string;
  position: string;
}

function EventHeader({ date, id, location, name, position }: Props) {
  return (
    <>
      <a id={id} />
      <Heading as="h3">{name}</Heading>

      <Flex justify="between">
        <Box>
          <Text color="gray">{position}</Text>
          {location ? (
            <>
              <br />{" "}
              <Text color="gray" size="2">
                {location}
              </Text>
            </>
          ) : null}
        </Box>
        <Text color="gray">{date}</Text>
      </Flex>
    </>
  );
}

export default EventHeader;
