FROM mhart/alpine-node:latest

# kopio konttiin projektihakemiston sisältö
COPY . /app

# kontin sovellus suoritetaan ao.hakemistossa
WORKDIR /app

# julkaise ulospäin portti 8080
EXPOSE 8080

#lue package.json -tiedosto ja asenna riippuvuudet
RUN npm install

CMD ["node", "server.js"]