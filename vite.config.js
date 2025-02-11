import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/app.jsx',
            'resources/css/app.css'
        ]),
        react(),
    ],
    // server: {
    //     host: '0.0.0.0', // Make it accessible externally
    //     port: 3000, // Use your desired port
    //   },
})
