<script>
import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;


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

<Header
persistentHamburgerMenu={true}
company="Antoine Patraldo" 
platformName="La Musa que Mas Aplauda" 
bind:isSideNavOpen
>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/" text="Inicio" />
    <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/dibujos"  text="Dibujos" />
      <HeaderNavItem href="/exhibiciones" text="Exhibiciones" />
      <HeaderNavItem href="/animaciones"  text="Animaciones" />
      <HeaderNavItem href="/videos"  text="Videos" />
      <HeaderNavItem href="/blog" text="Blog" />
      <HeaderNavItem href="/proyecciones"  text="Proyecciones" />
      <HeaderNavItem href="/talleres"  text="Talleres" />
      <HeaderNavItem href="/contacto"  text="Contacto" />
      <HeaderNavItem href="/ubicacion"  text="Ubicacion" />

    </HeaderNavMenu>
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href="/"  text="Inicio" />
    <SideNavMenu text="Menu">
      <SideNavMenuItem href="/dibujos"  text="Dibujos" />
      <SideNavMenuItem href="/exhibiciones" text="Exhibiciones" />
      <SideNavMenuItem href="/animaciones"  text="Animaciones" />
      <SideNavMenuItem href="/videos"  text="Videos" />
      <SideNavMenuItem href="/blog" text="Blog" />
      <SideNavMenuItem href="/proyecciones"  text="Proyecciones" />
      <SideNavMenuItem href="/talleres"  text="Talleres" />
      <SideNavMenuItem href="/contacto"  text="Contacto" />
      <SideNavMenuItem href="/ubicacion"  text="Ubicacion" />
</SideNavMenu>
    <SideNavDivider />
    <SideNavLink href="/exhibiciones"  text="Proxima Exhibicion" />
  </SideNavItems>
</SideNav>

@import url('https://fonts.googleapis.com/css2?family=Hurricane&family=Inspiration&family=Special+Elite&display=swap');


<Content>
  <Grid>
    <Row>
      <Column>
        <h1 style="font-size:10vw; font-family:'Special Elite'; text-align: center; color: black;">{path.toUpperCase().replace("/","")}</h1>
<Confetti colorArray={["url(https://storage.googleapis.com/patraldo/antoine-dibujos/PXL_20220706_201136055.webp)"]} />
    </Column>
    </Row>
  </Grid>
</Content>
{#if active}
<Confetti noGravity x={[-1, 1]} y={[-1, 1]} delay={[0, 50]} duration=1000 colorRange={[0, 120]} />
<Confetti noGravity x={[-1, 1]} y={[-1, 1]} delay={[550, 550]} duration=1000 colorRange={[120, 240]} />
<Confetti noGravity x={[-1, 1]} y={[-1, 1]} delay={[1000, 1050]} duration=1000 colorRange={[240, 360]} />
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
<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration=5000 amount=200 fallDistance="100vh" colorArray={["url(https://storage.googleapis.com/patraldo/antoine-dibujos/300x300-202210O28-01webp/PXL_20221028_162614223.webp)"]} />



</div>



<slot />
