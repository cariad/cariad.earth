import EventHeader from "../EventHeader";
import ExternalLink from "../ExternalLink";
import { Box } from "@radix-ui/themes";

function IbmFullStackDeveloperProfessionalCertificate() {
  return (
    <Box mt="6">
      <EventHeader
        date="2024"
        location={
          <ExternalLink
            text="Verify on coursera.org"
            url="https://coursera.org/verify/professional-cert/9PI2RPOUMSOY"
          />
        }
        name="IBM Full Stack Developer Professional Certificate"
        position="IBM"
      />
      <p>
        During this certification taught by members of the IBM Skills Network
        Team, I:
      </p>
      <ul>
        <li>
          Reinforced my experience with Django, Node.js, Express.js and
          React.js.
        </li>
        <li>
          Gained experience with Kubernetes and deployed containerised
          microservices to IBM Cloud.
        </li>
      </ul>
    </Box>
  );
}

export default IbmFullStackDeveloperProfessionalCertificate;
