// File: src/shared/utils/Email.ts
// Description: This file contains a utility function for validating email addresses.
// It uses a regular expression to validate the email format.
// The function returns true if the email is valid, and false otherwise.
// The regex pattern checks for the presence of an '@' symbol, a domain name, and a top-level domain.
// The function is exported for use in other parts of the application.

export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
