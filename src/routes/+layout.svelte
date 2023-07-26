<script>
import { Confetti } from "svelte-confetti"
import { tick } from "svelte";

let active = false;
async function showConfetti() {
active = false;
await tick;
active = true;
}

  import "carbon-components-svelte/css/all.css";
  import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let theme = "g80";

import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  let isSideNavOpen = false;

</script>

<Header company="Antoine Patraldo" platformName="La Musa que Mas Aplauda" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/" text="Inicio" />
    <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/dibujos" data-sveltekit-preload-data text="Dibujos" />
      <HeaderNavItem href="/exhibiciones" text="Exhibiciones" />
      <HeaderNavItem href="/animaciones" data-sveltekit-preload-data text="Animaciones" />
      <HeaderNavItem href="/videos" data-sveltekit-preload-data text="Videos" />
      <HeaderNavItem href="/blog" text="Blog" />
      <HeaderNavItem href="/proyecciones" data-sveltekit-preload-data text="Proyecciones" />
      <HeaderNavItem href="/talleres" data-sveltekit-preload-data text="Talleres" />
      <HeaderNavItem href="/contacto" data-sveltekit-preload-data text="Contacto" />
      <HeaderNavItem href="/ubicacion" data-sveltekit-preload-data text="Ubicacion" />

    </HeaderNavMenu>
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink text="Inicio" />
    <SideNavMenu text="Menu">
      <SideNavMenuItem href="/dibujos" data-sveltekit-preload-data text="Dibujos" />
      <SideNavMenuItem href="/exhibiciones" text="Exhibiciones" />
      <SideNavMenuItem href="/animaciones" data-sveltekit-preload-data text="Animaciones" />
      <SideNavMenuItem href="/videos" data-sveltekit-preload-data text="Videos" />
      <SideNavMenuItem href="/blog" text="Blog" />
      <SideNavMenuItem href="/proyecciones" data-sveltekit-preload-data text="Proyecciones" />
      <SideNavMenuItem href="/talleres" data-sveltekit-preload-data text="Talleres" />
      <SideNavMenuItem href="/contacto" data-sveltekit-preload-data text="Contacto" />
      <SideNavMenuItem href="/ubicacion" data-sveltekit-preload-data text="Ubicacion" />
</SideNavMenu>
    <SideNavDivider />
    <SideNavLink text="Link 4" />
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <h1>¡Fiesta!</h1>
<button on:click={showConfetti}>Show some confetti</button>
<Confetti />
    </Column>
    </Row>
  </Grid>
</Content>
{#if active}
<Confetti />
{/if}


<div style="
position: fixed;
top: -50px;
left: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
pointer-events: none;">
<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration=5000 amount=200 fallDistance="100vh" />
</div>



<slot />
