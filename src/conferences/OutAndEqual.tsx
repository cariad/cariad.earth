import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import { Box, Link } from "@radix-ui/themes";

function OutAndEqual() {
  return (
    <Box mt="6">
      <EventHeader
        date="2012"
        name="Out & Equal Workplace Summit"
        position="Baltimore, Maryland"
      />
      <EventBlock introduction={true}>
        <p>
          <Link href="https://outandequal.org">Out & Equal</Link> is a
          non-profit organisation working exclusively on LGBTQ+ workplace
          equity, inclusion and belonging.
        </p>
      </EventBlock>

      <EventBlock>
        <p>
          I was one of the UK leads of Thomson Reuters' global "Pride at Work"
          LGBTQ+ network, and I was invited to join our global leadership at the
          Out & Equal Workplace Summit in Baltimore to share my part of that
          story.
        </p>
      </EventBlock>
    </Box>
  );
}

export default OutAndEqual;
