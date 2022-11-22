import { useRouter } from "next/router";
import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

const NEWS_TRANSLATIONS = {
  "en-US": {
    read_more: "Read more",
  },
  uz: {
    read_more: "Batafsil",
  },
  ru: {
    read_more: "Читать далее",
  }
};

export default function NewsIndex() {
  const { locale, defaultLocale } = useRouter();
  return getPagesUnderRoute("/news").map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    const newsText = (key) =>
      NEWS_TRANSLATIONS[locale]?.[key] ??
      NEWS_TRANSLATIONS[defaultLocale][key];
    return (
      <div className="" key={page.name.toString()}>
        <h3>
          <Link href={page.route}>
            <A style={{ color: "inherit", textDecoration: "none" }}>
              {page.meta?.title || page.frontMatter?.title || page.name}
            </A>
          </Link>
        </h3>
        <p className="opacity-80">
          {page.frontMatter?.description}{" "}
          <Link href={page.route}>{newsText("read_more") + " →"}</Link>
        </p>
        {page.frontMatter?.date ? (
          <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
        ) : null}
      </div>
    );
  });
}