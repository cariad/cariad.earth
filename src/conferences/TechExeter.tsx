import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import { Box, Link } from "@radix-ui/themes";

function TechExeter() {
  return (
    <Box mt="6">
      <EventHeader
        date="2019"
        name="TechExeter Conference"
        position="Exeter, UK"
      />
      <EventBlock introduction={true}>
        <p>
          <Link href="https://techexeter.uk">TechExeter</Link> is a community
          group for technologists in and around Exeter, UK. Sadly, TechExeter
          hosts members who promote violence against trans people, and so must
          not be considered a safe space for queer folks.
        </p>
      </EventBlock>

      <EventBlock>
        <p>
          I hosted a talk during the TechExeter Conference 2019 about managing
          KMS customer keys in Amazon Web Services, some best practices for
          their IAM policies, and how to use those keys with Secrets Manager to
          manage credentials for RDS databases.
        </p>
      </EventBlock>
    </Box>
  );
}

export default TechExeter;
