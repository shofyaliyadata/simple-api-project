# Menggunakan base image Node.js yang ringan
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dulu untuk optimasi cache layer Docker
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua source code
COPY . .

# Ekspos port aplikasi
EXPOSE 3000

# Perintah menjalankan aplikasi
CMD ["node", "index.js"]