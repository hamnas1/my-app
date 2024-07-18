import { CommunityPage, DesignPage } from "./design";
import { Review } from "./reviewpage";
export default async function Home() {
  return (
    <>
      <CommunityPage />
      < Review />
      <DesignPage />
    </>
  );
}
