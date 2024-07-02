import { Container, FactList, LanguageChanger, Title } from "@/components";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
	const locale = useLocale();
	const t = useTranslations("Index");

	return (
		<Container>
			<div className="flex justify-between items-center">
				<Title>{t("TITLE")}</Title>
				<LanguageChanger locale={locale} />
			</div>

			<FactList locale={locale} buttonLabel={t("LOAD_BUTTON_NAME")} />
		</Container>
	);
}
