import mysql from 'mysql2/promise';

const sampleJobs = [
  {
    slug: 'senior-software-engineer-cloud',
    title: 'Senior Software Engineer - Cloud Infrastructure',
    department: 'Engineering',
    location: 'Washington, DC / Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Senior',
    salaryRange: '$140,000 - $180,000',
    summary: 'Join our cloud infrastructure team to design and implement scalable, secure solutions for federal government clients. You will work on cutting-edge cloud technologies and help modernize critical government systems.',
    description: `<h3>About the Role</h3>
<p>We are seeking a Senior Software Engineer to join our Cloud Infrastructure team. In this role, you will design, develop, and maintain cloud-native applications and infrastructure for our federal government clients. You will work with modern technologies including AWS, Azure, Kubernetes, and Terraform to deliver secure, scalable solutions.</p>

<h3>What You'll Do</h3>
<ul>
<li>Design and implement cloud infrastructure solutions using AWS and Azure</li>
<li>Develop Infrastructure as Code (IaC) using Terraform and CloudFormation</li>
<li>Build and maintain CI/CD pipelines for automated deployments</li>
<li>Implement security best practices and ensure FedRAMP compliance</li>
<li>Mentor junior engineers and contribute to technical architecture decisions</li>
<li>Collaborate with cross-functional teams to deliver high-quality solutions</li>
</ul>

<h3>Why NexDyne</h3>
<p>At NexDyne, you'll work on meaningful projects that impact millions of citizens. We offer competitive compensation, comprehensive benefits, and a culture that values work-life balance and continuous learning.</p>`,
    requirements: `<ul>
<li>Bachelor's degree in Computer Science, Engineering, or related field</li>
<li>5+ years of experience in software engineering</li>
<li>3+ years of experience with AWS or Azure cloud platforms</li>
<li>Strong experience with containerization (Docker, Kubernetes)</li>
<li>Proficiency in Infrastructure as Code (Terraform, CloudFormation)</li>
<li>Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)</li>
<li>Knowledge of security best practices and compliance frameworks</li>
<li>Excellent communication and collaboration skills</li>
</ul>`,
    niceToHave: `<ul>
<li>Experience with federal government projects</li>
<li>FedRAMP or FISMA compliance experience</li>
<li>AWS or Azure certifications</li>
<li>Experience with serverless architectures</li>
<li>Knowledge of Python, Go, or TypeScript</li>
</ul>`,
    benefits: `<ul>
<li>Competitive salary with annual bonuses</li>
<li>Comprehensive health, dental, and vision insurance</li>
<li>401(k) with 6% company match</li>
<li>Flexible remote work options</li>
<li>Professional development budget ($5,000/year)</li>
<li>Generous PTO (25 days + federal holidays)</li>
<li>Parental leave (16 weeks paid)</li>
</ul>`,
    clearanceRequired: 'Secret',
    remoteAllowed: true,
    status: 'published',
    publishedAt: new Date()
  },
  {
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Reston, VA',
    employmentType: 'Full-time',
    experienceLevel: 'Mid',
    salaryRange: '$100,000 - $130,000',
    summary: 'Protect critical government infrastructure as a Cybersecurity Analyst. You will monitor, detect, and respond to security threats while ensuring compliance with federal security standards.',
    description: `<h3>About the Role</h3>
<p>We are looking for a skilled Cybersecurity Analyst to join our Security Operations team. You will play a critical role in protecting our clients' infrastructure from cyber threats, conducting security assessments, and ensuring compliance with federal security requirements.</p>

<h3>What You'll Do</h3>
<ul>
<li>Monitor security systems and analyze alerts for potential threats</li>
<li>Conduct vulnerability assessments and penetration testing</li>
<li>Develop and implement security policies and procedures</li>
<li>Respond to security incidents and conduct forensic investigations</li>
<li>Ensure compliance with NIST, FedRAMP, and CMMC frameworks</li>
<li>Create security documentation and reports for stakeholders</li>
</ul>

<h3>Why NexDyne</h3>
<p>Join a team of security experts working on high-impact projects. We invest in your growth with certifications, training, and opportunities to work with cutting-edge security technologies.</p>`,
    requirements: `<ul>
<li>Bachelor's degree in Cybersecurity, IT, or related field</li>
<li>3+ years of experience in cybersecurity or IT security</li>
<li>Experience with SIEM tools (Splunk, QRadar, or similar)</li>
<li>Knowledge of NIST 800-53, FedRAMP, and CMMC frameworks</li>
<li>Understanding of network security, firewalls, and IDS/IPS</li>
<li>Security+ or equivalent certification</li>
<li>Strong analytical and problem-solving skills</li>
</ul>`,
    niceToHave: `<ul>
<li>CISSP, CEH, or GIAC certifications</li>
<li>Experience with cloud security (AWS, Azure)</li>
<li>Scripting skills (Python, PowerShell)</li>
<li>Experience with zero-trust architecture</li>
<li>Previous government or defense sector experience</li>
</ul>`,
    benefits: `<ul>
<li>Competitive salary with performance bonuses</li>
<li>Full health benefits package</li>
<li>401(k) with company match</li>
<li>Certification reimbursement program</li>
<li>Flexible work arrangements</li>
<li>25 days PTO + federal holidays</li>
</ul>`,
    clearanceRequired: 'Top Secret',
    remoteAllowed: false,
    status: 'published',
    publishedAt: new Date()
  },
  {
    slug: 'data-scientist-ml',
    title: 'Data Scientist - Machine Learning',
    department: 'Data Analytics',
    location: 'Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Senior',
    salaryRange: '$150,000 - $190,000',
    summary: 'Apply machine learning and AI to solve complex government challenges. You will develop predictive models, build data pipelines, and deliver actionable insights that drive mission success.',
    description: `<h3>About the Role</h3>
<p>We are seeking a talented Data Scientist with expertise in machine learning to join our Data Analytics team. You will work on challenging problems, developing ML models that help government agencies make data-driven decisions and improve operational efficiency.</p>

<h3>What You'll Do</h3>
<ul>
<li>Design and implement machine learning models for classification, regression, and NLP tasks</li>
<li>Build and optimize data pipelines for large-scale data processing</li>
<li>Develop predictive analytics solutions for government clients</li>
<li>Create data visualizations and dashboards to communicate insights</li>
<li>Collaborate with stakeholders to understand requirements and translate them into technical solutions</li>
<li>Stay current with ML/AI advancements and apply them to client challenges</li>
</ul>

<h3>Why NexDyne</h3>
<p>Work on meaningful projects that leverage AI for public good. We offer a collaborative environment, competitive compensation, and the opportunity to work with diverse datasets and cutting-edge technologies.</p>`,
    requirements: `<ul>
<li>Master's or PhD in Data Science, Computer Science, Statistics, or related field</li>
<li>5+ years of experience in data science or machine learning</li>
<li>Strong proficiency in Python and ML libraries (scikit-learn, TensorFlow, PyTorch)</li>
<li>Experience with big data technologies (Spark, Hadoop)</li>
<li>Proficiency in SQL and data visualization tools</li>
<li>Experience deploying ML models to production</li>
<li>Excellent communication skills for technical and non-technical audiences</li>
</ul>`,
    niceToHave: `<ul>
<li>Experience with NLP and computer vision</li>
<li>Knowledge of MLOps practices</li>
<li>Experience with cloud ML services (AWS SageMaker, Azure ML)</li>
<li>Publications in ML/AI conferences or journals</li>
<li>Government sector experience</li>
</ul>`,
    benefits: `<ul>
<li>Highly competitive salary</li>
<li>Comprehensive benefits package</li>
<li>401(k) with 6% match</li>
<li>Fully remote position</li>
<li>Conference attendance budget</li>
<li>$5,000 annual learning stipend</li>
<li>Flexible work hours</li>
</ul>`,
    clearanceRequired: 'None',
    remoteAllowed: true,
    status: 'published',
    publishedAt: new Date()
  },
  {
    slug: 'project-manager-federal',
    title: 'Project Manager - Federal Programs',
    department: 'Project Management',
    location: 'Washington, DC',
    employmentType: 'Full-time',
    experienceLevel: 'Lead',
    salaryRange: '$120,000 - $150,000',
    summary: 'Lead complex federal IT modernization projects from inception to delivery. You will manage cross-functional teams, stakeholder relationships, and ensure projects are delivered on time and within budget.',
    description: `<h3>About the Role</h3>
<p>We are looking for an experienced Project Manager to lead our federal programs. You will be responsible for managing large-scale IT modernization projects, coordinating with government clients, and ensuring successful delivery of complex solutions.</p>

<h3>What You'll Do</h3>
<ul>
<li>Lead and manage federal IT projects from initiation to closure</li>
<li>Develop project plans, schedules, and budgets</li>
<li>Manage cross-functional teams of engineers, analysts, and consultants</li>
<li>Serve as primary point of contact for government clients</li>
<li>Identify and mitigate project risks</li>
<li>Ensure compliance with federal acquisition regulations</li>
<li>Report project status to executive leadership</li>
</ul>

<h3>Why NexDyne</h3>
<p>Lead transformative projects that modernize government operations. We offer a supportive environment, competitive compensation, and opportunities for career advancement.</p>`,
    requirements: `<ul>
<li>Bachelor's degree in Business, IT, or related field</li>
<li>7+ years of project management experience</li>
<li>3+ years managing federal government projects</li>
<li>PMP certification required</li>
<li>Experience with Agile and Waterfall methodologies</li>
<li>Knowledge of federal acquisition processes (FAR/DFAR)</li>
<li>Strong leadership and communication skills</li>
<li>Experience managing budgets over $5M</li>
</ul>`,
    niceToHave: `<ul>
<li>Agile certifications (CSM, SAFe)</li>
<li>Experience with IT modernization projects</li>
<li>Knowledge of cloud technologies</li>
<li>Previous contracting officer experience</li>
<li>MBA or advanced degree</li>
</ul>`,
    benefits: `<ul>
<li>Competitive salary with project bonuses</li>
<li>Full benefits package</li>
<li>401(k) with company match</li>
<li>Professional development opportunities</li>
<li>Flexible work arrangements</li>
<li>25 days PTO + federal holidays</li>
</ul>`,
    clearanceRequired: 'Secret',
    remoteAllowed: false,
    status: 'published',
    publishedAt: new Date()
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Arlington, VA / Remote',
    employmentType: 'Full-time',
    experienceLevel: 'Mid',
    salaryRange: '$110,000 - $140,000',
    summary: 'Build and maintain the infrastructure that powers mission-critical government applications. You will implement CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and security.',
    description: `<h3>About the Role</h3>
<p>We are seeking a DevOps Engineer to join our infrastructure team. You will be responsible for building and maintaining automated deployment pipelines, managing cloud infrastructure, and ensuring the reliability and security of our government clients' systems.</p>

<h3>What You'll Do</h3>
<ul>
<li>Design and implement CI/CD pipelines for automated deployments</li>
<li>Manage cloud infrastructure using Infrastructure as Code</li>
<li>Monitor system performance and implement improvements</li>
<li>Automate operational tasks and processes</li>
<li>Implement security controls and ensure compliance</li>
<li>Collaborate with development teams to improve deployment processes</li>
<li>Participate in on-call rotation for production support</li>
</ul>

<h3>Why NexDyne</h3>
<p>Work with modern DevOps tools and practices while making a real impact on government operations. We offer competitive compensation, flexible work options, and a culture of continuous improvement.</p>`,
    requirements: `<ul>
<li>Bachelor's degree in Computer Science, IT, or related field</li>
<li>3+ years of DevOps or SRE experience</li>
<li>Strong experience with AWS or Azure</li>
<li>Proficiency with containerization (Docker, Kubernetes)</li>
<li>Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)</li>
<li>Infrastructure as Code experience (Terraform, Ansible)</li>
<li>Scripting skills (Python, Bash)</li>
<li>Understanding of security best practices</li>
</ul>`,
    niceToHave: `<ul>
<li>AWS or Azure certifications</li>
<li>Kubernetes certifications (CKA, CKAD)</li>
<li>Experience with monitoring tools (Prometheus, Grafana, Datadog)</li>
<li>FedRAMP compliance experience</li>
<li>Government sector experience</li>
</ul>`,
    benefits: `<ul>
<li>Competitive salary</li>
<li>Comprehensive health benefits</li>
<li>401(k) with company match</li>
<li>Hybrid/remote work options</li>
<li>Certification reimbursement</li>
<li>25 days PTO + federal holidays</li>
<li>Home office stipend</li>
</ul>`,
    clearanceRequired: 'Secret',
    remoteAllowed: true,
    status: 'published',
    publishedAt: new Date()
  }
];

