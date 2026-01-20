import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                metodoStart: resolve(__dirname, 'metodo-start/index.html'),
                protocoloVingadores: resolve(__dirname, 'protocolo-vingadores/index.html'),
            },
        },
    },
})
