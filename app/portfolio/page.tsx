import { CommunityPage, DesignPage } from "./design";
import { Review } from "./reviewpage";
import { PageFooter } from "./design";
import { JoinCommunity } from "./design";
import { QuestionPage } from "./design";
export default async function Home() {
  return (
    <>
      <CommunityPage />
      < Review />
      <DesignPage />
      <JoinCommunity />
      <QuestionPage />
      <PageFooter />
      
    </>
  );
}