async function seedJobs() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'nexdyne',
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined
  });

  console.log('Connected to database');

  try {
    // Check if jobs already exist
    const [existingJobs] = await connection.execute('SELECT COUNT(*) as count FROM jobs');
    if (existingJobs[0].count > 0) {
      console.log(`Found ${existingJobs[0].count} existing jobs. Skipping seed.`);
      console.log('To re-seed, delete existing jobs first.');
      return;
    }

    // Insert sample jobs
    for (const job of sampleJobs) {
      const query = `
        INSERT INTO jobs (
          slug, title, department, location, employmentType, experienceLevel,
          salaryRange, summary, description, requirements, niceToHave, benefits,
          clearanceRequired, remoteAllowed, status, publishedAt, createdAt, updatedAt
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
      `;
      
      await connection.execute(query, [
        job.slug,
        job.title,
        job.department,
        job.location,
        job.employmentType,
        job.experienceLevel,
        job.salaryRange,
        job.summary,
        job.description,
        job.requirements,
        job.niceToHave,
        job.benefits,
        job.clearanceRequired,
        job.remoteAllowed,
        job.status,
        job.publishedAt
      ]);
      
      console.log(`Created job: ${job.title}`);
    }

    console.log(`\nSuccessfully seeded ${sampleJobs.length} jobs!`);
  } catch (error) {
    console.error('Error seeding jobs:', error);
    throw error;
  } finally {
    await connection.end();
  }
}

seedJobs().catch(console.error);
