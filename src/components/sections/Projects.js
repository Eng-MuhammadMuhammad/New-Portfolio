import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Import all project images
import TechNews from "../../assets/TechNews.png";
import TaskManagment from "../../assets/TaskManagment.png";
import ExpenseTrack from "../../assets/ExpenseTrack.png";
import StolenBikesInvestigation from "../../assets/StolenBikesInvestigation.png";
import ClothesShopUI from "../../assets/ClothesShopUI.png";
import ProfileDashboard from "../../assets/ProfileDashboard.png";
import TodoApp from "../../assets/TodoApp.png";
import LightStore from "../../assets/LightStore.png";
import ArtCooperation from "../../assets/ArtCooperation.png";
import DesignAgency from "../../assets/DesignAgency.png";
import MediaCompany from "../../assets/MediaCompany.png";
import DevelopingCompany from "../../assets/DevelopingCompany.png";
import SalesCompanyUI from "../../assets/SalesCompanyUI.png";
import ShopCarts from "../../assets/ShopCarts.png";
import BookStoreCardUI from "../../assets/BookStoreCardUI.png";
import PortfolioDesignUI from "../../assets/PortfolioDesignUI.png";
import OnlineCoursesApp from "../../assets/OnlineCoursesApp.png";
import DesignerPortfolio from "../../assets/DesignerPortfolio.png";
import DribbleDesignersSpace from "../../assets/DribbleDesignersSpace.png";
import MobileStore from "../../assets/MobileStore.png";
import SkyWay from "../../assets/SkyWay.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "Flights Bookig website",
      description: "Wonderful and facinating website to book your flight",
      link: "https://skyway-flights.vercel.app/",
      category: "utility",
      image: SkyWay,
    },
    {
      id: 2,
      title: "Mobile Online Store",
      description: "Modern and fasional webstore for Smart Mobile Phones",
      link: "https://mobilewebstore.vercel.app/",
      category: "ecommerce",
      image: MobileStore,
    },
    {
      id: 3,
      title: "Technical-News Modern Blog",
      description: "A dynamic blog delivering technical news and insights.",
      link: "https://tech-news-modernblog.vercel.app/",
      category: "blog",
      image: TechNews,
    },
    {
      id: 4,
      title: "Employee-Task-Management-Platform",
      description: "A platform for managing employee tasks and collaboration.",
      link: "https://emplyee-task-managment-platform.vercel.app/",
      category: "management",
      image: TaskManagment,
    },
    {
      id: 5,
      title: "ExpenseTrack",
      description: "An intuitive app for tracking personal finances.",
      link: "https://expensetrakenew.netlify.app",
      category: "utility",
      image: ExpenseTrack,
    },
    {
      id: 6,
      title: "Stolen Bikes Investigation | SBI",
      description: "A platform to report and track stolen bikes.",
      link: "https://stolen-bikes-investigasion-sbi.vercel.app/",
      category: "utility",
      image: StolenBikesInvestigation,
    },
    {
      id: 7,
      title: "Clothes Store | Men & Women",
      description: "An e-commerce platform for clothing.",
      link: "https://mystoreshopcart.vercel.app/",
      category: "ecommerce",
      image: ShopCarts,
    },
    {
      id: 8,
      title: "Dashboard | Profile",
      description: "A personal dashboard for profile management.",
      link: "https://dashboardpresonal.vercel.app/",
      category: "utility",
      image: ProfileDashboard,
    },
    {
      id: 9,
      title: "Todo Application",
      description: "A simple and intuitive todo app.",
      link: "https://to-do-apptasks.vercel.app/",
      category: "utility",
      image: TodoApp,
    },
    {
      id: 10,
      title: "Modern Shopping | Light Store",
      description: "An e-commerce store for lighting products.",
      link: "https://light-store-modern.vercel.app/",
      category: "ecommerce",
      image: LightStore,
    },
    {
      id: 11,
      title: "Art Cooperation",
      description: "A collaborative platform for artists.",
      link: "https://coperation-art.vercel.app/",
      category: "collaboration",
      image: ArtCooperation,
    },
    {
      id: 12,
      title: "Design Agency",
      description: "A portfolio website for a design agency.",
      link: "https://new-design-agency.vercel.app/",
      category: "agency",
      image: DesignAgency,
    },
    {
      id: 13,
      title: "Media Company",
      description: "A website for a global media company.",
      link: "https://media-company-world.vercel.app/",
      category: "agency",
      image: MediaCompany,
    },
    {
      id: 14,
      title: "Developing Company",
      description: "A website for a software development company.",
      link: "https://developer-area-com.vercel.app/",
      category: "agency",
      image: DevelopingCompany,
    },
    {
      id: 15,
      title: "Sales Company / UI-UX",
      description: "A UI/UX design for a sales company.",
      link: "https://www.figma.com/proto/dbRfOWUgS0aivxUxRBiRCe/design?node-id=15%3A324&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=15%3A324",
      category: "design",
      image: SalesCompanyUI,
    },
    {
      id: 16,
      title: "Clothes Shop / UI-UX",
      description: "A UI/UX design for a clothing store.",
      link: "https://www.figma.com/proto/zzzSomNyeqCJrCooboAgy4/SHOP-REMOTE?node-id=2%3A2&starting-point-node-id=2%3A2",
      category: "design",
      image: ClothesShopUI,
    },
    {
      id: 17,
      title: "Book Store Card / UI-UX",
      description: "A UI/UX design for a bookstore.",
      link: "https://www.figma.com/proto/b6pwNopLZRXauTUy9M5B6Q/VIDEO-2-TEST?node-id=10%3A24",
      category: "design",
      image: BookStoreCardUI,
    },
    {
      id: 18,
      title: "Portfolio Design / UI-UX",
      description: "A UI/UX design for a portfolio website.",
      link: "https://www.figma.com/proto/IYPjr2NYksyaVpWIZQyDoH/VIDEO-1-TEST?node-id=0%3A5",
      category: "design",
      image: PortfolioDesignUI,
    },
    {
      id: 19,
      title: "Online Courses Application / UI-UX",
      description: "A UI/UX design for an online course platform.",
      link: "https://www.figma.com/file/hajvYDGBNZ9z7kkUjyWHaV/OnlineCourseApplication?type=design&node-id=0%3A1&mode=design&t=2S1SaiNXYxayfAkB-1",
      category: "design",
      image: OnlineCoursesApp,
    },
    {
      id: 20,
      title: "Designer Portfolio / UI-UX",
      description: "A UI/UX design for a designer's portfolio.",
      link: "https://www.figma.com/file/UH0aetbAhU8RM1rSbEVInx/DesignerPortfolio?type=design&node-id=0%3A1&mode=design&t=bAuyK4duEDUAi0Dl-1",
      category: "design",
      image: DesignerPortfolio,
    },
    {
      id: 21,
      title: "Dribble - Designers Space / UI-UX",
      description: "A UI/UX design for a designer's community platform.",
      link: "https://www.figma.com/proto/2vcjhFuxBujlgvxyO1asWG/Dribbble?page-id=0%3A1&node-id=2-8&starting-point-node-id=2%3A8&mode=design&t=2gucn1UQejG2no7F-1",
      category: "design",
      image: DribbleDesignersSpace,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "utility", name: "Utility" },
    { id: "design", name: "UI/UX Design" },
    { id: "agency", name: "Agency" },
    { id: "blog", name: "Blog" },
    { id: "management", name: "Management" },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-80 bg-gray-200 dark:bg-gray-700 relative group">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 truncate">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      View Project{" "}
                      <FaExternalLinkAlt className="ml-2" size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
