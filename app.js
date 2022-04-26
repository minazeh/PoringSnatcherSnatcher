import selfcore from "selfcore";

const client = new selfcore()
const gateway = new selfcore.Gateway("MzI3NzI5MDg1MzE5MDg2MDgw.Ymg2FA.WWygggtj3PUz-WAGhnjCEL95n0Y")

gateway.on("message", m => {
    if(m.channel_id === "814772719542599680"){
        let content = m.content ? m.content : {embeds: [m.embeds[0]] };
        
        client.sendWebhook(
            "https://discord.com/api/webhooks/968576382089179176/lBFOCswfZJ5csr-XXB_UB5EUI0r5NQSVaUO9OUrvRtSaq7WP0Od8Dw9eGgwQXvst8CZY", 
            content 
        );
    }

    if(m.channel_id === "797758070776266755"){
        let content = m.content ? m.content : {embeds: [m.embeds[0]] };
        
        client.sendWebhook(
            "https://discord.com/api/webhooks/968576382089179176/lBFOCswfZJ5csr-XXB_UB5EUI0r5NQSVaUO9OUrvRtSaq7WP0Od8Dw9eGgwQXvst8CZY", 
            content 
        );
    }
})