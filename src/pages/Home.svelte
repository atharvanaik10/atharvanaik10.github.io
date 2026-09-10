<script>
  import { Button, LoadingIndicator } from 'm3-svelte'
  import { experiences } from '../lib/experience.js'
  import { projects } from '../lib/projects.js'
  import { researchItems } from '../lib/research.js'
  import ExperienceItem from '../components/ExperienceItem.svelte'
  import ProjectCard from '../components/ProjectCard.svelte'
  import ResearchItem from '../components/ResearchItem.svelte'
  import SectionLabel from '../components/SectionLabel.svelte'

  const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^[/]+/, '')}`
</script>

<section id="about" class="hero-section">
  <div class="hero-copy">
    <h1 class="type-hero">Hello, I'm Atharva.</h1>
    <!-- prettier-ignore -->
    <p class="hero-intro type-body">I’m a second year M.S. student studying
      Computer Science at the
      <a href="https://cs.illinois.edu" target="_blank">University of Illinois Urbana-Champaign</a>,
      where I also graduated with a B.S. in Mathematics & Computer Science. My thesis research is focused on
      <a href="https://oncare.cs.illinois.edu" target="_blank">AI bias and safety</a>,
      advised by Professor <a href="https://koustuv.com/" target="_blank">Koustuv Saha</a>.
      I also work on research in Algorithmic Game Theory, advised by Professor <a href="https://rutamehta.cs.illinois.edu/" target="_blank">Ruta Mehta</a>.
      <br><br>
      Most recently, I was a Machine Learning Intern handling Agentic AI monitoring and evaluation at <a href="https://www.cboe.com/" target="_blank">Cboe Global Markets</a>.
      Before that, I was a Machine Learning Intern at <a href="https://www.ameren.com/about-ameren" target="_blank">Ameren</a>, where I worked on time-series forecasting and deep-learning for survival analysis.
      <br><br>
      I am currently a teaching assistant for <a href="https://cs173.tech/" target="_blank">CS 173 Discrete Structures</a>, and I've previously
      TA'd for <a href="https://courses.grainger.illinois.edu/cs440/fa2024/syllabus.html" target="_blank">CS 440 Artificial Intelligence</a> and CS 421 Compilers.
    </p>
    <div class="hero-actions">
      <Button variant="filled" size="m" href="https://github.com/atharvanaik10" target="_blank" rel="noreferrer" iconType="left">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.2 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>
        GitHub
      </Button>
      <Button variant="outlined" size="m" href="https://www.linkedin.com/in/atharvanaik10" target="_blank" rel="noreferrer" iconType="left">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.4 2.5 4.4 5.7v6.1ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.9 20.5H3.3V9h3.6v11.5Z" /></svg>
        LinkedIn
      </Button>
      <Button variant="text" size="m" href="mailto:atharvanaik10@gmail.com" iconType="left">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.1-.5L12 10.3 19.9 5H4.1Zm15.9 2.2-7.4 5a1 1 0 0 1-1.2 0l-7.4-5v11.3c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.2Z" /></svg>
        atharvanaik10@gmail.com
      </Button>
    </div>
  </div>
  <div class="portrait-frame">
    <img src={assetUrl('/headshot.jpg')} alt="Atharva Naik headshot" />
    <div class="portrait-accent" aria-hidden="true"></div>
    <div class="portrait-motion" aria-hidden="true">
      <LoadingIndicator size={64} container={true} center={false} aria-hidden="true" />
    </div>
  </div>
</section>

<section id="research" class="editorial-section">
  <SectionLabel title="Research" kind="research" />
  <div class="section-content stacked-list">
    {#each researchItems as item}
      <ResearchItem {item} />
    {/each}
  </div>
</section>

<section id="experience" class="editorial-section">
  <SectionLabel title="Experience" kind="experience" />
  <div class="section-content stacked-list">
    {#each experiences as exp}
      <ExperienceItem {exp} />
    {/each}
  </div>
</section>

<section id="projects" class="editorial-section">
  <SectionLabel title="Projects" kind="projects" />
  <div class="section-content project-grid">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>
