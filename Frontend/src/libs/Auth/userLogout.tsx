export default async function userLogout(){
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/logout`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if(!response.ok){
        throw new Error("Failed to logout")
    }

    return await response.json();
}