export async function timeoutApi(url: string): Promise<any> {
    const timeout = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error("API call timed out")), 2000)
    );

    const apiCall = fetch(url).then((response) => response.json());

    try {
        const result = await Promise.race([apiCall, timeout]);
        return result;
    } catch (err) {
        throw err;
    }
}
