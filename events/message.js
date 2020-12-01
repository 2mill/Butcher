module.exports = {
    name: 'message',
    description: 'Message parse, handler',
    execute(client, message) {

        prefix = client.config.get('prefix');
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        // const args = message.content.slice(prefix.length).trim(split(/ +g/));
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();
        console.log(args);
        console.log(`Running ${command}`)
        const cmd = client.commands.get(command);

        cmd.execute(message, args);

    }
}