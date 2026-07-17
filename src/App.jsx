import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";

const universityData = {
  Ottawa: {
    nameEn: "University of Ottawa",
    nameFr: "Université d’Ottawa",
    provinceEn: "Ontario",
    provinceFr: "Ontario",
    enrolment: {
      2020: 41200,
      2021: 42500,
      2022: 43800,
      2023: 45200,
      2024: 46800,
      2025: 47900,
    },
    undergraduate: 38100,
    graduate: 9800,
  },
  Carleton: {
    nameEn: "Carleton University",
    nameFr: "Université Carleton",
    provinceEn: "Ontario",
    provinceFr: "Ontario",
    enrolment: {
      2020: 30300,
      2021: 30900,
      2022: 31500,
      2023: 32100,
      2024: 32700,
      2025: 33200,
    },
    undergraduate: 27200,
    graduate: 6000,
  },
  Toronto: {
    nameEn: "University of Toronto",
    nameFr: "Université de Toronto",
    provinceEn: "Ontario",
    provinceFr: "Ontario",
    enrolment: {
      2020: 93600,
      2021: 94800,
      2022: 96100,
      2023: 97400,
      2024: 98900,
      2025: 100200,
    },
    undergraduate: 76100,
    graduate: 24100,
  },
  McGill: {
    nameEn: "McGill University",
    nameFr: "Université McGill",
    provinceEn: "Quebec",
    provinceFr: "Québec",
    enrolment: {
      2020: 39900,
      2021: 40500,
      2022: 41100,
      2023: 41700,
      2024: 42300,
      2025: 42900,
    },
    undergraduate: 31800,
    graduate: 11100,
  },
  UBC: {
    nameEn: "University of British Columbia",
    nameFr: "Université de la Colombie-Britannique",
    provinceEn: "British Columbia",
    provinceFr: "Colombie-Britannique",
    enrolment: {
      2020: 66800,
      2021: 68100,
      2022: 69400,
      2023: 70700,
      2024: 72100,
      2025: 73500,
    },
    undergraduate: 58600,
    graduate: 14900,
  },
};

const text = {
  en: {
    dashboardTitle: "Canadian University Enrolment Dashboard",
    subtitle:
      "Explore and compare synthetic enrolment data for selected Canadian universities.",
    syntheticNotice:
      "Educational prototype using synthetic data generated for this assignment.",
    language: "Language",
    overview: "Dashboard Overview",
    totalStudents: "Students in selected year",
    universities: "Universities shown",
    selectedYear: "Selected year",
    barTitle: "University Enrolment Comparison",
    barDescription:
      "Compare total enrolment across universities for the selected year.",
    lineTitle: "Enrolment Trend",
    lineDescription:
      "View how enrolment changes over time for one selected university.",
    year: "Year",
    university: "University",
    enrolment: "Enrolment",
    students: "Students",
    undergraduate: "Undergraduate",
    graduate: "Graduate",
    chartLanguageNote:
      "Chart titles, labels, menus, and tooltips update with the selected language.",
    source: "Data source",
    sourceText: "Synthetic dataset created for SEG3125 Assignment 5",
    designedBy: "Designed by Kai Wen Yuan",
  },
  fr: {
    dashboardTitle: "Tableau de bord des inscriptions universitaires canadiennes",
    subtitle:
      "Explorez et comparez des données synthétiques sur les inscriptions dans certaines universités canadiennes.",
    syntheticNotice:
      "Prototype éducatif utilisant des données synthétiques créées pour ce travail.",
    language: "Langue",
    overview: "Aperçu du tableau de bord",
    totalStudents: "Étudiants pour l’année choisie",
    universities: "Universités affichées",
    selectedYear: "Année sélectionnée",
    barTitle: "Comparaison des inscriptions universitaires",
    barDescription:
      "Comparez le nombre total d’inscriptions entre les universités pour l’année sélectionnée.",
    lineTitle: "Évolution des inscriptions",
    lineDescription:
      "Observez l’évolution des inscriptions d’une université au fil du temps.",
    year: "Année",
    university: "Université",
    enrolment: "Inscriptions",
    students: "Étudiants",
    undergraduate: "Premier cycle",
    graduate: "Cycles supérieurs",
    chartLanguageNote:
      "Les titres, étiquettes, menus et infobulles changent selon la langue choisie.",
    source: "Source des données",
    sourceText: "Jeu de données synthétiques créé pour le travail 5 de SEG3125",
    designedBy: "Conçu par Kai Wen Yuan",
  },
};

