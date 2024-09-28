import { Box, Card, Link, Text } from "@radix-ui/themes";

interface Props {
  date: string;
  id: string;
  name: string;
}

function EmploymentLink({ date, id, name }: Props) {
  return (
    <Box width="140px">
      <Link href={"#" + id}>
        <Card>
          <Text as="div" size="2" weight="bold">
            {name}
          </Text>
          <Text as="div" size="2" color="gray">
            {date}
          </Text>
        </Card>
      </Link>
    </Box>
  );
}

export default EmploymentLink;
