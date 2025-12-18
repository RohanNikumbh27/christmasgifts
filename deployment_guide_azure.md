# Deploying Next.js to Azure Static Web Apps

Since you have the GitHub Student Developer Pack and Azure credits, the best way to deploy a Next.js application is using **Azure Static Web Apps**. It handles building your app automatically from GitHub and scales well.

## Prerequisite: Push Code to GitHub

Before deploying, your latest code (including the new MongoDB API routes) must be on GitHub.

1.  Open your terminal.
2.  Run these commands to save and push your changes:

```bash
git add .
git commit -m "Add MongoDB integration and prize showcase"
git push origin main
```

---

## Step 1: Create the Azure Static Web App

1.  Log in to the [Azure Portal](https://portal.azure.com).
2.  In the search bar at the top, type **"Static Web Apps"** and select it.
3.  Click **+ Create**.
4.  **Subscription**: Select your "Azure for Students" subscription.
5.  **Resource Group**: Click "Create new" and name it something like `christmas-gifts-rg`.
6.  **Name**: Name your app, e.g., `trustchristmas-carnival`.
7.  **Plan Type**: Select **Free** (for free hosting) or **Standard** (since you have credits, this allows more features like multiple custom domains and scaling). Standard costs minimal per month but uses your credits.
8.  **Deployment details**:
    *   **Source**: Select **GitHub**.
    *   **Sign in with GitHub**: Authenticate and authorize Azure to access your repo.
    *   **Organization**: Select your GitHub username/org.
    *   **Repository**: Select `christmasgifts`.
    *   **Branch**: Select `main`.
9.  **Build Details**:
    *   **Build Presets**: Select **Next.js**.
    *   **App location**: `/` (Leave default)
    *   **Api location**: (Leave empty, Azure detects Next.js API routes automatically)
    *   **Output location**: (Leave default)
10. Click **Review + create**, then **Create**.

*Azure will now create the resource and automatically add a workflow file to your GitHub repository to start the deployment.*

---

## Step 2: Configure Environment Variables (Crucial for MongoDB)

Your app needs the `MONGODB_URI` to work, but we shouldn't commit `.env.local` to GitHub. We add it directly in Azure.

1.  Go to your new **Static Web App** resource in the Azure Portal.
2.  On the left menu, under **Settings**, click **Configuration** (sometimes called **Environment variables**).
3.  Click **+ Add**.
4.  **Name**: `MONGODB_URI`
5.  **Value**: Paste your connection string from `.env.local` (the one starting with `mongodb+srv://...`).
6.  Click **OK**.
7.  **IMPORTANT**: Click **Save** at the top of the page.

*Note: For the environment variables to take effect, the app might need a restart or a redeploy. Using the "Save" button usually triggers the necessary updates.*

---

## Step 3: Verify Deployment

1.  On the **Overview** page of your Static Web App, look for the **URL** (it will look like `https://white-desert-1234.azurestaticapps.net`).
2.  Click it to verify your site is live!
3.  Test the "Share" flow to ensure it saves emails to MongoDB.

---

## Step 4: Add Custom Domain Name

1.  On your Static Web App page, go to **Custom domains** in the sidebar.
2.  Click **+ Add**.
3.  Select **Custom domain on other DNS**.
4.  Enter your domain name (e.g., `www.yourdomain.com`).
5.  Azure will provide DNS records you need to add to your domain registrar (GoDaddy, Namecheap, etc.):
    *   **Type**: CNAME
    *   **Host/Name**: `www`
    *   **Value** (Target): The obscure Azure URL (e.g., `white-desert-1234.azurestaticapps.net`).
6.  Log in to your domain registrar's website, go to DNS management, and add this CNAME record.
7.  Back in Azure, click **Add**. Azure will verify the record (can take a few minutes to hours).

**For the root domain (without www, e.g., `yourdomain.com`):**
*   Azure Static Web Apps usually requires an **ALIAS** or **ANAME** record, or a **TXT** record for verification if your DNS provider doesn't support ALIAS at the root. Azure will guide you through the specific TXT record validation if needed.
