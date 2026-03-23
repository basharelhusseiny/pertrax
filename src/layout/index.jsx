import MainHeader from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  lang,
  toggleLang,
  t,
  scrollTo,
  isScrolled,
}) {
  return (
    <>
      <MainHeader
        lang={lang}
        toggleLang={toggleLang}
        t={t}
        scrollTo={scrollTo}
        isScrolled={isScrolled}
      />
      <main className="grow">{children}</main>
      <Footer t={t} lang={lang} />
    </>
  );
}
