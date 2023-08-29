# Berkeleytime Fall 2023 Frontend Take-Home Problem

Welcome! I'm Matthew and I'm the frontend lead at Berkeleytime. First of all, thank you for your continued interest in contributing to Berkeleytime. Thousands of students use Berkeleytime each semester and nothing would be possible without our team of amazing volunteers and students like yourself who want to help keep Berkeleytime alive!

Because the school year just began, I know you most likely have a lot going on, so I will try to keep this take-home problem somewhat short! Although Berkeleytime is a time commitment, it isn't a job, and I don't want anyone to be nervous about the application process!

I also don't want you to be too overwhelmed with the Berkeleytime code base, so I use the technical question to ensure you have enough experience with the frameworks and libraries we use before having you jump right in.

**Remember, there is no right or wrong answer! I want you to be creative and approach this problem how you would approach any other personal project.**

If you are having a lot of trouble or don't think you understand the problem, feel free to reach out to me on Discord (mathhulk#5603, or mathhulk) or reply to the email you received with any questions or concerns!

## Frontend Introduction

Our technical stack for frontend is primarily Vite, TypeScript, React, Redux, and SCSS modules. Our backend recently switched from a REST API to a GraphQL, so experience with GraphQL is definitely helpful, but not at all a requirement. This take-home problem will not cover GraphQL at all.

I tried to mirror our technical stack as best as possible for this take-home problem. However, the Berkeleytime code base has been a conglomeration of efforts from years of volunteer work and includes code _and_ code practices from multiple major versions of both React and Redux. I would definitely recommend taking a glance at the [Berkeleytime GitHub repository](https://github.com/asuc-octo/berkeleytime/tree/master/frontend) if you have extra time!

Here are some helpful references for this take-home problem:

- [React Router](https://reactrouter.com/en/main)
- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Overview

You are implementing a simple website where visitors should be able to browse Pokemon, "save" a Pokemon to their profile, and view the Pokemon they have saved to their profile.

This will all happen on three separate pages: Home, Browse, and Profile. If you don't want to complete any optional tasks (which will be listed after the required tasks below), you won't be editing the Home page at all, so don't be worried if you haven't touched it!

Because you won't actually be saving the visitor's selection to an external database, you will only be "saving" the user's selection to Redux. This means it will be cleared every time the page reloads and that's OK.

You will be using [PokeAPI](https://pokeapi.co/) to facilitate your implementation, which is a free REST API with extensive documentation.

### Getting Started

Please fork the repository and use the following commands to get up and running:

- `npm install`
- `npm run dev`

Much of the project has already been completed for you, so it might be helpful to click around before you start coding.

### File Structure

The overall structure should be relatively simple and easy to understand. I used Vite's `react-ts` template and removed unnecessary assets, opting instead for SCSS modules.

- `views` - Contains pages as directories
  - `{view}`
    - `index.tsx`
    - `{view}.module.scss`
- `components` - Contains components as directories
  - `{component}`
    - `index.tsx`
    - `{component}.module.scss`
- `lib` - Contains utility functions, Redux reducers, etc.
  - `api.ts` - PokeAPI utility functions and type definitions
  - `profileSlice.ts` - Profile slice (reducer, actions, and selectors) for Redux
  - `store.ts` - Redux store

### Required Tasks

These tasks are required. If you feel like you are having trouble, please don't hesitate to reach out to me on Discord (mathhulk#5603 or mathhulk).

**You are NOT ALLOWED to import any new external packages.** You really shouldn't need to! I would recommend using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for API requests, but definitely to stick to what you know.

**Please DO NOT plagiarize.** You ARE allowed to use StackOverflow, MDN, and any other forms of documentation or forums for help and I would definitely recommend it. However, please write the code yourself. I want to get to know you as a person and how you write code. On that same note, try not to use ChatGPT no matter how tempting it might be. Again, reach out if you're really struggling!

Also, feel free to change the file structure or design if you'd like. You don't need to change anything if you don't want to, but I'd love to see your creativity shine. For my sake, try not to change or overcomplicate anything too much in terms of the file structure, as I want to be able to quickly navigate and understand your submission when you're complete.

1. Implement the Browse page, where visitors should be able to browse a list of all Pokemon, including their **sprites**, **names**, **weights**, and **heights**
   - The type definitions and API utility functions have already been started for you in `lib/api.ts`
     - I would suggest using the `front_default` sprite (which has already been defined in the type definition)
   - The `PokemonCard` component has already been started for you, but you can instead create your own reusable component to display Pokemon if you'd like
   - Because the PokeAPI endpoints are paginated, you need to allow visitors to load more results by clicking the "Load more button"
     - As a hint, you have to keep track of either the `next` field of the paginated response, or the `offset` query parameter
2. Implement the select functionality, allowing visitors to "save" a Pokemon to their profile using Redux
   - The profile Redux slice has already been started for you in `lib/profileSlice.ts`, but you will have to implement the action(s) and selector(s) yourself
   - Feel free to scrap the given Redux implementation and roll out your own if you'd like, but remember you need to use Redux and you can keep it simple
3. Implement the Profile page, where visitors can view the Pokemon they "saved," including the **sprite**, **name**, **weight**, and **height**
   - If the visitor has not selected a Pokemon, redirect the visitor to the Browse page
   - The `PokemonCard` component has already been defined for you for the Browse page, so I would suggest reusing it here

For reference, here's a video of the most basic finished product:
![]()

### Submitting

Before you submit, ensure you have completed all the required tasks above. If you want to get extra creative, try to complete any number of the OPTIONAL tasks below. Don't feel pressured to do them though!

First, make sure that your repository is public on GitHub and reply to the email you received from me with a link to your repository.

### Optional Task Examples

These tasks are OPTIONAL and you are NOT REQUIRED to complete them. If you feel like you are up for a bit of a challenge and want to unleash your creativity, try to implement however many of these tasks you want or any other small ideas you might have! However, remember that you are just completing a take-home problem, so don't feel the need to spend too much time, if any, on extra work!

- Save the selected Pokemon to `localStorage` so it can persist between reloads
- Show more information about Pokemon, such as their abilities
- Indicate which Pokemon the visitor currently has selected on the Browse page as well
- Allow visitors to select and "save" multiple Pokemon rather than just one
- Implement infinite scrolling on the Browse page rather than having visitors click the "Load more" button
- Show a small subset of Pokemon on the Home page and direct the user to the Browse page to view more
- Implement search functionality on the Browse page
  - This task might be a bit more difficult than the others, so please don't feel the need to tackle it if you don't want to
  - PokeAPI doesn't offer a search endpoint so you'll need to approach this problem a bit more creatively
