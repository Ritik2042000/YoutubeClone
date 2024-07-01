export function formatNumberOfViews(value) {
    if (value >= 1000000) {
        // If the value is 1,000,000 or more, format as 'M'
        let formattedValue = (value / 1000000).toFixed(1).replace(/\.0$/, '');
        return formattedValue + 'M';
    } else if (value >= 1000) {
        // If the value is 1,000 or more, format as 'K'
        let formattedValue = (value / 1000).toFixed(1).replace(/\.0$/, '');
        return formattedValue + 'K';
    } else {
        // For values less than 1,000, return the value as is
        // return value.toString();
    }
}

export function timeSince(date) {
    const now = new Date();
    const past = new Date(date);
    const secondsPast = (now - past) / 1000;

    const minutesPast = Math.floor(secondsPast / 60);
    const hoursPast = Math.floor(minutesPast / 60);
    const daysPast = Math.floor(hoursPast / 24);
    const monthsPast = Math.floor(daysPast / 30);
    const yearsPast = Math.floor(monthsPast / 12);

    if (daysPast >= 1 && daysPast <= 30) {
        return daysPast + (daysPast === 1 ? " day ago" : " days ago");
    } else if (daysPast > 30 && daysPast <= 365) {
        return monthsPast + (monthsPast === 1 ? " month ago" : " months ago");
    } else if (daysPast > 365) {
        return yearsPast + (yearsPast === 1 ? " year ago" : " years ago");
    } else if (hoursPast >= 1) {
        return hoursPast + (hoursPast === 1 ? " hour ago" : " hours ago");
    } else if (minutesPast >= 1) {
        return minutesPast + (minutesPast === 1 ? " minute ago" : " minutes ago");
    } else {
        return Math.floor(secondsPast) + (Math.floor(secondsPast) === 1 ? " second ago" : " seconds ago");
    }
}