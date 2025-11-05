# EmailJS Setup Instructions for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up the template with these variables:
   - **To Email**: `brunodevelopmentworks@gmail.com`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `New Contact Form Message from {{from_name}}`
   - **Message Body**:
     ```
     You have received a new message from your website contact form.

     Name: {{from_name}}
     Email: {{from_email}}

     Message:
     {{message}}

     ---
     This message was sent from your portfolio website.
     ```
4. Save the template and note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxx`)
3. Note this down securely

## Step 5: Update the JavaScript Code
1. Open `script.js`
2. Replace the placeholder values:
   ```javascript
   const serviceID = 'your_actual_service_id'; // Replace with your Service ID
   const templateID = 'your_actual_template_id'; // Replace with your Template ID
   const publicKey = 'your_actual_public_key'; // Replace with your Public Key
   ```

## Step 6: Test the Contact Form
1. Open your website in a browser
2. Fill out and submit the contact form
3. Check your email (`brunodevelopmentworks@gmail.com`) for the message
4. Verify that the success/error messages display correctly

## Important Notes
- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Security**: Never expose your private keys in client-side code for production
- **Spam Protection**: Consider adding reCAPTCHA for production use
- **Backup**: Keep a backup email service as fallback

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all IDs and keys are correct
- Ensure your email service is properly connected
- Check that your domain is allowed in EmailJS settings

## Alternative Solutions
If EmailJS doesn't meet your needs, consider:
- **Formspree**: Simple form handling service
- **Netlify Forms**: For static sites
- **Custom Backend**: Node.js/Express with Nodemailer
- **PHP Mail**: Traditional server-side solution
