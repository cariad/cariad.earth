import EventHeader from "../EventHeader";
import ExternalLink from "../ExternalLink";
import { Box } from "@radix-ui/themes";

function Lfs250KubernetesAndCloudNativeEssentials() {
  return (
    <Box mt="6">
      <EventHeader
        date="2024"
        location={
          <ExternalLink
            text="Verify on credly.com"
            url="https://www.credly.com/badges/9db9665c-6351-4ebe-ae9e-ab4ac828a737/public_url"
          />
        }
        name="LFS250: Kubernetes and Cloud Native Essentials"
        position="The Linux Foundation"
      />
      <ul>
        <li>Learned about Kubernetes architecture.</li>
        <li>Learned about cloud-native observability.</li>
        <li>Built and deployed containerised applications.</li>
      </ul>
    </Box>
  );
}

export default Lfs250KubernetesAndCloudNativeEssentials;
