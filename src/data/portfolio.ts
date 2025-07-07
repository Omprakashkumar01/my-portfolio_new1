import { Project, Experience, Skill, Certification } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Jenkins + Ansible + Docker CI/CD Pipeline',
    description: 'Built a complete CI/CD pipeline from scratch using Jenkins for automation, Docker for containerization, and Ansible for remote deployment to Linux servers. No pre-built images or DockerHub usage - fully manual setup.',
    technologies: ['Jenkins', 'Docker', 'Ansible', 'CI/CD', 'Git', 'Linux', 'Bash'],
    githubUrl: 'https://github.com/Omprakashkumar01/jenkins-ansible-docker-cicd-pipeline',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '2',
    title: 'Dockerized Jenkins Cluster',
    description: 'Built a Jenkins master-agent architecture using Docker containers with SSH authentication. Implemented scalable CI/CD pipelines with automated deployment workflows and resolved common Jenkins connection issues.',
    technologies: ['Docker', 'Jenkins', 'SSH', 'CI/CD', 'Docker Compose', 'Bash'],
    githubUrl: 'https://github.com/Omprakashkumar01/dockerized-jenkins-cluster',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '3',
    title: 'Microservices Deployment with ArgoCD & Istio',
    description: 'Deployed microservices architecture using EKS cluster, ArgoCD for GitOps deployment, Istio service mesh for traffic management, and integrated monitoring with Kiali, Prometheus, and Grafana dashboards.',
    technologies: ['Kubernetes', 'EKS', 'ArgoCD', 'Istio', 'Helm', 'GitOps', 'Kiali', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/Omprakashkumar01/devops_project',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '4',
    title: 'Kubernetes Cluster with Dockerized Jenkins + Ansible',
    description: 'Manually created Kubernetes cluster using kubeadm and deployed Jenkins and Ansible inside custom Docker containers running in Kubernetes pods. Jenkins triggers Ansible for automated deployment across nodes.',
    technologies: ['Kubernetes', 'kubeadm', 'Jenkins', 'Ansible', 'Docker', 'Calico', 'NodePort'],
    githubUrl: 'https://github.com/Omprakashkumar01/kubeadm-jenkins-ansible-setup',
    image: 'https://images.pexels.com/photos/1181619/pexels-photo-1181619.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'LinuxWorld Pvt. Ltd.',
    position: 'DevOps Intern',
    duration: 'Jan 2025 – Present',
    description: [
      'Implemented AWS infrastructure using Terraform for scalable cloud deployments',
      'Set up monitoring solutions with Prometheus and Grafana for real-time insights',
      'Automated CI/CD pipelines using Jenkins and GitHub Actions',
      'Optimized container deployments and orchestration with Kubernetes'
    ],
    technologies: ['AWS', 'Terraform', 'Prometheus', 'Grafana', 'Jenkins', 'Kubernetes', 'Ansible', 'ArgoCD']
  },
  {
    id: '2',
    company: 'Presear Software',
    position: 'Cloud & DevOps Intern',
    duration: 'May 2023 – Jan 2024',
    description: [
      'Deployed applications on AWS EC2 instances with auto-scaling groups',
      'Managed AWS Amplify for frontend deployments and CI/CD automation',
      'Configured RDS databases with backup strategies and performance tuning',
      'Implemented S3 storage solutions and Application Load Balancers'
    ],
    technologies: ['AWS EC2', 'AWS Amplify', 'RDS', 'S3', 'Load Balancers', 'CloudWatch']
  }
];

export const skills: { [key: string]: Skill[] } = {
  'Languages': [
    { name: 'Python', level: 90, icon: 'code' },
    { name: 'C++', level: 85, icon: 'code-2' },
    { name: 'JavaScript', level: 80, icon: 'code' },
    { name: 'Bash', level: 85, icon: 'terminal' }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 90, icon: 'cloud' },
    { name: 'Docker', level: 95, icon: 'container' },
    { name: 'Kubernetes', level: 85, icon: 'server' },
    { name: 'Jenkins', level: 90, icon: 'git-branch' },
    { name: 'Terraform', level: 85, icon: 'settings' },
    { name: 'ArgoCD', level: 80, icon: 'git-merge' },
    { name: 'Prometheus', level: 85, icon: 'activity' },
    { name: 'Grafana', level: 80, icon: 'bar-chart' },
    { name: 'Ansible', level: 75, icon: 'server' }
  ],
  'Web & Frameworks': [
    { name: 'React.js', level: 85, icon: 'layout' },
    { name: 'Node.js', level: 80, icon: 'server' },
    { name: 'Express.js', level: 75, icon: 'globe' },
    { name: 'MySQL', level: 80, icon: 'database' },
    { name: 'HTML/CSS', level: 90, icon: 'code' }
  ],
  'Tools & Others': [
    { name: 'Git/GitHub', level: 95, icon: 'git-branch' },
    { name: 'VS Code', level: 90, icon: 'code' },
    { name: 'Linux', level: 85, icon: 'terminal' },
    { name: 'DSA', level: 80, icon: 'cpu' },
    { name: 'OOP', level: 85, icon: 'layers' },
    { name: 'DBMS', level: 80, icon: 'database' }
  ]
};

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Full Stack Web Development (MERN)',
    issuer: 'Udemy - Dr. Angela Yu',
    date: '2023',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://www.udemy.com/certificate/UC-e843031c-a1f0-469d-b622-75e1b727bd56/'
  },
  {
    id: '2',
    title: 'Scientific Computing with Python',
    issuer: 'FreeCodeCamp',
    date: '2023',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://www.freecodecamp.org/certification/fcc186d76e3-ff15-4c34-9f44-c42a0295e85c/scientific-computing-with-python-v7'
  }
];

export const achievements = [
  {
    id: '1',
    title: 'GDSC Member',
    description: 'Active member of Google Developer Student Club',
    icon: 'users'
  },
  {
    id: '2',
    title: 'GFG Student Chapter',
    description: 'Contributing member of GeeksforGeeks Student Chapter',
    icon: 'code'
  },
  {
    id: '3',
    title: 'Techfest Member',
    description: 'Organizing committee member for technical festivals',
    icon: 'calendar'
  },
  {
    id: '4',
    title: 'GATE 2024 Qualified',
    description: 'Successfully qualified Graduate Aptitude Test in Engineering',
    icon: 'award'
  },
  {
    id: '5',
    title: '300+ DSA Problems',
    description: 'Solved 300+ Data Structures and Algorithms problems on LeetCode',
    icon: 'cpu'
  },
  {
    id: '6',
    title: 'AWS DeepRacer Contest',
    description: 'Participated in AWS DeepRacer Contest showcasing AI/ML skills',
    icon: 'award'
  }
];