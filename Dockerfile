FROM okteto/node:14

COPY . .
RUN yarn install

ENV PORT 8080
CMD ["npm", "run", "dev"]
