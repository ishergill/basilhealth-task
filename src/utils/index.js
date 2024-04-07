export function calculateNumberOfDays(startDate, endDate) {
    // Convert strings to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate the difference in milliseconds
    const differenceInMs = end - start;
  
    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const numberOfDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  
    return numberOfDays;
  }