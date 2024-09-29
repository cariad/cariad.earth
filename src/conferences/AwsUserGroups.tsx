import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import { Box, Link } from "@radix-ui/themes";

function AwsUserGroups() {
  return (
    <Box mt="6">
      <EventHeader
        date="2016-19"
        name="AWS User Groups"
        position="London Docklands • Nottingham"
      />
      <EventBlock introduction={true}>
        <p>
          <Link href="https://aws.amazon.com/developer/community/usergroups/">
            AWS User Groups
          </Link>{" "}
          are peer-to-peer communities that meet to share ideas, answer
          questions, and learn about new services and best practices.
        </p>
      </EventBlock>

      <EventBlock>
        <p>
          I was invited by colleagues at Thomson Reuters across the UK to talk
          at their local AWS User Groups about the challenges and our strategies
          for migrating our SaaS platform from on-premises hardware into Amazon
          Web Services.
        </p>
      </EventBlock>
    </Box>
  );
}

export default AwsUserGroups;
