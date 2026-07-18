import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLang, localePath } from "../../i18n/useLang";

export default function ErrorPage() {
  const { t } = useTranslation();
  const lang = useLang();
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1>{t("error.title")}</h1>
      <p>{t("error.body")}</p>
      <Link to={localePath("/", lang)} style={{ color: "#ffb829" }}>
        {t("error.back")}
      </Link>
    </div>
  );
}
