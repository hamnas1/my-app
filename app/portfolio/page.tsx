import { CommunityPage, DesignPage } from "./design";
import { Review } from "./reviewpage";
import { PageFooter } from "./design";
export default async function Home() {
  return (
    <>
      <CommunityPage />
      < Review />
      <DesignPage />
      <PageFooter />
    </>
  );
}
