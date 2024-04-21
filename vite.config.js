export default {
    root: './src',
    build: {
      rollupOptions: {
        input: {
          index: './src/index.html',
          another: './src/another-page.html',
        },
      },
      outDir: '../dist',
      emptyOutDir: true,    
    },
}