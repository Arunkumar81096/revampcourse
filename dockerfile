FROM node as nodeimage
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node
WORKDIR /app
COPY --from=nodeimage /app/node_modules ./node_modules
COPY app.js .
COPY package.json ./
EXPOSE 8080
RUN addgroup -system appgroup && adduser -system appuser -ingroup appgroup
RUN mkdir -p /app/logs
RUN chown -R appuser:appgroup /app/logs
USER appuser
ENTRYPOINT ["node"]
CMD ["app.js","development"]
