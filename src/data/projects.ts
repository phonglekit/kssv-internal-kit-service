export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  year: string;
}

export const projects: Record<string, Project[]> = {
  "web-development": [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management and seamless payment integration.",
      category: "Web Development",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      year: "2024",
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      description: "Modern analytics dashboard for a B2B SaaS company with real-time data visualization.",
      category: "Web Development",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "D3.js", "Supabase"],
      year: "2024",
    },
    {
      id: "booking-system",
      title: "Booking System",
      description: "Comprehensive booking and scheduling system for hospitality industry.",
      category: "Web Development",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "MongoDB", "Redis"],
      year: "2023",
    },
  ],
  "ai-solutions": [
    {
      id: "chatbot-assistant",
      title: "AI Chatbot Assistant",
      description: "Intelligent customer service chatbot with natural language processing capabilities.",
      category: "AI Solutions",
      image: "/placeholder.svg",
      technologies: ["Python", "OpenAI", "LangChain", "FastAPI"],
      year: "2024",
    },
    {
      id: "image-recognition",
      title: "Smart Warehouse System",
      description: "Custom image recognition solution for quality control in manufacturing.",
      category: "AI Solutions",
      image: "/placeholder.svg",
      technologies: ["TensorFlow", "Python", "Docker", "AWS"],
      year: "2024",
    },
    {
      id: "recommendation-engine",
      title: "Recommendation Engine",
      description: "Personalized product recommendation system using collaborative filtering.",
      category: "AI Solutions",
      image: "/placeholder.svg",
      technologies: ["Python", "scikit-learn", "Redis", "PostgreSQL"],
      year: "2023",
    },
  ],
  "data-analysis": [
    {
      id: "business-intelligence",
      title: "Business Intelligence Platform",
      description: "Comprehensive BI solution with interactive dashboards and automated reporting.",
      category: "Data Analysis",
      image: "/placeholder.svg",
      technologies: ["Power BI", "Python", "SQL Server", "Azure"],
      year: "2024",
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "Sales forecasting system using machine learning models.",
      category: "Data Analysis",
      image: "/placeholder.svg",
      technologies: ["Python", "Pandas", "Prophet", "Tableau"],
      year: "2024",
    },
    {
      id: "data-pipeline",
      title: "ETL Data Pipeline",
      description: "Scalable data pipeline for processing millions of records daily.",
      category: "Data Analysis",
      image: "/placeholder.svg",
      technologies: ["Apache Spark", "Airflow", "BigQuery", "dbt"],
      year: "2023",
    },
  ],
};

export const serviceInfo: Record<string, { title: string; description: string }> = {
  "web-development": {
    title: "Web Development",
    description: "We build modern, scalable web applications that deliver exceptional user experiences. From e-commerce platforms to complex enterprise solutions.",
  },
  "ai-solutions": {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that learn and adapt.",
  },
  "data-analysis": {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights. We help businesses make data-driven decisions with advanced analytics and visualization.",
  },
};
