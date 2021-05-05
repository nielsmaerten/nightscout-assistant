module.exports = async (user) => {
    // Imports
    const admin = require("firebase-admin");

    // Parameters
    const to_name = user.name;
    const to_address = user.email;
    console.log("Sending Gluco Check invite to:", to_address, to_name);

    // Email template vars
    const template = {
        sender: 'Nightscout Status <hello@glucocheck.app>',
        subject: 'Nightscout Status is now Gluco Check',
        paragraph1: 'Hi {{first_name}}. Thank you for using Nightscout Status.',
        paragraph2: 'I wanted to let you know about Gluco Check, the successor to Nightscout Status.',
        from: 'from label',
        footer: 'footer',
        action_label: 'action label',
        action_url: 'action url',
        to_name: to_name,
        to_address: to_address
    }

    // Build email message
    const message = {
        to: to_address,
        message: {
            from: template.sender,
            subject: template.subject,
            html: todo(template),
        },
    }
    console.log('Queuing message:', message);

    // Send email
    return admin
        .firestore()
        .collection("mail")
        .add(message)
        .catch((err) => console.error("Unable to queue email", err))
        .then(() => console.log("Queued email for delivery!"));
}

function todo(template) {
    // TODO: Render HTML for email here. Use handlebars template in glucocheck-invite.hbs
    return `

    Hello ${template.to_name},
    json formatted template: ${JSON.stringify(template)}
    
    
    `

}