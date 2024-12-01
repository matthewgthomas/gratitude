<script>
    import { fade } from 'svelte/transition';
</script>
  
<div 
    class="overlay"
    transition:fade={{ duration: 1200 }}
>
    <div class="content">
        <h1>Coming soon</h1>
    </div>
</div>
  
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
</style>