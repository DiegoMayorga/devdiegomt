import MainNavigation from "../../components/organisms/navigation/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error...</h1>
        <p>An error ocurred, the page doesn't exist</p>
      </main>
    </>
  );
}
