const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
    apiUrl: (() => {
        const baseUrl = String(import.meta.env.VITE_API_URL) || 'http://localhost:8000';
        return baseUrl.endsWith('/api/v1') ? baseUrl : `${baseUrl}/api/v1`;
    })(),
    googleClientId: String(import.meta.env.VITE_GOOGLE_CLIENT_ID)
};

export default conf;
