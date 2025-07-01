const translate = {
    en: {
        /* Navigation */
        "about": "About",
        "contact": "Contact",
        "skills": "Skills",
        "projects": "Projects",

        /* */
        "language": "Language",
        "error": "Error changing language.",

        /*About section */
        "about-title": "Tran Xuan Bao - barozzxb",
        "about-description": "I am a web developer"
    },

    vi: {
        /* Navigation */
        "about": "Giới thiệu",
        "contact": "Liên hệ",
        "skills": "Kỹ năng",
        "projects": "Dự án",

        /* */
        "language": "Ngôn ngữ",
        "error": "Lỗi khi thay đổi ngôn ngữ.",

        /*Hero section */
        "hero-title": "Chào mừng đến với Portfolio của tôi",
        "hero-description": "Đây là một phần giới thiệu ngắn gọn về bản thân tôi."
    }
}

let currentLanguage = localStorage.getItem("language") || "en";

function translateData() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.innerText = translate[currentLanguage][key] || key;
    });
    localStorage.setItem("language", currentLanguage);
}

function changeLanguage() {
    currentLanguage == "en" ? currentLanguage = "vi" : currentLanguage = "en";
    translateData();
    changeLanguageIcon();
}

function changeLanguageIcon() {
    const langIcon = currentLanguage === 'vi' ? './assets/icons/vietnam.png' : './assets/icons/united-kingdom.png';
    document.getElementById("lang-icon").src = langIcon;
}

document.addEventListener("DOMContentLoaded", () => {
    translateData();
    changeLanguageIcon();
});