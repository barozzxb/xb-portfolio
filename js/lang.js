const translate = {
    en: {
        /* Navigation */
        "about": "About",
        "details": "Details",
        "contact": "Contact",
        "skills": "Skills",
        "projects": "Projects",

        /* */
        "language": "Language",
        "error": "Error changing language.",

        /*About section */
        "name-1": "Tran Xuan Bao",
        "name-2": "barozz",
        "about-description": "I am a web developer",
        "about-description-2": "With passion and dedication, I strive to create innovative and user-friendly web applications that make a difference in the digital world. I am always eager to learn and grow in this ever-evolving field, and I look forward to contributing my skills to exciting projects.",
        "about-description-3": "My objective is to be a senior Front-end developer in the next 2 years, and I am committed to continuous learning and improvement my skills to be able to achieve this goal.",

        /*Skills section */
        "skills-title": "Skills",
        "skills-description": "Here are some of my skills:",

        /*projects section */
        "projects-title": "Projects",
        "projects-description": "Here are some of my projects:",
    },

    vi: {
        /* Navigation */
        "about": "Giới thiệu",
        "details": "Chi tiết",
        "contact": "Liên hệ",
        "skills": "Kỹ năng",
        "projects": "Dự án",

        /* */
        "language": "Ngôn ngữ",
        "error": "Lỗi khi thay đổi ngôn ngữ.",

        /*About section */
        "name-1": "Trần Xuân Bảo",
        "name-2": "barozz",
        "about-description": "Tôi là một nhà phát triển web",
        "about-description-2": "Với niềm đam mê và sự tận tâm, tôi nỗ lực tạo ra các ứng dụng web sáng tạo và thân thiện với người dùng, mang lại sự khác biệt trong thế giới kỹ thuật số. Tôi luôn khao khát học hỏi và phát triển trong lĩnh vực không ngừng thay đổi này, và tôi mong muốn đóng góp kỹ năng của mình cho các dự án thú vị.",
        "about-description-3": "Mục tiêu của tôi là trở thành một nhà phát triển Front-end cao cấp trong vòng 2 năm tới, và tôi cam kết liên tục học hỏi và cải thiện kỹ năng của mình để có thể đạt được mục tiêu này.",

        /*Skills section */
        "skills-title": "Kỹ năng",
        "skills-description": "Dưới đây là một số kỹ năng của tôi:",

        /*projects section */
        "projects-title": "Dự án",
        "projects-description": "Dưới đây là một số dự án của tôi:",
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