import { CommunityPage, DesignPage } from "./design";
import { Review } from "./reviewpage";
import { PageFooter } from "./design";
import { JoinCommunity } from "./design";
import { QuestionPage } from "./design";
import { GeneralPage } from "./design";
import { HeaderPage } from "./design";

export default async function Home() {
  return (
    <>
     <HeaderPage />
      <CommunityPage />
     <GeneralPage />
      < Review />
      <DesignPage />
      <JoinCommunity />
      <QuestionPage />
      <PageFooter />
      
    </>
  );
}
