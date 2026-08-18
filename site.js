const translations = {
  uk: {
    title: "SunFlow — розрахунок сонячної системи",
    description: "SunFlow допомагає підібрати сонячні панелі, акумулятор та інвертор, оцінити резерв і окупність домашньої сонячної станції.",
    navFeatures: "Можливості", navHow: "Як працює", navApps: "Застосунки",
    heroTitle: "Сонячна система,<br>розрахована для вашого дому",
    heroText: "Підберіть панелі, акумулятор та інвертор. Оцініть резерв під час відключення й орієнтовну окупність.",
    heroAlt: "Будинок із сонячними панелями та екран застосунку SunFlow",
    download: "Завантажити в Google Play", learn: "Дізнатися про можливості",
    featuresTitle: "Усе для вашого сонячного проєкту",
    featuresLead: "Від побутового навантаження до зрозумілої конфігурації обладнання — в одному проєкті на телефоні.",
    equipmentTitle: "Підбір обладнання", equipmentText: "Панелі, акумулятор та інвертор під ваше навантаження.",
    backupTitle: "Резерв під час відключення", backupText: "Оцінка часу автономної роботи вашого дому.",
    economyTitle: "Економіка системи", economyText: "Орієнтовна вартість і строк окупності.",
    workflowTitle: "Від навантаження до готового проєкту",
    step1Title: "Додайте прилади", step1Text: "Укажіть, чим ви користуєтеся вдома та як довго.",
    step2Title: "Виберіть обладнання", step2Text: "SunFlow допоможе зібрати відповідну конфігурацію.",
    step3Title: "Збережіть проєкт", step3Text: "Порівнюйте варіанти та повертайтеся до розрахунків.",
    sunflowDescription: "Підбір і розрахунок домашньої сонячної станції.",
    probetonDescription: "Розрахунок складу та вартості бетону.", openPlay: "Відкрити в Google Play",
    ctaTitle: "Почніть проєктувати свою сонячну систему",
    ctaText: "Безкоштовний Android-застосунок для власників будинків, монтажників і консультантів.",
    downloadSunflow: "Завантажити SunFlow", privacy: "Політика конфіденційності", contact: "Зв’язатися"
  },
  ru: {
    title: "SunFlow — расчёт солнечной системы",
    description: "SunFlow помогает подобрать солнечные панели, аккумулятор и инвертор, оценить резерв и окупаемость домашней солнечной станции.",
    navFeatures: "Возможности", navHow: "Как работает", navApps: "Приложения",
    heroTitle: "Солнечная система,<br>рассчитанная под ваш дом",
    heroText: "Подберите панели, аккумулятор и инвертор. Оцените резерв при отключении и ориентировочную окупаемость.",
    heroAlt: "Дом с солнечными панелями и экран приложения SunFlow",
    download: "Скачать в Google Play", learn: "Узнать возможности",
    featuresTitle: "Всё для вашего солнечного проекта",
    featuresLead: "От бытовой нагрузки до понятной конфигурации оборудования — в одном проекте на телефоне.",
    equipmentTitle: "Подбор оборудования", equipmentText: "Панели, аккумулятор и инвертор под вашу нагрузку.",
    backupTitle: "Резерв при отключении", backupText: "Оценка времени автономной работы вашего дома.",
    economyTitle: "Экономика системы", economyText: "Ориентировочная стоимость и срок окупаемости.",
    workflowTitle: "От нагрузки до готового проекта",
    step1Title: "Добавьте приборы", step1Text: "Укажите, чем вы пользуетесь дома и как долго.",
    step2Title: "Выберите оборудование", step2Text: "SunFlow поможет собрать подходящую конфигурацию.",
    step3Title: "Сохраните проект", step3Text: "Сравнивайте варианты и возвращайтесь к расчётам.",
    sunflowDescription: "Подбор и расчёт домашней солнечной станции.",
    probetonDescription: "Расчёт состава и стоимости бетона.", openPlay: "Открыть в Google Play",
    ctaTitle: "Начните проектировать свою солнечную систему",
    ctaText: "Бесплатное Android-приложение для владельцев домов, монтажников и консультантов.",
    downloadSunflow: "Скачать SunFlow", privacy: "Политика конфиденциальности", contact: "Связаться"
  }
};

function setLanguage(language) {
  const copy = translations[language] || translations.uk;
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector("#page-description").content = copy.description;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("sunflow-language", language);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
setLanguage(localStorage.getItem("sunflow-language") || "uk");
