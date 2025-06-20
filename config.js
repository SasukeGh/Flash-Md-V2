require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '233599688575',
    MODE: (process.env.MODE || 'public').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'KINGSETH-MD',
    ANTICALL: process.env.ANTICALL || 'off',
    ADM: process.env.ANTIDELETE || 'on',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'off',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || '',
    timezone: 'Africa/Accra',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'unavailable'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'unavailable'),

    mapPresence
};
