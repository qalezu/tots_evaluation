export function generateRandomUser() {
    return 'user' + Math.random().toString(36).substring(2, 8);
}
