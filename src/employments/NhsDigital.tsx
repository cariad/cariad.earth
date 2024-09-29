import BackToEmploymentHistory from "../BackToEmploymentHistory";
import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import FullStackBadge from "../badges/FullStackBadge";
import { Box, Link } from "@radix-ui/themes";

function NhsDigital() {
  return (
    <Box mt="9">
      <EventHeader
        date="February - March 2020"
        id="nhs-digital"
        location="Exeter"
        name="NHS Digital"
        position="Contract Software Engineer"
      />
      <EventBlock introduction={true}>
        <p>
          <Link href="https://digital.nhs.uk">NHS Digital</Link> designs,
          develops and operates national IT and data services that support
          clinicians at work, helps patients get the best care, and uses data to
          improve treatment.
        </p>
      </EventBlock>

      <EventBlock
        badge={<FullStackBadge />}
        heading="C# / .NET Core development"
      >
        <p>
          I joined NHS Digital for a 6-week contract to migrate a life-critical
          SOAP service from C# .NET Framework to the latest .NET Core release.
        </p>

        <p>
          My key responsibilities were accuracy and reliability, since
          clinicians use the service 24/7/365 to identify patients who need
          life-saving care. To achieve this high quality, I took personal
          responsibility for identifying edge-cases and adding unit tests for
          them during the migration. I also added the service's first
          integration tests using Postman to add as much confidence as possible.
        </p>

        <p>
          An additional complexity was the arrival of the COVID-19 crisis, which
          added unexpected demands to the wider NHS Digital organisation. The
          final few weeks of the migration demanded incredible focus and ability
          to work independently while personnel and responsibilities were
          shuffled around, and I remain incredibly proud of what I achieved.
        </p>

        <p>
          My approach to testing and delivery was highlighted and celebrated
          during a leadership call, and I completed the migration on-time.
        </p>
      </EventBlock>
      <BackToEmploymentHistory />
    </Box>
  );
}

export default NhsDigital;
