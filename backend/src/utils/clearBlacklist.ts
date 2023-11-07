import cron from 'node-cron';
import Blacklist from '../models/blacklistedToken';

// Function to clear the blacklist
async function clearBlacklist() {

    try {
        const currentDate = Math.floor(Date.now() / 1000);

        const tokens = await Blacklist.deleteMany({
            expiryAt: { $lt: currentDate },
        }).exec();

        if(tokens)
        {
            console.log('Blacklist Cleared!');
        }

        else{
            console.log("Something went wrong while clearing blacklist!")
        }

    } catch (error) {
        console.log(error)
    }

}

// Schedule a daily cleanup task
const clearBlacklistScheduler = cron.schedule('0 0 * * *', () => {
    clearBlacklist();
});

export default clearBlacklistScheduler ;