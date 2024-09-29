import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import { Box, Link } from "@radix-ui/themes";

function PrismExeter() {
  return (
    <Box mt="6">
      <EventHeader date="July 2020" name="PRISM Exeter" position="Online" />

      <EventBlock introduction={true}>
        <p>
          <Link href="https://prismexeter.com">PRISM Exeter</Link> is a network
          for LGBTQ+ professionals and students working and studying in STEMM in
          and around Exeter, UK.
        </p>
      </EventBlock>

      <EventBlock>
        <p>
          I was invited to pitch, and then host, a talk about Internet security
          for LGBTQ+ journalists and communities on untrustworthy ISPs or unsafe
          regions.
        </p>
        <p>
          It was a genuine privilege to talk about how encryption works, and how
          Tor's onion routing can help to protect identities.
        </p>
      </EventBlock>
    </Box>
  );
}

export default PrismExeter;
