# Burn After Burning
A story about gratitude: https://matthewgthomas.co.uk/gratitude/

## Building this choose your own adventure essay

I built the website using [Svelte](https://svelte.dev/), a speedy framework sitting atop HTML, CSS and JavaScript.

The story content lives in a Google Doc; the links between story sections are in a Google Sheet. Both are scraped (in Markdown and CSV formats, respectively) using a [custom script](https://github.com/matthewgthomas/gratitude/blob/main/tasks/gdoc-to-markdown.py). The [MDsveX Markdown preprocessor](https://mdsvex.pngwn.io/) displays the content in Svelte components. Use `npm run gdoc` to get the latest content and links.

The buttons were adapted from code by [Kocsten](https://codepen.io/kocsten/pen/rggjXp), [Katherine Kato](https://codepen.io/kathykato/pen/rZRaNe) and [Manuel Pinto](https://codepen.io/P1N2O/pen/pyBNzX).

The charts were built using [Layer Cake](https://layercake.graphics/). Big thanks to the UK's Office for National Statistics for making their Svelte [components](https://github.com/ONSvisual/svelte-components/) and [charts](https://github.com/ONSvisual/svelte-charts) openly availble - I took a lot of inspiration from them.

The finger pointer icon was adapted from [Font Awesome](https://fontawesome.com/icons/hand-pointer?f=classic&s=regular&pc=%23B197FC&sc=%23B197FC); the asterisk icon was adapted from [SVG Repo](https://www.svgrepo.com/svg/402968/asterisk?edit=true).

## Analysis of gratitudes

Statistical analysis of my gratitude journal happened in R and Python. You'll find all the code in the [`nlp/` folder](https://github.com/matthewgthomas/gratitude/tree/main/nlp). For the thematic analysis, I used the [deberta-v3-large-zeroshot-v2.0 language model](https://huggingface.co/MoritzLaurer/deberta-v3-large-zeroshot-v2.0) to do zero-shot text classification.

## Running a local copy of this story

Once you've cloned this project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
