export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const words = [
  {
    text: "Hi!",
    className:
      "mt-10 text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "I'm",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "Henrique",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "Alexandre",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "C.",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "Santos,",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "Your",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "next",
    className:
      "text-center md:tracking-wider text-blue-100 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "I.T.",
    className:
      "text-center md:tracking-wider text-blue-600 dark:text-blue-600 mb-1 text-lg md:text-lg lg:text-2xl",
  },
  {
    text: "Professional",
    className:
      "text-center md:tracking-wider text-blue-600 dark:text-blue-600 mb-1 text-lg md:text-lg lg:text-2xl",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className:
      "lg:col-span-3 md:col-span-2 md:row-span-4 min-h-[30vh] lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/img/ProfilePicture.jpg",
    spareImgClassName: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I can adapt my schedule to any time zone.",
    description: "Time zone in Ireland (UTC +07:00)",
    className:
      "lg:col-span-2 lg:row-span-4 lg:row-span-2 md:col-span-4 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImgClassName: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech passions include",
    description: "Willing to learn more",
    className: "lg:col-span-2 lg:row-span-5  md:col-span-4 md:row-span-2",
    imgClassName: "",
    titleClassName: "w-full items-center",
    img: "",
    spareImgClassName: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "My Computer Specifications",
    description: "",
    className: "lg:col-span-3 lg:row-span-8 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 md:right-20 lg:right-0 w-28 md:hidden lg:block lg:w-60 xl:w-80 top-10 xl:top-10",
    titleClassName: "w-full flex md:text-center lg:text-start lg:-top-5",
    img: "/svg/programming-animate.svg",
    spareImgClassName: "object-cover object-center w-full h-full",
    spareImg: "/svg/grid.svg",
  },
  {
    id: 5,
    title: "I like exploring new tools and technologies to improve my work.",
    description: "",
    className:
      "text-center md:justify-center md:text-start lg:col-span-2 lg:row-span-5 md:col-span-3 md:row-span-1",
    imgClassName: "p-96",
    titleClassName: "justify-start",
    img: "/svg/grid.svg",
    spareImgClassName:
      "object-cover object-end w-32 h-32 md:w-40 md:h-40 xl:w-56 xl:h-56",
    spareImg: "/svg/innovation-animate.svg",
  },
];

export const leftTechStack = [
  {
    id: 0,
    name: "Golang",
    svgpath: "/svg/go.svg",
  },
  {
    id: 1,
    name: "Azure",
    svgpath: "/svg/azure.svg",
  },
  {
    id: 2,
    name: "Git",
    svgpath: "/svg/git.svg",
  },
  {
    id: 3,
    name: "MySQL",
    svgpath: "/svg/mysql.svg",
  },
];

export const rightTechStack = [
  {
    id: 0,
    name: "Kubernetes",
    svgpath: "/svg/kubernetes.svg",
  },
  {
    id: 1,
    name: "Linux",
    svgpath: "/svg/linux.svg",
  },
  {
    id: 2,
    name: "Devops",
    svgpath: "/svg/pipelines.svg",
  },
  {
    id: 3,
    name: "Postgres",
    svgpath: "/svg/postgres.svg",
  },
];

export const leftSpecs = [
  {
    id: 0,
    name: "128GB RAM",
  },
  {
    id: 1,
    name: "Macbook Pro",
  },
  {
    id: 2,
    name: "1TB SSD Storage",
  },
];

export const rightSpecs = [
  {
    id: 0,
    name: "B450M Steel Legend",
  },
  {
    id: 1,
    name: "Dual Monitor",
  },
  {
    id: 2,
    name: "PLDT FIBR",
  },
];

export const projects = [
  {
    id: 1,
    title: "Feedback Fusion - Customer Feedback Management System",
    des: "Analyzes customer feedback sentiment and generates survey QR codes by business owners.",
    img: "/img/feedbackfusion.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://feedbackfusion.online",
  },
  {
    id: 2,
    title: "ChatMoko - Messaging Chat Web Application",
    des: "ChatMoko is a web app for easy messaging. It has real-time chat, user login, and works on any device.",
    img: "/img/chatmoko.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://chat-moko.vercel.app",
  },
  {
    id: 3,
    title: "D-Leecious Tea - Milktea Website",
    des: "Showcasing our delightful milk tea varieties with a sleek and engaging website.",
    img: "/img/d-leecioustea.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://d-leecious-tea.vercel.app",
  },
];

export const conferences = [
  {
    id: 1,
    title:
      "Philippine Startup Challenge 8 (PSC8) - Regional Pitching Competition",
    des: "Participated in the Regional Pitching Competition (RPC) by the ICT Industry Development Bureau, where we pitched our capstone project.",
    date: "October 04, 2023",
    img: "/img/PSC.jpeg",
  },
  {
    id: 2,
    title:
      "International Research Conference on Information Technology Education (IRCITE) - Poster Presentation",
    des: "Invited for Poster Presentation by the PSITE-Central Luzon where we showcase our capstone project.",
    date: "March 08, 2024",
    img: "/img/IRCITE-1.jpeg",
  },
  {
    id: 3,
    title:
      "Philippine Startup Challenge 8 (PSC8) - Regional Pitching Competition",
    des: "Participated in the Regional Pitching Competition (RPC) by the ICT Industry Development Bureau, where we pitched our capstone project.",
    date: "October 04, 2023",
    img: "/img/PSC-1.jpeg",
  },
  {
    id: 4,
    title:
      "International Research Conference on Information Technology Education (IRCITE) - Poster Presentation",
    des: "Invited for Poster Presentation by the PSITE-Central Luzon where we showcase our capstone project.",
    date: "March 08, 2024",
    img: "/img/IRCITE.jpeg",
  },
  {
    id: 5,
    title:
      "International Research Conference on Information Technology Education (IRCITE) - Poster Presentation",
    des: "Invited for Poster Presentation by the PSITE-Central Luzon where we showcase our capstone project.",
    date: "March 08, 2024",
    img: "/img/PSC-3.jpeg",
  },
  {
    id: 6,
    title:
      "International Research Conference on Information Technology Education (IRCITE) - Poster Presentation",
    des: "Invited for Poster Presentation by the PSITE-Central Luzon where we showcase our capstone project.",
    date: "March 08, 2024",
    img: "/img/PSC-2.jpeg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Hokei Subic Corporation (Feb. 2024 - July 2024)",
    desc: "I create a fast and smooth user experience using Next.js, Tailwind CSS, and Socket.io, with REST API methods connecting to server-side machine learning components.",
    className: "md:col-span-2",
    thumbnail: "/hokei.jfif",
  },
  {
    id: 2,
    title: "Intern",
    company: "CJR Graphics & Printing (Oct. 2019 - Dec. 2019)",
    desc: "Learned to use Adobe Photoshop for designing tarpaulins and ID lace sublimation for events like birthdays and christenings.",
    className: "md:col-span-2",
    thumbnail: "/img/cjr.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
