import EventHeader from "../EventHeader";
import ExternalLink from "../ExternalLink";
import { Box } from "@radix-ui/themes";

function UniversityAtBuffaloBlockchainSpecialisation() {
  return (
    <Box mt="6">
      <EventHeader
        date="2024"
        location={
          <ExternalLink
            text="Verify on coursera.org"
            url="https://coursera.org/verify/specialization/5WE09CYQHMAI"
          />
        }
        name="Blockchain Specialisation"
        position="University at Buffalo"
      />
      <ul>
        <li>Learned about Blockchain, including Bitcoin and Ethereum.</li>
        <li>Coded, deployed and executed Solidity Smart Contracts.</li>
        <li>Built a decentralised voting application.</li>
      </ul>
    </Box>
  );
}

export default UniversityAtBuffaloBlockchainSpecialisation;
