import EventHeader from "../EventHeader";
import ExternalLink from "../ExternalLink";
import { Box } from "@radix-ui/themes";

function IbmAiSpecialisation() {
  return (
    <Box mt="6">
      <EventHeader
        date="2024"
        location={
          <ExternalLink
            text="Verify on coursera.org"
            url="https://www.coursera.org/account/accomplishments/specialization/certificate/5KIVIZMH3B4K"
          />
        }
        name="IBM AI Developer Professional Certificate"
        position="IBM"
      />
      <p>
        During this certification taught by members of the IBM Skills Network
        Team, I:
      </p>

      <ul>
        <li>Explored Hugging Face and a range of models.</li>
        <li>Gained experience using Python for data science.</li>
        <li>
          Developed conversational and generative AI APIs with Python and Flask.
        </li>
        <li>
          Developed scripts that interact with OpenAI and IBM Watson APIs.
        </li>
      </ul>
    </Box>
  );
}

export default IbmAiSpecialisation;
