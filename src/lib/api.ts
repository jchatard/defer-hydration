export async function fetchMenuMain() {
    const headers: Record<string, string> = { "User-Agent": "chrome" };

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {headers});
        let text = await response.text();
        return JSON.parse(text);
    }
    catch (error) {
        return {error};
    }
}

export async function fetchMenuFooter() {
    const headers: Record<string, string> = { "User-Agent": "chrome" };

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/photos", {headers});
        let text = await response.text();
        return JSON.parse(text);
    }
    catch (error) {
        return {error};
    }
}

export async function fetchComments() {
    const headers: Record<string, string> = { "User-Agent": "chrome" };

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/albums", {headers});
        let text = await response.text();
        return JSON.parse(text);
    }
    catch (error) {
        return {error};
    }
}

export async function fetchPhotos() {
    const headers: Record<string, string> = { "User-Agent": "chrome" };

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/photos", {headers});
        let text = await response.text();
        return JSON.parse(text);
    }
    catch (error) {
        return {error};
    }
}