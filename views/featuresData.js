const languages = [
  { title: "JavaScript", icon: '<i class="fab fa-js"></i>' },
  { title: "TypeScript", icon: '/logos/ts.svg' },
  { title: "Python", icon: '<i class="fab fa-python"></i>' },
  { title: "HTML5", icon: '<i class="fab fa-html5"></i>' },
  { title: "CSS3", icon: '<i class="fab fa-css3-alt"></i>' },
  { title: "GraphQL", icon: '/logos/graphql.svg' },
  { title: "C", icon: '<i class="fab fa-cuttlefish"></i>' },
  { title: "Visual Basic .NET", icon: '<i class="fab fa-windows"></i>' },
  { title: "PostgreSQL", icon: '/logos/postgres.svg' },
  { title: "MongoDB", icon: '/logos/mongodb.svg' },
  { title: "DynamoDB", icon: '/logos/dynamodb.svg' },
];

const frameworks = [
  { title: "VueJS", icon: '<i class="fab fa-vuejs"></i>' },
  { title: "ViteJS", icon: '/logos/vitejs.svg' },
  { title: "FastApi", icon: '/logos/fastapi.svg' },
  { title: "NodeJS", icon: '<i class="fab fa-node-js"></i>' },
  { title: "ExpressJS", icon: '/logos/express.svg' },
  { title: "GraphQL Yoga", icon: '/logos/graphql.svg' },
  { title: "Apollo GraphQL", icon: '<i class="fab fa-node-js"></i>' },
  { title: "Serverless", icon: '/logos/serverless.svg' },
  { title: "AWS CDK", icon: '/logos/lambda.svg' },
  { title: "Azure Cloud", icon: '/logos/azure.svg' },
  { title: "AWS Cloud", icon: '<i class="fab fa-aws"></i>' },
];

const devops = [
  { title: "Docker", icon: '<i class="fab fa-docker"></i>' },
  { title: "Jenkins", icon: '<i class="fab fa-jenkins"></i>' },
  { title: "GitHub Actions", icon: '<i class="fab fa-github"></i>' },
  { title: "GitLab CI", icon: '<i class="fab fa-gitlab"></i>' },
  { title: "Gitflow", icon: '<i class="fab fa-git-alt"></i>' },
  { title: "Test Driven Development", icon: '<i class="fas fa-vial"></i>' },
  { title: "Agile", icon: '<i class="fas fa-infinity"></i>' },
  { title: "Jira", icon: '<i class="fab fa-jira"></i>' },
  { title: "Jest", icon: '<i class="fab fa-js"></i>' },
  { title: "Cypress", icon: '/logos/cypress.svg' }
]

export default {
  sections() {
    return [
      { title: "Languages & Databases", features: languages },
      { title: "Frameworks & Tools", features: frameworks },
      { title: "DevOps", features: devops },
    ]
  }
}