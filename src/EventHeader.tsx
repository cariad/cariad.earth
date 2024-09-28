import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { ReactElement } from "react";

interface Props {
  date: string;
  id?: string;
  location?: ReactElement | string;
  name: string;
  position: ReactElement | string;
}

function EventHeader({ date, id, location, name, position }: Props) {
  return (
    <>
      {id ? <a id={id} /> : null}
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
