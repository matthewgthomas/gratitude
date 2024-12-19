<!-- 
    Button adapted from https://codepen.io/kocsten/pen/rggjXp
-->
<script>
    import { fade } from 'svelte/transition';

    // Finger pointer icon adapted from https://fontawesome.com/icons/hand-pointer?f=classic&s=regular&pc=%23B197FC&sc=%23B197FC
    import Pointer from "$lib/assets/pointer.svg?raw";
    
    let visible = true;
    
    function handleClick() {
      visible = false;
    }
</script>

{#if visible}
    <div 
      class="overlay"
      tabindex="0"
      role="button"
      onclick={handleClick}
      onkeyup={handleClick}
      transition:fade={{ duration: 1200 }}
    >
        <div class="content">
            <h1>“You don’t seem like yourself”</h1>
        </div>
        <div class="content-button">
            <button 
                class="glow-on-hover"
                onclick={handleClick}
                transition:fade={{ duration: 2000 }}
            >
                {@html Pointer}
            </button>
        </div>
    </div>
{/if}
  
<style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #1e252d;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      box-sizing: border-box;
      z-index: 9999;
    }
  
    .content {
      transform: translateY(33%);
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .content-button {
        transform: translateY(30%);
        text-align: center;
        border-radius: 10px;
    }

    h1 {
        font-size: 5rem;
    }

    @media screen and (max-width: 736px) {
        h1 {
            font-size: 3.25rem;
            line-height: 1.1;
            margin-bottom: 1rem;
        }
    }
    /*
    button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      background: transparent;
      color: white;
      border: 2px solid white;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    */
    /*
    button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    */
    .glow-on-hover {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        background: #1e252d;

        /*width: 220px;
        height: 50px;*/
        border: none;
        outline: none;
        color: #fff;

        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
    }

    .glow-on-hover:before {
        content: '';
        /* background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000); */
        /*background: linear-gradient(45deg, #cc5803, #ff7900, #ff9e00, #ff5eaa, #9d4edd, #7b2cbf, #7a00ff, #3c096c);*/
        background: linear-gradient(90deg in oklab, var(--orange-light), var(--pink), var(--purple-bright), var(--cyan));
        position: absolute;
        top: -4px;
        left:-4px;
        background-size: 400%;
        z-index: -1;
        /*filter: blur(5px);*/
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        /*animation: glowing 20s linear infinite;*/
        animation: gradient 5s ease infinite;
        opacity: 1;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    .glow-on-hover:hover {
        color: #000;
    }

    .glow-on-hover:hover:after {
        background: transparent;
    }

    .glow-on-hover:active {
        color: #000;
        background: transparent;
    }

    .glow-on-hover:active:after {
        background: transparent;
    }

    .glow-on-hover:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #1e252d;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>