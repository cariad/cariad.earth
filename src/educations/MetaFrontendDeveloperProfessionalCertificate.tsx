import EventHeader from "../EventHeader";
import ExternalLink from "../ExternalLink";
import { Box } from "@radix-ui/themes";

function MetaFrontendDeveloperProfessionalCertificate() {
  return (
    <Box mt="6">
      <EventHeader
        date="2024"
        location={
          <ExternalLink
            text="Verify on coursera.org"
            url="https://coursera.org/verify/professional-cert/3T6L6ZTNJJCK"
          />
        }
        name="Meta Frontend Developer Professional Certificate"
        position="Meta"
      />
      <ul>
        <li>
          Reinforced my experience with HTML, CSS, JavaScript and Node.js.
        </li>
        <li>Developed interactive web applications with React.js.</li>
        <li>Wrote unit tests for React.js components with Jest.</li>
        <li>Learned the principles of UX / UI design.</li>
        <li>
          Gained experience with Figma, and used it to build persona sheets,
          user journeys, wireframes and interactive prototypes.
        </li>
      </ul>
    </Box>
  );
}

export default MetaFrontendDeveloperProfessionalCertificate;
