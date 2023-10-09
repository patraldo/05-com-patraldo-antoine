<script>
    import { Body } from 'svelte-body';
    const style = {
        color: 'white',
        '--cool-css-prop': '😎'
    };

    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>


<Body {style} />

<!-- <p style="font-size:5vw;">{path}Acerca de ANTOINEX</p> -->

<!-- <div class='bienvenido'> 
  <h1 style="font-size:9vw">Bienvenid@ a mi galería en linea:</h1>
</div>
-->

<div class='musx'> 
  <h1 style="font-size:11vw">La Musa que Más Aplauda</h1>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');

@font-palette-values --colorized {
      font-family: "Bungee Spice";
      base-palette: 0;
/*    override-colors: 1 hotpink, 2 cyan, 2 white; */
/*    override-colors: 0 #00ffbb, 1 #007744; */
      override-colors: 0 DarkGreen, 1 Blue;

}

@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}

/* https://web.dev/speedy-css-tip-animated-gradient-text/ */
.musx {
  --bg-size: 400%;
  --color-one: hsl(15 90% 55%);
  --color-two: hsl(50 55% 15%);
/*  border: 10px dotted black; */
  background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
/*background: #ddd392;*/

background: linear-gradient(
                90deg,
                var(--color-one),
                var(--color-two),
                var(--color-one)
              ) 0 0 / var(--bg-size) 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: move-bg 8s infinite linear;
}


</style>


