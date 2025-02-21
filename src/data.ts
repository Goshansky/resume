export interface Profile {
    name: string;
    age: number;
    title: string;
    contacts: { icon: string; text: string }[];
    about: string;
    skills: string[];
    softSkills: string[];
    experience: { company: string; position: string; duration: string }[];
    education: { institution: string; field: string; years: string }[];
    hackathons: { year: number; title: string; link: string }[];
    projects: { year: string; title: string; link: string }[];
    additionalEducations: { year: number; title: string; link: string }[];
}

export const profileData: Profile = {
    name: "Пархоменко Георгий",
    age: 20,
    title: "Backend-разработчик",
    contacts: [
        { icon: "fas fa-mobile-alt", text: "+7 (960) 349-37-17" },
        { icon: "fas fa-envelope", text: "mc.goshanskyi@yandex.ru" },
        { icon: "fab fa-telegram", text: "@goshanskyi_bruh" },
        { icon: "fab fa-vk", text: "g.p2004" },
        { icon: "fab fa-github", text: "Goshansky" },
    ],
    about: `
    Увлекаюсь программирование со школы. Прохожу различные курсы в сфере IT для получения новых навыков.
    Имею за плечами несколько хакатонов и пэт-проектов. Опыт олимпиадного программирования в школе научил решению
    алгоритмических задач. Ищу возможность углублять знания и внедрять передовые технологии в оптимизации и масштабировании
    приложений для эффективного функционирования при высокой нагрузке.
  `,
    skills: [
        "Golang", "Gin", "Python", "Flask", "FastAPI", "Django", "Java", "Spring", "RxJava", "Kotlin",
        "JavaScript", "TypeScript", "NodeJS", "Nest", "React", "HTML", "CSS", "C++",
        "SQL", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "nginx", "Docker", "docker-compose",
        "Kafka", "Redis", "Linux", "RestAPI", "RPC", "WebSocket", "github", "gitlab",
        "MVVM", "MVC", "MVT", "SOLID"
    ],
    softSkills: [
        "коммуникабельность", "организованность", "быстрая обучаемость",
        "управление временем", "желание изучать что-то новое", "ответственность"
    ],
    experience: [
        { company: "R-Vision", position: "backend-разработчик", duration: "6 месяцев в 2024г" }
    ],
    education: [
        { institution: "РТУ МИРЭА", field: "программная инженерия", years: "2022/2026" }
    ],
    hackathons: [
        { year: 2020, title: "Победитель детского хакатона «Zаряд Хакатон»", link: "https://github.com/Goshansky/achievements/blob/main/Zaryad20.pdf" },
        { year: 2020, title: "Участник регионального хакатона «Digital space 2020»", link: "https://kvantorium.stavdeti.ru/news/regionalnyy-khakaton-detskikh-komand-digital-space-2020/" },
        { year: 2021, title: "Победитель детского хакатона «AI Hack»", link: "https://github.com/Goshansky/achievements/blob/main/UMA21.pdf" }
    ],
    projects: [
        { year: "2022-2023", title: "Мобильное приложение EventFinder", link: "https://github.com/Goshansky/EventFiender" },
        { year: "2023-2024", title: "Клиентская часть интернет-ресурса «Для медитации»", link: "https://github.com/Goshansky/InnerCalmQuest" },
        { year: "2023-2024", title: "Серверная часть приложения «Книжный магазин»", link: "https://github.com/Goshansky/CourseWork" },
        { year: "2024-2025", title: "Клиент-серверное приложения DelishDelivery", link: "https://github.com/Goshansky/DelishDelivery" }
    ],

    additionalEducations: [
        { year: 2018, title: "Основы программирования на языке Java", link: "https://github.com/Goshansky/achievements/blob/main/Java18.pdf" },
        { year: 2020, title: "Введение в программирование на языке Python", link: "https://github.com/Goshansky/achievements/blob/main/py20.pdf" },
        { year: 2020, title: "\"Поколение Python\": курс для начинающих", link: "https://github.com/Goshansky/achievements/blob/main/Stepik20.pdf" },
        { year: 2021, title: "Введение в программирование на языке С++", link: "https://github.com/Goshansky/achievements/blob/main/cpp21.pdf" },
        { year: 2022, title: "Мобильная разработка на языке Java", link: "https://github.com/Goshansky/achievements/blob/main/Sams23.png" }
    ]
};
