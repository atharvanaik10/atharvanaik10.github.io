<script>
  import { Button, Icon } from 'm3-svelte'
  import iconMail from '@ktibow/iconset-material-symbols/mail-outline'
  import { experiences } from '../lib/experience.js'
  import { projects } from '../lib/projects.js'
  import { researchItems, researchSynopsisHtml } from '../lib/research.js'
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
    <p class="hero-intro type-body">I’m a Trading Operations Engineer at
      <a href="https://www.flowtraders.com/" target="_blank">Flow Traders</a> in New York. I recently completed an M.S. in Computer Science at the
      <a href="https://cs.illinois.edu" target="_blank">University of Illinois Urbana-Champaign</a>, where I also earned a B.S. in Mathematics & Computer Science.
      <br><br>
      My research focuses on game-theoretic and optimization methods for public-sector resource allocation, particularly under strategic behavior, uncertainty, and operational constraints. I currently work with Professor <a href="https://rutamehta.cs.illinois.edu/" target="_blank">Ruta Mehta</a> on security-game formulations of police patrol allocation. My M.S. thesis, completed with Professor <a href="https://koustuv.com/" target="_blank">Koustuv Saha</a>, examined caste bias in LLM-driven matchmaking and evaluated a guardrail-based intervention designed to mitigate biased reasoning.
      <br><br>
      Before Flow Traders, I built systems for LLM-agent observability and evaluation at <a href="https://www.cboe.com/" target="_blank">Cboe Global Markets</a>, and forecasting and survival-analysis models at <a href="https://www.ameren.com/about-ameren" target="_blank">Ameren</a>. I have taught <a href="https://cs173.tech/" target="_blank">discrete mathematics</a>, <a href="https://courses.grainger.illinois.edu/cs440/fa2024/syllabus.html" target="_blank">artificial intelligence</a>, <a href="https://courses.grainger.illinois.edu/cs421/fa2026/" target="_blank">compilers</a>, and <a href="https://las.illinois.edu/resources/international/globallearning/leaders" target="_blank">human-centered design</a>, and I support the digital infrastructure and public web presence of <a href="https://www.rnrcollective.com/" target="_blank">R+R Collective</a>. I'm also currently building <a href="https://www.beanheads.social">Beanheads</a>.
    </p>
    <div class="hero-actions">
      <Button variant="filled" size="m" href="https://github.com/atharvanaik10" target="_blank" rel="noreferrer" iconType="left">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.2 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>
        GitHub
      </Button>
      <Button variant="filled" size="m" href="https://www.linkedin.com/in/atharvanaik10" target="_blank" rel="noreferrer" iconType="left">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.4 2.5 4.4 5.7v6.1ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.9 20.5H3.3V9h3.6v11.5Z" /></svg>
        LinkedIn
      </Button>
      <Button variant="outlined" size="m" href="mailto:atharvanaik10@gmail.com" iconType="left">
        <Icon icon={iconMail} size={20} />
        atharvanaik10@gmail.com
      </Button>
    </div>
  </div>
  <div class="portrait-frame">
    <img src={assetUrl('/headshot.jpg')} alt="Atharva Naik headshot" />
  </div>
</section>

<section id="research" class="editorial-section">
  <SectionLabel title="Research" kind="research" />
  <div class="section-content stacked-list">
    {#if researchSynopsisHtml}
      <div class="research-synopsis type-body">{@html researchSynopsisHtml}</div>
    {/if}
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
