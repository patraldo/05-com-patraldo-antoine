<script>
    import { Body } from 'svelte-body';
    const style = {
        color: 'green',
        '--cool-css-prop': '😎'
    };

    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>


<Body {style} />

<div class='musx'> 
  <h1 style="font-size:11vw">La Musa que Más Aplauda</h1>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');


@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}

/* https://web.dev/speedy-css-tip-animated-gradient-text/ */
.musx {
  --bg-size: 400%;
  --color-one: hsl(7 85% 43%);
  --color-two: hsl(50 95% 73%);
  background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;

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


