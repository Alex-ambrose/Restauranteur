This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# project outline
I want you to build me a restaurant picker website. You can take as long as you need. This will likely take 3-6 months. I will be your "client", if you have questions on how anything should work, just ask me.

Required Features:
when not logged in, the only feature available is the login page
let me log into my account. the account stores:
all of my favorite restaurants.
my restaurant reviews
my selected restaurant history
once logged in, It should let me submit a request to edit and create restaurants
we don't want anyone to be able to edit a chinese restaurant and change their name. it needs to be approved
there should be an admin account setting that allows me to  approve/deny these requests
once logged in, the website will give me the following pages:
let me pick 10 restaurants to put on a wheel. The wheel will spin and pick a restaurant. I can re-spin (and take out the last result) up to 2 times
pick a location and sort restaurants by rating, or distance from the location. Should allow me to filter by restaurants that are currently open
if the user is an admin, show a third page with a list of restaurant requests, and buttons to approve or deny the request

An account should have the following data:
email
password
reviews
favorite restaurants
restaurant visit history
isAdmin


A restaurant should have the following data:
name
notes
rating
location/address
tags for: gluten free, vegan
hours they are open
dishes they serve

Nice to haves, but not required:
import restaurants from yelp
ability to import restaurant lists from someone else's account
new restaurants have to have an admin approval before other people can see them
reviews of certain dishes at a restaurant