import EventHeader from "../EventHeader";
import ExternalLink from "../ExternalLink";
import { Box } from "@radix-ui/themes";

function IbmAiDeveloperProfessionalCertificate() {
  return (
    <Box mt="6">
      <EventHeader
        date="2024"
        location={
          <ExternalLink
            text="Verify on coursera.org"
            url="https://coursera.org/verify/professional-cert/5KIVIZMH3B4K"
          />
        }
        name="IBM AI Developer Professional Certificate"
        position="IBM"
      />
      <ul>
        <li>Explored Hugging Face and a range of models.</li>
        <li>Gained experience using Pandas and NumPy for data science.</li>
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

export default IbmAiDeveloperProfessionalCertificate;
