# Deploying to Cloudflare Pages

This project is configured to deploy to Cloudflare Pages using the `@cloudflare/next-on-pages` adapter.

## Prerequisites

1. A Cloudflare account (sign up at https://dash.cloudflare.com)
2. Your GitHub repository connected to Cloudflare Pages

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Dashboard**
   - Visit https://dash.cloudflare.com
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**

2. **Connect Your Repository**
   - Select **GitHub** as your Git provider
   - Authorize Cloudflare to access your GitHub account
   - Select the repository: `calvinrahmat/mbokrum-bio`

3. **Configure Build Settings**
   - **Project name**: `mbokrum` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: `Next.js` (or leave as default)
   - **Build command**: `npm run build:cf`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/` (leave as default)

4. **Environment Variables** (if needed)
   - Add any environment variables your app requires
   - For this project, none are required

5. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - Your site will be available at `https://mbokrum.pages.dev` (or your custom domain)

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build and Deploy**
   ```bash
   npm run pages:deploy
   ```

   Or manually:
   ```bash
   npm run build:cf
   wrangler pages deploy .vercel/output/static
   ```

## Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to GitHub, Cloudflare Pages will automatically:
- Deploy on every push to the `main` branch
- Create preview deployments for pull requests
- Rebuild on every commit

## Build Configuration

- **Build command**: `npm run build:cf`
- **Output directory**: `.vercel/output/static`
- **Node version**: Cloudflare Pages uses Node.js 18.x by default

## Troubleshooting

### Build Fails
- Check the build logs in Cloudflare Pages dashboard
- Ensure all dependencies are listed in `package.json`
- Verify the build command is correct

### Images Not Loading
- Ensure images are in the `public` folder
- Check that image paths are correct (should start with `/`)

### Runtime Errors
- Check browser console for errors
- Review Cloudflare Pages function logs in the dashboard

## Local Development

To test the Cloudflare Pages build locally:

```bash
npm run build:cf
wrangler pages dev .vercel/output/static
```

This will start a local server that mimics the Cloudflare Pages environment.

