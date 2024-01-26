const programmingLanguages = [
  { title: "JavaScript", icon: '<i class="fab fa-js"></i>' },
  { title: "TypeScript", icon: '<i class="fab fa-js"></i>' },
  { title: "Python", icon: '<i class="fab fa-python"></i>' },
  { title: "SQL", icon: '<i class="fas fa-database"></i>' },
  { title: "HTML5", icon: '<i class="fab fa-html5"></i>' },
  { title: "CSS3", icon: '<i class="fab fa-css3-alt"></i>' },
  { title: "GraphQL", icon: '<i class="fab fa-js"></i>' },
  { title: "C", icon: '<i class="fab fa-cuttlefish"></i>' },
  { title: "Visual Basic .NET", icon: '<i class="fab fa-windows"></i>' },
];

const cliTools = [
  { title: "AWS CLI", icon: '<i class="fas fa-terminal"></i>' },
  { title: "Azure CLI", icon: '<i class="fas fa-terminal"></i>' },
  { title: "Docker CLI", icon: '<i class="fas fa-terminal"></i>' },
  { title: "Ubuntu CLI", icon: '<i class="fas fa-terminal"></i>' },
];

const frameworks = [
  { title: "VueJS", icon: '<i class="fab fa-vuejs"></i>' },
  { title: "ViteJS", icon: { dark: '/logos/vitejs-dark.svg', light: '/logos/vitejs-light.svg' } },
  { title: "FastApi", icon: { dark: '/logos/fastapi-dark.svg', light: '/logos/fastapi-light.svg' } },
  { title: "NodeJS", icon: '<i class="fab fa-node-js"></i>' },
  { title: "ExpressJS", icon: '<i class="fab fa-node-js"></i>' },
  { title: "NestJS", icon: '<i class="fab fa-node-js"></i>' },
  { title: "GraphQL Yoga", icon: '<i class="fab fa-node-js"></i>' },
  { title: "Apollo GraphQL", icon: '<i class="fab fa-node-js"></i>' },
];

const databases = [
  { title: "VueJS", icon: '<i class="fab fa-vuejs"></i>' },
  { title: "NodeJS", icon: '<i class="fab fa-node-js"></i>' },
  { title: "AWS Cloud", icon: '<i class="fab fa-aws"></i>' },
  { title: "Azure", icon: { dark: '/logos/azure-dark.svg', light: '/logos/azure-light.svg' } },
  { title: "PostgreSQL", icon: { dark: '/logos/postgres-dark.svg', light: '/logos/postgres-light.svg' } },
  { title: "MongoDB", icon: { dark: '/logos/mongodb-dark.svg', light: '/logos/mongodb-light.svg' } },
  { title: "ViteJS", icon: { dark: '/logos/vitejs-dark.svg', light: '/logos/vitejs-light.svg' } },
  { title: "FastApi", icon: { dark: '/logos/fastapi-dark.svg', light: '/logos/fastapi-light.svg' } },
];

// Puedes usar estos arrays en tu componente Vue y renderizar con v-for según necesites.


export default {
  sections() {
    return [
      { title: "Programming Languages", features: programmingLanguages },
      { title: "Command Line Interfaces", features: cliTools },
      { title: "Frameworks", features: frameworks },
      { title: "Databases", features: databases },
    ]
  }
}