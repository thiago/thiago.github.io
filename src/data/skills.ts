export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Linguagens",
    skills: ["Go", "Python", "TypeScript", "JavaScript", "NodeJS"],
  },
  {
    name: "Backend & Frameworks",
    skills: ["Django", "Flask", "React", "NextJS"],
  },
  {
    name: "Cloud & Infraestrutura",
    skills: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "Ansible"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "Cassandra", "Redis", "Elasticsearch"],
  },
  {
    name: "Observabilidade",
    skills: ["Prometheus", "Grafana", "Jaeger"],
  },
  {
    name: "CI/CD & Tools",
    skills: ["GitLab CI", "Jenkins", "Nexus", "Git"],
  },
];
