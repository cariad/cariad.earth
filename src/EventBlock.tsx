import { ReactNode } from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

interface Props {
  badge?: ReactNode;
  children: ReactNode;
  heading?: string;
  introduction?: boolean;
}

function EventBlock({ badge, children, heading, introduction }: Props) {
  return (
    <Box
      mt="6"
      pt={introduction ? "1" : undefined}
      pb={introduction ? "1" : undefined}
      pl={introduction ? "4" : undefined}
      pr={introduction ? "4" : undefined}
      style={{
        boxShadow: introduction ? "var(--shadow-4)" : undefined,
        borderRadius: introduction ? "var(--radius-4)" : undefined,
      }}
    >
      {heading || badge ? (
        <Heading as="h4" size="3">
          {heading} {badge}
        </Heading>
      ) : null}

      <Text as="div" mb="3" size={introduction ? "2" : undefined}>
        {children}
      </Text>
    </Box>
  );
}

export default EventBlock;
