import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jjiodmtskrojvqqoixwy.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqaW9kbXRza3JvanZxcW9peHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MjkxMjUsImV4cCI6MjA0NzEwNTEyNX0.rFHRgvVccFEl8k4t7FImggtiy7j5FEiv9uk6VeQixL0",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqaW9kbXRza3JvanZxcW9peHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MjkxMjUsImV4cCI6MjA0NzEwNTEyNX0.rFHRgvVccFEl8k4t7FImggtiy7j5FEiv9uk6VeQixL0"
    }
});