function formatNumber(value, language) {
  return new Intl.NumberFormat(language === "fr" ? "fr-CA" : "en-CA").format(
    value,
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [comparisonYear, setComparisonYear] = useState("2025");
  const [trendUniversity, setTrendUniversity] = useState("Ottawa");

  const t = text[language];

  const universityName = (university) =>
    language === "fr" ? university.nameFr : university.nameEn;

  const barData = useMemo(
    () =>
      Object.values(universityData).map((university) => ({
        name: universityName(university),
        value: university.enrolment[comparisonYear],
      })),
    [comparisonYear, language],
  );

  const lineData = useMemo(() => {
    const university = universityData[trendUniversity];

    return Object.entries(university.enrolment).map(([year, value]) => ({
      year,
      value,
    }));
  }, [trendUniversity]);

  const totalStudents = barData.reduce((total, item) => total + item.value, 0);

  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="course-label">SEG3125</p>
          <h1>{t.dashboardTitle}</h1>
        </div>

        <label className="language-control">
          {t.language}
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </label>
      </header>

      <section className="intro">
        <p>{t.subtitle}</p>
        <div className="notice">{t.syntheticNotice}</div>
      </section>

      <section aria-labelledby="overview-title">
        <h2 id="overview-title">{t.overview}</h2>

        <div className="summary-grid">
          <article className="summary-card">
            <span>{t.totalStudents}</span>
            <strong>{formatNumber(totalStudents, language)}</strong>
          </article>

          <article className="summary-card">
            <span>{t.universities}</span>
            <strong>{barData.length}</strong>
          </article>

          <article className="summary-card">
            <span>{t.selectedYear}</span>
            <strong>{comparisonYear}</strong>
          </article>
        </div>
      </section>

      <section className="chart-card" aria-labelledby="bar-chart-title">
        <div className="chart-header">
          <div>
            <h2 id="bar-chart-title">{t.barTitle}</h2>
            <p>{t.barDescription}</p>
          </div>

          <label>
            {t.year}
            <select
              value={comparisonYear}
              onChange={(event) => setComparisonYear(event.target.value)}
            >
              {["2020", "2021", "2022", "2023", "2024", "2025"].map(
                (year) => (
                  <option key={year}>{year}</option>
                ),
              )}
            </select>
          </label>
        </div>

        <div className="chart-area">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 20, right: 20, left: 20, bottom: 90 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                angle={-25}
                textAnchor="end"
                interval={0}
                height={105}
              />
              <YAxis
                tickFormatter={(value) => formatNumber(value, language)}
              />
              <Tooltip
                formatter={(value) => [
                  formatNumber(value, language),
                  t.students,
                ]}
              />
              <Legend />
              <Bar
                dataKey="value"
                name={t.enrolment}
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="chart-card" aria-labelledby="line-chart-title">
        <div className="chart-header">
          <div>
            <h2 id="line-chart-title">{t.lineTitle}</h2>
            <p>{t.lineDescription}</p>
          </div>

          <label>
            {t.university}
            <select
              value={trendUniversity}
              onChange={(event) => setTrendUniversity(event.target.value)}
            >
              {Object.entries(universityData).map(([key, university]) => (
                <option key={key} value={key}>
                  {universityName(university)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="chart-area">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={lineData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" />
              <YAxis
                domain={["dataMin - 1500", "dataMax + 1500"]}
                tickFormatter={(value) => formatNumber(value, language)}
              />
              <Tooltip
                formatter={(value) => [
                  formatNumber(value, language),
                  t.students,
                ]}
                labelFormatter={(label) => `${t.year}: ${label}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name={t.enrolment}
                stroke="#dc2626"
                strokeWidth={4}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p className="localization-note">{t.chartLanguageNote}</p>
      </section>

      <footer>
        <p>
          <strong>{t.source}:</strong> {t.sourceText}
        </p>
        <p>{t.designedBy}</p>
      </footer>
    </main>
  );
}

export default App;