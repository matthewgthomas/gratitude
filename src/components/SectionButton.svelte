<!-- Adapted from https://codepen.io/kathykato/pen/rZRaNe and https://codepen.io/P1N2O/pen/pyBNzX -->
<script>
    let { children, changeSection } = $props();
</script>

<div class="button-container">
    <button class="section-button" onclick={changeSection}>
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">{@render children?.()}</span>
    </button>
</div>

<style>
    .button-container {
        margin: 0;
    }

    button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: var(--font-sans);
    }

    button.section-button {
        width: 100%;
        height: auto;
    }

    button.section-button .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
       /*width: 3rem;*/
        height: 3rem;
        background: var(--orange-primary);
        border-radius: 1.625rem;
    }

    /* Width of button on desktop */
    @media (min-width: 811px) {
        button.section-button .circle {
            width: 3rem;
        }

        button.section-button .circle .icon.arrow {
            background: none;
            left: 0.625rem;
        }

        button.section-button .button-text {
            margin: 0 0 0 1.85rem;
            padding: 0.5rem 0 0.75rem 1.7rem;
        }
    }

    /* Width of button on mobile */
    @media (max-width: 810px) {
        button.section-button .circle {
            width: 100%;
        }

        button .button-text {
            color: #fff;
            -webkit-text-fill-color: #fff;
        }

        button .circle .icon.arrow {
            background: #fff;
            /*transform: translate(1rem, 0);*/
        }

        button.section-button .circle .icon.arrow {
            background: #fff;
            left: 0.9rem;
        }

        button.section-button .button-text {
            margin: 0 0 0 0.9rem;
            padding: 0.6rem 0 0.75rem 1.7rem;
        }
    }

    button.section-button .circle::before {
        content: '';
        position: absolute; /* Position relative to the circle */
        display: block; /* Make it visible */
        width: 100%;
        height: 100%;
        background-color: var(--orange-primary);
        background: linear-gradient(90deg in oklab, var(--orange-light), var(--pink), var(--cyan));
        background-size: 400%;
        animation: gradient 8s ease infinite;
        border-radius: inherit; /* Optional: to match the circle's border-radius */
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

    button.section-button .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
    }

    button.section-button .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        /*left: 0.625rem;*/
        width: 1.125rem;
        height: 0.125rem;
        /*background: none;*/
    }

    button.section-button .circle .icon.arrow::before {
        position: absolute;
        content: '';
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
    }

    button.section-button .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /*margin: 0 0 0 1.85rem;*/
        color: var(--orange-light);
        font-weight: 700;
        line-height: 1.5;
        text-align: left;
    }

    button:hover .circle,
    button:active .circle {
        width: 100%;
    }

    button:hover .circle .icon.arrow {
        background: #fff;
        transform: translate(1rem, 0);
    }

    button:hover .button-text {
        color: #fff;
        -webkit-text-fill-color: #fff;
    }
</style>