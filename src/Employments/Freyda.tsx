import DevOpsBadge from "../badges/DevOpsBadge";
import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import FullStackBadge from "../badges/FullStackBadge";
import { Link, Section } from "@radix-ui/themes";

function Freyda() {
  return (
    <Section>
      <EventHeader
        date="2020 - 2024"
        name="Freyda"
        position="Contract DevOps Engineer"
      />

      <EventBlock introduction={true}>
        <p>
          <Link href="https://freyda.io">Freyda</Link> is a{" "}
          <Link href="https://freyda.io/freyda-receives-backing-from-google/">
            Google-backed
          </Link>{" "}
          FinTech startup building machine learning and artificial intelligence
          pipelines to provide insight into unstructured financial data. The
          platform is a B2B SaaS solution deployed to Amazon Web Services.
        </p>
      </EventBlock>

      <EventBlock badge={<DevOpsBadge />} heading="CI/CD">
        <p>
          My key responsibility during Freyda's start-up was to deploy the
          company's first CI/CD pipelines.
        </p>

        <p>
          I used HashiCorp Packer to build a custom AMI containing Python, AI
          development tools and supporting Bash scripts, then deployed an EC2
          Auto-Scaling Group of GitLab CI runners.
        </p>

        <p>
          This enabled the startup development team to deploy their initial
          services within a matter of weeks.
        </p>
      </EventBlock>

      <EventBlock badge={<DevOpsBadge />} heading="Architecture">
        <p>
          I worked directly with the CTO to plan and deploy the platform's
          architecture in AWS. I designed and developed infrastructure-as-code
          with CloudFormation, Python and Bash for the entire set of
          infrastructure, from VPCs up to CloudFront Distributions.
        </p>

        <p>
          I was continuously responsible for keeping architecture diagrams
          up-to-date and introducing new hires to our patterns, which helped
          developers to contribute with confidence as early as possible.
        </p>
      </EventBlock>

      <EventBlock badge={<DevOpsBadge />} heading="Security">
        <p>
          I have a passion for platform security, which led to me being trusted
          to work with third-party security auditors and penetration-testers. I
          took responsibility for reviewing their findings and leading the
          development of their suggestions, which greatly strengthened our
          security posture.
        </p>

        <p>
          I also took responsibility for performing security reviews of the
          team's code, and identified problems such as security fix regressions
          and user privilege escalation before they were deployed, which
          certainly protected customer data and the company's reputation.
        </p>

        <p>
          We required developers to use multi-factor authentication for AWS API
          calls, and enforced it via IAM Policies. While this certainly
          strengthened our security, it also caused frustration and put demands
          on developers' time when using the AWS CLI or SDK on local machines.
          To counter the distractions and save time, I took the personal
          initiative to create the open-source{" "}
          <Link href="https://github.com/cariad/wev">wev</Link> command-line
          tool to handle authentication on behalf of developers. The tool was
          adopted across the company, and saved development time every day.
        </p>
      </EventBlock>

      <EventBlock badge={<FullStackBadge />} heading="API / Backend">
        <p>
          My daily responsibility was to develop and deploy Python services. I
          enjoy test-driven development with high coverage, and leveraged static
          analysis and PEP8 compliance to support my peers with reliable and
          maintainable code.
        </p>

        <p>
          I deployed my code in Docker images hosted in AWS as either Lambda
          Functions or Fargate Services, depending on the functional
          requirements. For Lambda Functions that were invoked via SQS messages
          published by Step Functions, I used my open-source{" "}
          <Link href="https://github.com/cariad/lambdaq">lambdaq</Link> Python
          package to reduce boilerplate code. This saved me and the wider
          development team a significant amount of time during development and
          code review.
        </p>

        <p>One key service I contributed to was the API backend, in which I:</p>

        <ul>
          <li>Used the lambda-proxy Python package to manage routing.</li>
          <li>
            Developed database queries with SQLAlchemy and hand-crafted SQL
            statements.
          </li>
          <li>Developed database migration scripts with Alembic.</li>
          <li>
            Led investigations into query performance issues, contributed fixes
            and wrote tests with my open-source{" "}
            <Link href="https://github.com/cariad/lackadaisical">
              lackadaisical
            </Link>{" "}
            Python package to prevent regression.
          </li>
        </ul>
      </EventBlock>

      <EventBlock badge={<FullStackBadge />} heading="Reporting framework">
        <p>
          I led the design and development of the platform's reporting
          framework, which allowed developers to create new customer-facing,
          Microsoft Excel-based reports using only YAML configuration files.
        </p>

        <p>
          The framework was supported by my open-source{" "}
          <Link href="https://github.com/cariad/recompose">recompose</Link>{" "}
          package to clean data and{" "}
          <Link href="https://github.com/cariad/rolumns">rolumns</Link> package
          to transform data into tables.
        </p>

        <p>
          This new framework allowed new reports to be defined much quicker than
          the previous hard-coded solution, which significantly decreased the
          team's response time to customer requests and increased customer
          satisfaction.
        </p>
      </EventBlock>

      <EventBlock
        badge={<FullStackBadge />}
        heading="OAuth 2.0 / Single Sign-On"
      >
        <p>
          I led the design and development of OAuth 2.0 / Single Sign-On
          authentication in the platform. My responsibilities included:
        </p>

        <ul>
          <li>Reconfiguring Cognito User Pools.</li>
          <li>
            Code changes throughout the full stack, including the Vue.js
            frontend.
          </li>
          <li>
            Documentation to guide customers through their Identity Provider
            configuration.
          </li>
        </ul>

        <p>
          This release significantly increased the satisfaction of customers who
          wanted to manage group access via their own identity management, and
          helped to market the platform to larger businesses.
        </p>
      </EventBlock>

      <EventBlock badge={<FullStackBadge />} heading="Third-party data import">
        <p>
          I led the design and development of a framework that allowed customers
          to import data from their own data stores.
        </p>

        <p>Amongst custom integrations, this release included:</p>

        <ul>
          <li>Certificate- and IP-based SFTP polling and import.</li>
          <li>Publishing APIs for third-party webhooks.</li>
        </ul>

        <p>
          As well as importing data, these same integrations allowed reports to
          be generated and exported directly to customer-owned data stores. This
          release was key to attracting and retaining customers who were
          reluctant to manually duplicate their data across platforms.
        </p>
      </EventBlock>

      <EventBlock badge={<FullStackBadge />} heading="SDK & CLI development">
        <p>
          Our microservices commonly needed to call the private APIs of the
          backend service, but this resulted in many inconsistent and fragile
          approaches to discovering the API function's ARN, constructing
          appropriate JSON payloads and understanding the response schema to
          expect.
        </p>
        <p>
          To save development time and increase reliability, I took the
          initiative to build an SDK package that managed resource look-ups and
          provided strongly-typed functions for private APIs. This significantly
          reduced the bugs caused by failures to discover the private APIs and
          by failing to correctly parse requests and responses.
        </p>

        <p>
          Likewise, I also developed a command-line interface that handled user
          authentication and provided headless access to the platform's public
          APIs. This was invaluable for deploying automated integration tests
          and removed the need for a lot of manual testing.
        </p>

        <p>
          These tools used my open-source{" "}
          <Link href="https://github.com/cariad/cline">cline</Link> package to
          create command-line interfaces and{" "}
          <Link href="https://github.com/cariad/asking">asking</Link> package to
          interactively gather the user's configuration.
        </p>
      </EventBlock>
    </Section>
  );
}

export default Freyda;
