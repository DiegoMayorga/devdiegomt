import MainNavigation from "../../components/organisms/navigation/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Page not found</h1>
        <p>An error occurred or the page doesn't exist.</p>
      </main>
    </>
  );
}
