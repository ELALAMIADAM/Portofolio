# EmailJS Setup Instructions

Your contact form is configured to use EmailJS but needs credentials to work. Follow these steps:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Get Your Public Key

1. Log in to EmailJS dashboard
2. Go to **Account** → **General**
3. Copy your **Public Key**

## Step 3: Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 4: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content

Example template:
```
Subject: New Contact Form Message from {{name}}

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

4. Save and copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 5: Create .env File

Create a `.env` file in the root of your project with the following content:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Step 7: Test the Contact Form

1. Open your portfolio in the browser
2. Navigate to the Contact section
3. Fill out the form and submit
4. You should receive an email at the address configured in EmailJS

## Important Notes

- ⚠️ **Never commit your `.env` file to Git** - it should be in `.gitignore`
- ✅ The `.env` file should be in the root directory (same level as `package.json`)
- ✅ All environment variables for Vite must start with `VITE_`
- ✅ Restart the dev server after creating/modifying `.env`

## For Production (GitHub Pages)

Since GitHub Pages is a static host, you have two options:

### Option 1: Use GitHub Secrets (Recommended for private repos)
This won't work for GitHub Pages as it's static hosting.

### Option 2: Hardcode values in production build (Not recommended but works)
Replace the environment variables in `ContactSection.js` with actual values before building.

### Option 3: Use a backend service (Recommended)
Create a simple backend API (Netlify Functions, Vercel Functions, or AWS Lambda) to handle form submissions securely.

### Option 4: Use Formspree or similar service
Replace EmailJS with a service like Formspree that works with static sites:
- [Formspree](https://formspree.io/) - Free tier available
- [Form.io](https://form.io/)
- [Getform](https://getform.io/)

## Troubleshooting

### Form doesn't send
- Check browser console for errors
- Verify all three environment variables are set correctly
- Make sure you restarted the dev server after creating `.env`
- Check that EmailJS service is connected to your email

### "Public Key is required" error
- Your `VITE_EMAILJS_PUBLIC_KEY` is missing or incorrect
- Make sure the variable name starts with `VITE_`

### Email not received
- Check your spam folder
- Verify the email address in EmailJS service settings
- Check EmailJS dashboard for delivery logs

## Current Status

✅ EmailJS package installed (`@emailjs/browser`)
✅ Contact form component configured
❌ Environment variables not set (`.env` file missing)

Once you create the `.env` file with your credentials, the contact form will work!
