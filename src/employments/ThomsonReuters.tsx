import BackToEmploymentHistory from "../BackToEmploymentHistory";
import DevOpsBadge from "../badges/DevOpsBadge";
import EventBlock from "../EventBlock";
import EventHeader from "../EventHeader";
import FullStackBadge from "../badges/FullStackBadge";
import { Box, Link } from "@radix-ui/themes";

function ThomsonReuters() {
  return (
    <Box mt="9">
      <EventHeader
        date="May 2005 - July 2019"
        id="thomson-reuters"
        location="Exmouth"
        name="Thomson Reuters Tax & Accounting"
        position="Software Team Lead"
      />
      <EventBlock introduction={true}>
        <p>
          <Link href="https://tax.thomsonreuters.co.uk">
            Thomson Reuters Tax & Accounting
          </Link>{" "}
          develops integrated software products for tax and accounting
          professionals.
        </p>
      </EventBlock>

      <EventBlock
        badge={<FullStackBadge />}
        heading="Desktop application development"
      >
        <p>
          I joined Digita Open Systems Ltd (which was later acquired by Thomson
          Reuters Tax & Accounting) as a junior software engineer to develop
          Windows desktop applications in Visual Basic before we migrated to C#
          .NET. I was responsible for design documentation, development,
          testing, and liaising with the QA, marketing and support teams.
        </p>
        <p>
          I often joined customer support calls to offer help and gather
          feedback, and joined company roadshows to meet customers directly.
        </p>
      </EventBlock>

      <EventBlock
        badge={<FullStackBadge />}
        heading="Web application development"
      >
        <p>
          As a senior software engineer during the migration from desktop to web
          applications, I contributed to the planning of SaaS architecture in
          our private cloud environment, as well as the design, development,
          test and support of C#, JavaScript (via Express.js on Node.js) and
          Golang microservices on Windows and Linux with an Angular.js frontend.
        </p>
      </EventBlock>

      <EventBlock
        badge={<DevOpsBadge />}
        heading="DevOps leadership and migration to Amazon Web Services"
      >
        <p>
          When the organisation decided to migrate the SaaS platform from their
          private cloud into Amazon Web Services, I was promoted to Software
          Team Lead to form a DevOps team, and given joint responsibility with a
          Principal Engineer to have the platform deployed to production in AWS
          within a year.
        </p>
        <p>
          My greatest challenge was learning how to use AWS, from the
          introductory basics through to best-practices for production. The
          organisation didn't have any internal guidance yet as public cloud
          adoption was still new, so I published my own findings on my company
          blog as-and-when I learned new tips or topics. I also published weekly
          update videos so the wider development team was kept informed of the
          migration's progress.
        </p>
        <p>
          Unexpectedly, developers outside of my project were also interested in
          my articles and videos, which led to me being invited to travel and
          present in-person talks across the UK and USA. I've also been told,
          since I left the company, that my posts are greatly missed.
        </p>
        <p>
          To achieve the migration, my technical responsibilities included the
          planning of AWS architecture, deployment of CI/CD pipelines in
          Jenkins, and development of infrastructure-as-code with TypeScript /
          Node.js, Python, Bash, PowerShell and Terraform.
        </p>
        <p>
          The production deployment to AWS was achieved on-time, which made my
          team and I pioneers of public cloud deployment within Thomson Reuters.
        </p>
      </EventBlock>

      <EventBlock badge={<DevOpsBadge />} heading="Global DevOps leadership">
        <p>
          Based on the success of our migration to AWS, I was invited to lead a
          global DevOps team tasked with developing disaster recovery
          strategies, security practices, and common tooling for teams across
          the business to adopt rather than build their own.
        </p>
        <p>
          The team was spread across the UK, USA and India, and not only did we
          successfully support several projects into production, but some of our
          work was presented at re:Invent by corporate leadership.
        </p>
      </EventBlock>
      <BackToEmploymentHistory />
    </Box>
  );
}

export default ThomsonReuters;
