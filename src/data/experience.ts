export interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "AutoSync",
    logo: "/logos/autosync.png",
    role: "Software Engineer",
    period: "Jul 2024 - Present",
    description: "Building software solutions for the automotive sector.",
    technologies: ["Go", "Python", "Kubernetes", "GCP"],
  },
  {
    company: "Bel",
    logo: "/logos/bel.png",
    role: "Software Engineer",
    period: "Sep 2022 - Aug 2024",
    description:
      "Built real estate platforms and data exchanges. Infrastructure design on GCP with Kubernetes, Prometheus, and Terraform.",
    technologies: ["Go", "Python", "React", "GCP", "Kubernetes", "Terraform"],
  },
  {
    company: "PicPay",
    logo: "/logos/picpay.png",
    role: "IT Coordinator → SRE",
    period: "Jun 2020 - Sep 2022",
    description:
      "Led backend and integration teams for the Open Finance project. Built 24/7 transaction system with Go, Kafka, and Cassandra. Second bank to complete all Open Banking integrations.",
    technologies: ["Go", "Kafka", "Cassandra", "Kubernetes", "Jenkins", "Jaeger"],
  },
  {
    company: "Guiabolso",
    logo: "/logos/guiabolso.png",
    role: "IT Coordinator → Software Engineer",
    period: "Jun 2020 - Sep 2022",
    description:
      "Created 24/7 transaction solution pre-PIX. Integration with Cielo API for payments. Team coordination focused on feedback and career development.",
    technologies: ["Go", "Kafka", "Cassandra", "Django", "Grafana", "Prometheus"],
  },
  {
    company: "Qume",
    logo: "/logos/qume.png",
    role: "SRE",
    period: "Jun 2019 - Jun 2020",
    description:
      "Managed multiple Kubernetes clusters on AWS and GCP. Designed VPNs, VPCs, and site-to-site connections. Automation with Terraform and Kustomize.",
    technologies: ["Kubernetes", "AWS", "GCP", "Terraform", "Istio", "Vault"],
  },
  {
    company: "B2W Digital",
    logo: "/logos/b2w.png",
    role: "Software Engineer",
    period: "Mar 2011 - Jun 2019",
    description:
      "8 years building large-scale e-commerce applications. Facebook apps, landing pages, JS libraries. Evolved into DevOps with Docker, CI/CD, and Atlassian tools administration.",
    technologies: ["JavaScript", "Python", "PHP", "NodeJS", "Docker", "AWS", "Ansible"],
  },
];

export const companies = experiences.map((exp) => ({
  name: exp.company,
  logo: exp.logo,
}));
