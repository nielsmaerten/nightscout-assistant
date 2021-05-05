// @ts-check
module.exports = async (user) => {
    // Imports
    const admin = require("firebase-admin");
    
    // Email envelope    
    const given_name = user.profile.payload.given_name;
    console.log(`Sending Gluco Check invite to: ${given_name} (${user.email})`);

    // Construct email template
    const template = {
        subject: 'Nightscout Status is now: Gluco Check',
        paragraph1: `Hi ${given_name},
        Thank you for using Nightscout Status!
        We wanted to let you know we've recently published **Gluco Check**,
        the official successor to Nightscout Status.
        `,
        paragraph2: `**Gluco Check** includes new features (such as reading out your carbs on board, sensor age, etc)
        and will soon replace Nightscout Status. We recommend you upgrade now. It's free and only takes a minute.`,
        from: 'All the best! Niels & David, developers of Gluco Check',
        footer: 'You received this email because you recently used Nightscout Status',
        action_label: 'Upgrade to Gluco Check',
        action_url: 'https://glucocheck.app?ref=invite-email',
    }

    // Build email message
    const message = {
        to: user.email,
        message: {
            subject: template.subject,
            html: compileTemplate(template),
        },
    }

    // Send email
    return admin
        .firestore()
        .collection("mail")
        .add(message)
        .catch((err) => console.error("Unable to queue email", err))
        .then(() => console.log("Queued email for delivery!"));
}

function compileTemplate(template) {
    const hbs_source = require("fs").readFileSync("./glucocheck-invite.hbs").toString();
    const Handlebars = require("handlebars");
    const hbs_template = Handlebars.compile(hbs_source);
    const html = hbs_template(template);
    return html;
}